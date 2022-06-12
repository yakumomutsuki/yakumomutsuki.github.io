var en = require('./translations.en.json');
var ja = require('./translations.ja.json');

const i18n = {
  translations: {
    ja: ja.i18n,
    en: en.i18n,
  },
  defaultLang: 'ja',
  useBrowserDefault: true,
};

module.exports = i18n;
