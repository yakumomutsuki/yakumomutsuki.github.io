import React from 'react'
import NextApp from 'next/app'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// include css
import 'bulma/css/bulma.min.css'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Header />

        <Component {...pageProps} />

        <Footer />

        <style jsx global>{`
          /* タブレット・モバイル用 */
          @media screen and (max-width: 1023px) {
            .lead,
            .side {
              padding: 1.5rem;
            }
          }

          /* PCデバイス用  */
          @media screen and (min-width: 1024px) {
            .lead,
            .side {
              padding: 3rem;
            }
          }
        `}</style>
      </>
    )
  }
}
