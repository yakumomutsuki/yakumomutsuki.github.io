import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within, waitForElementToBeRemoved } from '@storybook/testing-library';
import React from 'react';
import { Card as $Card } from './card';

type T = typeof $Card;
type Story = ComponentStoryObj<T>;

const img0 = 'https://source.unsplash.com/3TLQwqJrJeo';
const img1 = 'https://source.unsplash.com/bIhpiQA009k';
const img2 = 'https://source.unsplash.com/ZX4eQYhwOxQ';
const img3 = 'https://source.unsplash.com/qMACy7-3GwE';
const img4 = 'https://source.unsplash.com/VW42y0Iin6s';
const img5 = 'https://source.unsplash.com/CLxXIWSbaxQ';
const img6 = 'https://source.unsplash.com/103CUGLoj_g';

const cardData: Array<React.ComponentProps<typeof Card>> = [
  { imgSrc: img1, text: 'タイトル1' },
  { imgSrc: img2, text: 'タイトル2' },
  { imgSrc: img3, text: 'タイトル3' },
  { imgSrc: img4, text: 'タイトル4' },
  { imgSrc: img5, text: 'タイトル5' },
  { imgSrc: img6, text: 'タイトル6' },
];

const Card: React.FC<React.ComponentProps<typeof $Card>> = ({ imgSrc, text }) => {
  return (
    <div className="container">
      <p style={{ marginBottom: '2rem' }}>
        カードコンポーネントは呼び出し側のコンポーネントにてスタイリングを行ってください
      </p>
      <div className="columns is-multiline">
        <div className="block column is-4-desktop is-6-tablet">
          <$Card imgSrc={imgSrc} text={text} />
        </div>
        {cardData.map((it, idx) => (
          <div key={`card_${idx}`} className="block column is-4-desktop is-6-tablet">
            <$Card imgSrc={it.imgSrc} text={it.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default {
  component: Card,
  args: {
    imgSrc: img0,
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
} as ComponentMeta<T>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const block = await canvas.getAllByTestId<HTMLDivElement>('card')[0];

    // Cardコンポーネントが表示されていること
    expect(block).toBeVisible();

    // img要素が表示されていること
    const img = await within(block).getByTestId<HTMLImageElement>('card-img');
    expect(img).toBeVisible();

    // テキスト画像はpropsの値と同じであること
    const text = await within(block).getByTestId<HTMLParagraphElement>('card-text');
    expect(text.innerText).toBe('テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト');
  },
};

export const NoImage: Story = {
  args: {
    imgSrc: '',
    text: 'No image',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const block = await canvas.getAllByTestId<HTMLDivElement>('card')[0];

    // img.src を変更したら、画像は存在せず、画像なしの背景要素が表示されること
    const img = await within(block).getByTestId<HTMLImageElement>('card-img');
    img.src = '';
    await waitForElementToBeRemoved(img);
    expect(img).not.toBeVisible();

    const noImage = await within(block).getByTestId<HTMLDivElement>('card-no-img');
    expect(noImage).toBeVisible();
  },
};
