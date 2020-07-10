import * as React from 'react'

// color-theme
// https://flatuicolors.com/palette/se

export const Header = () => {
  return <>
    <header className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            yakumomutsuki.github.io
          </h1>
        </div>
      </div>
    </header>

    <style jsx>{`
      .hero {
        margin-bottom: 1rem;
      }
    `}
    </style>
  </>
}
