---
name: 'component'
root: 'src/components'
output: '**/*'
ignore: []
questions:
  name: 'Please enter a filename.'
---

# Variables

- constant_key: value
- computed_key: `{{ inputs.name | pascal }}`

# `{{ inputs.name | kebab }}/{{ inputs.name | kebab }}.tsx`

```typescript
import React from 'react';

export const {{ inputs.name | pascal }} = () => {
  return (<div className={'{{ inputs.name | pascal }}'}>{{ inputs.name }}</div>);
};
```

# `{{ inputs.name | kebab }}/{{ inputs.name | kebab }}.stories.tsx`

```tyoescript
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import React from 'react';
import { {{ inputs.name | pascal }} } from './{{ inputs.name | kebab }}';

type T = typeof {{ inputs.name | pascal }};
type Story = ComponentStoryObj<T>;

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  args: {},
} as ComponentMeta<T>;

export const Default: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Default.play = async ({ canvasElement }) => {

};
```

# `{{ inputs.name | kebab }}/{{ inputs.name | kebab }}.module.css`

```css
.{{ inputs.name | pascal }} {
  background-color: red;
}
```

# `{{ inputs.name | kebab }}/index.ts`

```typescript
import { {{ inputs.name | pascal }} } from './{{ inputs.name | kebab }}';

export { {{ inputs.name | pascal }} }
```