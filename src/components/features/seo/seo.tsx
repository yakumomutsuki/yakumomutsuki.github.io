import Head from 'next/head';
import React from 'react';

interface MetaData {
  pageTitle: string;
  pageDescription: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}

export const Seo: React.FC<MetaData> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg = `https://yakumomutsuki.github.io/profile.jpeg`,
  pageImgWidth,
  pageImgHeight,
}) => {
  const siteUrl = 'https://yakumomutsuki.github.io';

  const title = pageTitle;
  const description = pageDescription;
  const url = pagePath ? siteUrl + pagePath : siteUrl;
  const imgUrl = pageImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      <link rel="canonical" href={url} />
    </Head>
  );
};
