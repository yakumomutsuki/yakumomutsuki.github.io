import { CreateClientParams } from 'contentful';
export const config: CreateClientParams = {
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || '',
};
