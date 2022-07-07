import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { CustomCode } from './custom-code';

type T = typeof CustomCode;
type Story = ComponentStoryObj<T>;

export default {
  component: CustomCode,
  args: {
    className: 'lang-js',
    children: 'Hello, world!!',
  },
} as ComponentMeta<T>;

export const Default: Story = {};

export const Inline: Story = {
  args: {
    type: 'inline',
    className: 'lang-rb',
    children: 'Hello, ruby!!',
  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const block = await canvas.getByTestId('custom-code-block');

  // lang-js は language-js に変換されていること
  expect(block.className).toBe('language-js');

  // pre code になっていること
  expect(block.firstChild).toContainHTML('code');
};

Inline.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const block = await canvas.getByTestId('custom-code-inline');

  // className は存在しないこと
  expect(block.className).toBe('');

  // span の中に children が設定されること
  expect(block.innerText).toBe('Hello, ruby!!');
};
