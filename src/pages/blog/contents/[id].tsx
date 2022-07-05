import { ParsedUrlQuery } from 'node:querystring';
import { Entry } from 'contentful';
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult, GetStaticPropsResult } from 'next';
import { highlightAll } from 'prismjs';
import React, { useEffect } from 'react';
import { getEntries } from '@/pages/api/contentful/get-entries';
import { getEntry } from '@/pages/api/contentful/get-entry';
import 'prismjs/themes/prism-tomorrow.min.css';

// Types
interface Props {
  content: Entry<unknown>;
}

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
interface StaticPropsResult {
  content: Entry<unknown>;
}
export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
): Promise<GetStaticPropsResult<StaticPropsResult>> => {
  // 記事詳細APIからデータを取得

  const { id } = context?.params || {};
  if (typeof id !== 'string') {
    throw new Error('Error: No ID');
  }

  const { data, err } = await getEntry(id);
  if (data && data.sys) {
    return {
      props: {
        content: data,
      },
    };
  }

  throw new Error(JSON.stringify(err));
};

const Blog: React.FC<Props> = (props) => {
  console.log(props.content);
  useEffect(() => {
    highlightAll();
  }, []);

  return (
    <main className="container">
      <pre className="line-numbers">
        <code className="lang-javascript">{JSON.stringify(props.content)}</code>
      </pre>
    </main>
  );
};

export default Blog;
