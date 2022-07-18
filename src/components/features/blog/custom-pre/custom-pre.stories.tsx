import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';
import { CustomPre } from './custom-pre';

type T = typeof CustomPre;
type Story = ComponentStoryObj<T>;

export default {
  component: CustomPre,
  args: {
    children: React.createElement<{ className: string }>('p', { className: 'lang-js' }),
  },
} as ComponentMeta<T>;

export const Default: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const block = await canvas.getByTestId('custom-pre');

  // lang-js は language-js に変換されていること
  expect(block.className).not.toBe('lang-js');
  expect(block.className).toBe('language-js');

  // タグは pre であること
  expect(block.tagName).toBe('PRE');
};
