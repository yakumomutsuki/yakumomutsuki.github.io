import React from 'react';
import styles from "./header.module.css";

export const Header = () => {
  return   <header className={`hero is-dark ${styles.Header}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered is-size-4-mobile" data-testid={'header-heading-level-1'}>yakumomutsuki.github.io</h1>
      </div>
    </div>
  </header>;
};