import { createClient, EntryCollection } from 'contentful';
import { IBlog } from './codegen/contentful';
import { config, transformContentfulError } from './index';
import { DataResponse, HttpResponse } from '@/pages/api/types';

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
