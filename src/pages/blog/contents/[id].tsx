import { ParsedUrlQuery } from 'node:querystring';
import { compiler } from 'markdown-to-jsx';
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { highlightAll } from 'prismjs';
import React, { useEffect } from 'react';
import { getEntry, getEntries, IBlogFields, Asset } from '@/api/libs/contentful';
import { Header } from '@/components/common/atoms/header';
import { CustomCode } from '@/components/features/blog/custom-code';
import { CustomPre } from '@/components/features/blog/custom-pre';
import { PostTime } from '@/components/features/blog/post-time';
import 'prismjs/themes/prism-tomorrow.min.css';
import styles from '@/pages/blog/contents/[id].module.css';

// Types
interface Props extends IBlogFields {}

interface Params extends ParsedUrlQuery {
  id: string;
}

// GetStaticPaths
export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult<Params>> => {
  // 記事一覧APIからデータを取得
  const { data, err } = await getEntries();
  if (data && data.items) {
    const paths = data.items.map((item) => ({ params: { id: item.sys.id } }));
    return { paths: paths, fallback: false };
  }

  throw new Error(JSON.stringify(err));
};

// GetStaticProps
export const getStaticProps: GetStaticProps<Props, Params> = async (context): Promise<GetStaticPropsResult<Props>> => {
  // 記事詳細APIからデータを取得
  const { id } = context?.params || {};
  if (typeof id !== 'string') {
    throw new Error('Error: No ID');
  }

  const { data, err } = await getEntry(id);
  if (data && data.sys) {
    return {
      props: {
        ...data.fields,
      },
    };
  }

  throw new Error(JSON.stringify(err));
};

const BlogImage: React.FC<{ headerImage: Asset | undefined }> = ({ headerImage }): React.ReactElement | null => {
  if (headerImage && headerImage.sys) {
    const values: React.ComponentProps<'img'> = {
      width: '100%',
      height: 200,
      src: `https:${headerImage.fields.file.url}`,
    };

    return <img className={styles.BlogContents__Img} {...values} alt="" />;
  }

  return null;
};

const Blog: React.FC<Props> = (props) => {
  useEffect(() => {
    highlightAll();

    // 理由不明...なぜか横幅と実表示が異なるので、
    // ひとまずmin-widthを指定するようにすると直る
    document.body.classList.add('blog');

    return function cleanUp() {
      document.body.classList.remove('blog');
    };
  }, []);

  console.log(props.body);

  return (
    <>
      <Head>
        <title>{`yakumomutsuki | blog | ${props.title}`}</title>
        <meta name="description" content={`yakumomutsuki | ${props.title}`} />
      </Head>

      <Link href={'/'}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Header />
        </a>
      </Link>

      <main className="container">
        <BlogImage headerImage={props.headerImage} />

        <div className="lead">
          <section className={`content ${styles.BlogContents__Section}`}>
            <PostTime type={'created'} dateTimeText={props.createdAt} />
            <h1 className={styles.BlogContents__Heading}>{props.title}</h1>

            {/* Rendering Contents */}
            {compiler(props.body, {
              slugify: str => str,
              wrapper: null,
              overrides: {
                pre: CustomPre,
                code: CustomCode,
              },
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default Blog;
