import { createClient, EntryCollection } from 'contentful';
import { config } from '../config';
import { transformContentfulError } from '../transform-contentful-error';
import { IBlog } from '../types';
import { DataResponse, HttpResponse } from '@/api/types';

export const getEntries = (): Promise<HttpResponse<EntryCollection<IBlog>>> => {
  return createClient(config)
    .getEntries<IBlog>()
    .then((entries) => {
      const response: DataResponse<EntryCollection<IBlog>> = {
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
