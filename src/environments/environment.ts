import { Environment } from '@abp/ng.core';

const baseUrl = 'https://jehanie-jehan.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://jehanie-001-site1.htempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://jehanie-001-site1.htempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
