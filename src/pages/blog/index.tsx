import { GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { getEntries, IBlogFields } from '@/api/libs/contentful';
import { Card } from '@/components/common/atoms/card';
import { Header } from '@/components/common/atoms/header';

interface Entry extends IBlogFields {
  id: string;
}

interface Props {
  entries: Array<Entry>;
}

// GetStaticProps
export const getStaticProps: GetStaticProps<Props, {}> = async (): Promise<GetStaticPropsResult<Props>> => {
  // 記事一覧APIからデータを取得
  const { data, err } = await getEntries();
  if (data && data.items) {
    return {
      props: {
        entries: data.items.map((it) => ({
          id: it.sys.id,
          ...it.fields,
        })),
      },
    };
  }

  throw new Error(JSON.stringify(err));
};

const ListPage: React.FC<Props> = ({ entries }) => {
  const href = (id: string) => `/blog/contents/${id}`;
  const imgSrc = (entry: Entry) => (entry.headerImage ? entry.headerImage.fields.file.url : '');

  return (
    <>
      <Head>
        <title>yakumomutsuki | blog </title>
        <meta name="description" content="yakumomutsuki's blog" />
      </Head>

      <Link href={'/'}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Header />
        </a>
      </Link>

      <main className="container">
        <div className="lead">
          <div className="content">
            <h1 className="heading">ブログ一覧</h1>
            <div className="columns is-multiline">
              {/* Render Card List */}
              {entries.map((entry, idx) => (
                <Link href={href(entry.id)} key={`card_${idx}`}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="block column is-4-desktop is-6-tablet">
                    <Card imgSrc={imgSrc(entry)} text={entry.title} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListPage;
