import React from 'react';
import { IconWithText } from '@/components/common/atoms/icon-with-text';
import { EditCalendar } from '@/components/common/atoms/icons';

interface Props {
  type: 'created' | 'edited';
  dateTimeText: string;
}

const formatDate = (dt: Date) => {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth() + 1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  return y + '-' + m + '-' + d;
};

export const PostTime: React.FC<Props> = ({ type, dateTimeText }) => {
  const calenderProps = {
    alt: type === 'created' ? '作成日' : type === 'edited' ? '更新日' : '',
  };

  return <IconWithText icon={<EditCalendar {...calenderProps} />} text={formatDate(new Date(dateTimeText))} />;
};
