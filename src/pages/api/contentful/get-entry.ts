import {createClient, Entry} from 'contentful';
import {IBlogFields} from './codegen/contentful';
import { config, transformContentfulError } from './index';
import { DataResponse, HttpResponse } from '@/pages/api/types';

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
