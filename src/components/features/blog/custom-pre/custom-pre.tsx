/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { CustomCodeProps } from '@/components/features/blog/custom-code';

interface Props {
  children: React.ReactElement<CustomCodeProps>;
}

export const CustomPre: React.FC<Props> = ({ children }): React.ReactElement => {
  const { props: cProps } = children;
  return (
    <pre
      className={cProps && cProps.className ? cProps?.className.replace('lang', 'language') : ''}
      tabIndex={0}
      data-testid="custom-pre"
    >
      {children}
    </pre>
  );
};
