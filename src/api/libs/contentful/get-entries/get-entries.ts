import { createClient, EntryCollection } from 'contentful';
import { config } from '../config';
import { transformContentfulError } from '../transform-contentful-error';
import { IBlogFields } from '../types';
import { DataResponse, HttpResponse } from '@/api/types';

export const getEntries = (): Promise<HttpResponse<EntryCollection<IBlogFields>>> => {
  console.log({env: process.env});

  return createClient(config)
    .getEntries<IBlogFields>()
    .then((entries) => {
      const response: DataResponse<EntryCollection<IBlogFields>> = {
        data: entries,
        err: null,
        status: 200,
      };
      return Promise.resolve(response);
    })
    .catch((err) => {
      return transformContentfulError(err);
    });
};
