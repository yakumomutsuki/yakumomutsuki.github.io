/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

export interface Props {
  className?: string;
  type?: 'block' | 'inline';
  children: React.ReactNode;
}

export const CustomCode: React.FC<Props> = (props): React.ReactElement => {
  const { children, type, className } = props;
  // handle inline block
  if (type == 'inline') {
    return <span data-testid="custom-code-inline">{children}</span>;
  }

  // Handle block code, with highlight for example
  return (
    <code data-testid="custom-code-block" className={className ? className.replace('lang', 'language') : ''}>
      {children}
    </code>
  );
};

CustomCode.defaultProps = {
  type: 'block',
};
