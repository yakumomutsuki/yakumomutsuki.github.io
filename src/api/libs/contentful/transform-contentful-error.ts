import { ErrResponse } from '@/api/types';

export const transformContentfulError = (err: unknown): Promise<ErrResponse> => {
  if (err instanceof Error) {
    try {
      const parsedBody = JSON.parse(err.message);
      const { status = -1, message } = parsedBody;

      const error: ErrResponse = {
        data: null,
        err: { message, status },
        status: status,
      };
      return Promise.resolve(error);
    } catch (e) {
      const message = e instanceof Error ? e?.message : 'Unknown Error';
      const error: ErrResponse = {
        data: null,
        err: { message: message || 'Unknown Error', status: -1 },
        status: -1,
      };
      return Promise.resolve(error);
    }
  }

  throw err;
};
