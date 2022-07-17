import React from 'react';
import styles from './card.module.css';

interface Props {
  imgSrc: string;
  text: string;
}

export const Card: React.FC<Props> = ({ imgSrc, text }) => {
  const [existImg, toggleExistImg] = React.useState(true);

  // 画像がない場合には、背景黒の要素に差し替えます
  const onError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    if (e.target instanceof HTMLImageElement) {
      toggleExistImg(false);
    }
  };

  return (
    <div className="card" data-testid="card">
      <div className="card-image">
        {existImg ? (
          <img className={styles.Card__Img} src={imgSrc} alt="" onError={onError} data-testid="card-img" />
        ) : (
          <div className={`${styles.Card__Img} ${styles.Card__Img__NonExist}`} data-testid="card-no-img" />
        )}
      </div>
      <div className={`card-content ${styles.Card__Text}`} data-testid="card-text">
        {text}
      </div>
    </div>
  );
};
