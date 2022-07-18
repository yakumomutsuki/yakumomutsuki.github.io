import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { PostTime } from './post-time';

type T = typeof PostTime;
type Story = ComponentStoryObj<T>;

export default {
  component: PostTime,
  args: {
    type: 'created',
    dateTimeText: '2022-07-04T00:00+09:00',
  },
} as ComponentMeta<T>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const text = await canvas.findByText<HTMLParagraphElement>('2022-07-04');
    // 2022-07-04 に文字列変換されていること
    expect(text.innerText).toBe('2022-07-04');

    const img = await canvas.findByAltText<HTMLImageElement>('作成日');
    // type: created の場合、img の alt は作成日となること
    expect(img.alt).toBe('作成日');
  },
};

export const Edit: Story = {
  args: {
    type: 'edited',
    dateTimeText: '2022-07-04T00:00+09:00',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const img = await canvas.findByAltText<HTMLImageElement>('更新日');
    // type: edited の場合、img の alt は作成日となること
    expect(img.alt).toBe('更新日');
  },
};
