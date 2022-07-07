import React from 'react';
import img from './edit-calendar.svg';

interface Props extends React.ComponentPropsWithoutRef<'img'> {
  width: number;
  height: number;
  scale: number;
}

export const EditCalendar: React.FC<Props> = ({ scale, ...props }: Props) => {
  const width = props.width * scale;
  const height = props.height * scale;

  return <img alt={''} {...props} width={width} height={height} src={img} data-testid="edit-calendar" />;
};

EditCalendar.defaultProps = {
  alt: '',
  scale: 1,
  width: 24,
  height: 24,
};
