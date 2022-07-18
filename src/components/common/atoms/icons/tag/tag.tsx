import React from 'react';
import img from '@/components/common/atoms/icons/tag/tag.svg';

interface Props extends React.ComponentProps<'img'> {
  width?: number;
  height?: number;
  scale?: number;
}

export const Tag: React.FC<Props> = ({ scale = 1, ...props }: Props) => {
  const width = props.width && props.width * scale;
  const height = props.height && props.height * scale;

  // storybook で読み込むと static path に変換されるので
  const src = typeof img === 'string' ? img : img.src;
  return <img alt={''} {...props} width={width} height={height} src={src} data-testid="tag" />;
};

Tag.defaultProps = {
  alt: '',
  scale: 1,
  width: 24,
  height: 24,
};
