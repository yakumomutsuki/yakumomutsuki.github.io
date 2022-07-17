import React from 'react';
import styles from './icon-with-text.module.css';

interface Props {
  icon: React.ReactNode;
  text: string;
}

export const IconWithText: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className={styles.IconWithText} data-testid="icon-with-text">
      {icon}
      <p className={styles.IconWithText__text} data-testid="icon-with-text__text">
        {text}
      </p>
    </div>
  );
};
