import * as React from 'react'

// color-theme
// https://flatuicolors.com/palette/se

export const Header = () => {
  return <>
    <header className="header">
      <h1 className="is-size-4-mobile is-size-1-tablet">
        yakumomutsuki.github.io
      </h1>
    </header>

    <style jsx>{`
    .header {
      background-color: #0fbcf9;
      height: 80px;
      text-align: center;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      width: 100%;
    }
    .h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }
  `}</style>
  </>
}
