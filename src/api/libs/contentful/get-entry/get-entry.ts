import { createClient, Entry } from 'contentful';
import { config } from '../config';
import { transformContentfulError } from '../transform-contentful-error';
import { IBlogFields } from '../types';
import { DataResponse, HttpResponse } from '@/api/types';

export const getEntry = (entryId: string): Promise<HttpResponse<Entry<IBlogFields>>> => {
  return createClient(config)
    .getEntry<IBlogFields>(entryId)
    .then((entry) => {
      const response: DataResponse<Entry<IBlogFields>> = {
        data: entry,
        err: null,
        status: 200,
      };
      return Promise.resolve(response);
    })
    .catch((err) => {
      return transformContentfulError(err);
    });
};
