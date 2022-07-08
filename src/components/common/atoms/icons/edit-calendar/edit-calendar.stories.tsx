import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { EditCalendar } from './edit-calendar';

type T = typeof EditCalendar;
type Story = ComponentStoryObj<T>;

export default {
  component: EditCalendar,
  args: {
    alt: '作成日',
  },
} as ComponentMeta<T>;

export const Default: Story = {};

export const TwiceScale: Story = {
  args: {
    scale: 2,
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = await canvas.getByTestId<HTMLImageElement>('edit-calendar');

  // alt は設定した値となること
  expect(img.alt).toBe('作成日');
};

TwiceScale.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = await canvas.getByTestId<HTMLImageElement>('edit-calendar');

  // scale 設定により width、height はそれぞれ 24*2 の値を取ること
  expect(img.width).toBe(48);
  expect(img.height).toBe(48);
};
