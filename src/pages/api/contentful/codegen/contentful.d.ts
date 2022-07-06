// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';

export interface IBlogFields {
  /** Title */
  title: string;

  /** HeaderImage */
  headerImage?: Asset | undefined;

  /** Body */
  body: string;

  /** CreatedAt */
  createdAt: string;

  /** EditedAt */
  editedAt: string;
}

export interface IBlog extends Entry<IBlogFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'blog';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type ContentType = 'blog';

export type LocaleCode = 'ja-JP';

export type ContentfulDefaultLocaleCode = 'ja-JP';