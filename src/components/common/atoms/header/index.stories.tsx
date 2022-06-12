// import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { within, userEvent } from '@storybook/testing-library';
import React from 'react';
import { Header } from './index';

export default {
    title: 'Header',
    component: Header,

} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;
export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Default.play = async ({ /** canvasElement **/ }) => {
    // const canvas = within(canvasElement);
    // const incrementButton = await canvas.getByText<HTMLButtonElement>('Increment');
    // const resetButton = await canvas.getByText<HTMLButtonElement>('Reset');
    // const countParagraph = await canvas.getByTestId('counter-count');
    //
    // // 3回実行して3回カウントされること
    // await userEvent.click(incrementButton);
    // await userEvent.click(incrementButton);
    // await userEvent.click(incrementButton);
    // expect(countParagraph.innerText).toBe(`count: 3`);
    //
    // // リセットボタンを押してカウントがリセットされること
    // await userEvent.click(resetButton);
    // expect(countParagraph.innerText).toBe(`count: 0`);
};
