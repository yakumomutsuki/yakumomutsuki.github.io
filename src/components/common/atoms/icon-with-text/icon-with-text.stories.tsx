import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';
import { IconWithText } from './icon-with-text';
import { EditCalendar } from '@/components/common/atoms/icons';

type T = typeof IconWithText;
type Story = ComponentStoryObj<T>;

export default {
  component: IconWithText,
  args: {
    text: 'サンプルサンプルサンプル',
    icon: <EditCalendar alt={'サンプル'} />,
  },
} as ComponentMeta<T>;

export const Default: Story = {};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const block = await canvas.getByTestId<HTMLDivElement>('icon-with-text');

  // block は存在すること
  expect(block).toBeVisible();

  // img は存在すること
  const img = await canvas.getByAltText('サンプル');
  expect(img).toBeVisible();

  // text は設定した値が表示されていること
  const text = await canvas.getByTestId<HTMLParagraphElement>('icon-with-text__text');
  expect(text.innerText).toBe('サンプルサンプルサンプル');
};
