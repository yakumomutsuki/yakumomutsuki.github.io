import '../src/styles/globals.css';
import '../src/styles/Home.module.css';
import 'bulma/css/bulma.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
