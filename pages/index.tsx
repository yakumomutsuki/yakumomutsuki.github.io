import * as React from 'react'
import Head from 'next/head'

class Home extends React.Component {
  qualifications = [
    'Java SE 8 Programmer I (2019-01)',
    'LPIC Level 1 (2019-09)',
    'HTML5 Professional Exam Level1 (2020-01)',
    'HTML5 Professional Exam Level2 (2020-02)',
    'OSS-DB Exam Silver (2020-09)',
  ]

  componentDidMount(): void {
    const search = location.search.substring(1)
    if (search) {
      const query = JSON.parse('{"' + decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) + '"}') as {
        originalPath: string
      }
      if (query?.originalPath) {
        console.log(query.originalPath)
        history.replaceState(null, '', query.originalPath)
      }
    }
  }

  render() {
    return (
      <>
        <Head>
          <title>yakumomutsuki.github.io</title>
          <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
        </Head>

        <div className="container">
          <div className="lead">
            <div className="columns">
              {/* side-bar */}
              <div className="column is-two-fifths">
                <div className="is-flex center">
                  <figure className="image is-128x128">
                    <img className="is-rounded" src="/profile.jpeg" alt="profile-image" />
                  </figure>
                </div>

                <div className="has-text-centered">
                  <p>yakumomutsuki</p>
                  <br />
                  <p>
                    藤沢市在住のフロントエンド/サーバーサイドのエンジニアです。
                    <br />
                    勤務先は汐留のWeb系企業です。
                  </p>

                  <p>
                    Working in IT / Web at Minato, Japan.
                    <br />
                    Developer of frontend, backend.
                    <br />
                    Living in Fijisawa, Japan.
                    <br />
                  </p>
                </div>

                <p className="menu-label">SNS</p>
                <ul className="menu-list is-unstyled">
                  <li>
                    <a className="fab fa-twitter touchable" href="https://twitter.com/yakumomutsuki">
                      &nbsp;Twitter
                    </a>
                  </li>
                  <li>
                    <a className="fab fa-github touchable" href="https://github.com/yakumomutsuki">
                      &nbsp;GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <section>
                  <h2 className="heading">Skills</h2>
                  <div className="content">
                    <ul>
                      <li>HTML5 / CSS</li>
                      <li>JavaScript / TypeScript</li>
                      <li>Vue.js / React.js</li>
                      <li>Java / Ruby / PHP</li>
                    </ul>
                  </div>
                  <h2 className="heading">Certified</h2>
                  <div className="content">
                    <ul>
                      {this.qualifications.map((qualification, index) => (
                        <li key={index}>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .is-flex.center {
            justify-content: center;
          }
          
          h2.heading {
            border-bottom: 1px solid black;
          }
          
          li > a.touchable {
            padding: 1rem .75rem;
          }
          
          .fa-twitter:hover::before, .fa-github:hover::before {
            animation:1s linear rotation;
            display: inline-block;
          }
          
          @keyframes rotation {
            0%{ 
              transform:rotate(0);
            }
            100%{
              transform:rotate(360deg);
            }
          }
        `}</style>
      </>
    )
  }
}

export default Home
