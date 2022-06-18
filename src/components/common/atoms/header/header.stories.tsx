import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';
import { Header } from './header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;
export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heading = await canvas.getByTestId('header-heading-level-1');

  // タイトルが描画されること
  expect(heading.innerText).toBe(`yakumomutsuki.github.io`);
};
