import { createClient, Entry } from 'contentful';
import { config, transformContentfulError } from './index';
import {DataResponse, HttpResponse} from '@/pages/api/types';

export const getEntry = (entryId: string): Promise<HttpResponse<Entry<unknown>>> => {
  return createClient(config)
    .getEntry(entryId)
    .then((entry) => {
      const response: DataResponse<Entry<unknown>> = {
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
