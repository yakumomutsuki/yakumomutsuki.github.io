import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

class Home extends React.Component {
  componentDidMount (): void {
    const search = location.search.substring(1)
    if (search) {
      const query = JSON.parse('{"' + decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) + '"}') as { originalPath: string }
      if (query?.originalPath) {
        console.log(query.originalPath)
        history.replaceState(null, null, query.originalPath)
      }
    }
  }

  render (): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
        </Head>

        <div className="content">
          <div className="columns">
            {/* side-bar */}
            <div className="column is-two-fifths">
              <div className="is-flex center">
                <figure className="image is-128x128">
                  <img className="is-rounded" src="/profile.jpeg" />
                </figure>
              </div>

              <div className="has-text-centered">
                <p>yakumomutsuki</p>
                <br />
                <p>杉並区在住のフロントエンド/サーバーサイドのエンジニアです。<br />勤務先は汐留のWeb系企業です。</p>

                <p>Working in IT / Web at Minato, Japan.<br />Developer of front-end, server-side.<br />Living in Suginami, Japan.<br /></p>
              </div>

              <p className="menu-label">
                SNS
              </p>
              <ul className="menu-list is-unstyled">
                <li>
                  <a className="fab fa-twitter" href="https://twitter.com/yakumomutsuki">&nbsp;Twitter</a>
                </li>
                <li>
                  <a className="fab fa-github" href="https://github.com/yakumomutsuki">&nbsp;GitHub</a>
                </li>
              </ul>
            </div>
            <div className="column">
            </div>
          </div>
        </div>

        <style jsx>{`
          .center {
            justify-content: center;
          }
          ul.is-unstyled {
            list-style: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Home
