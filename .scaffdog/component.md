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

# `{{ inputs.name | camel }}/{{ inputs.name | camel }}.tsx`

```typescript
import React from 'react';

export const {{ inputs.name | pascal }} = () => {
  return (<div className={'{{ inputs.name | pascal }}'}>{{ inputs.name }}</div>);
};
```

# `{{ inputs.name | camel }}/{{ inputs.name | camel }}.stories.tsx`

```tyoescript
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import React from 'react';
import { {{ inputs.name | pascal }} } from './{{ inputs.name | camel }}';

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

const Template: ComponentStory<typeof {{ inputs.name | pascal }}> = () => <{{ inputs.name | pascal }} />;
export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Default.play = async ({ canvasElement }) => {

};
```

# `{{ inputs.name | camel }}/{{ inputs.name | camel }}.module.css`

```css
.{{ inputs.name | pascal }} {
  background-color: red;
}
```

# `{{ inputs.name | camel }}/index.ts`

```typescript
import { {{ inputs.name | pascal }} } from './{{ inputs.name | camel }}';

export { {{ inputs.name | pascal }} }
```