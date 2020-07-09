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
        </Head>

        <div className="content">
          <div className="columns">
            {/* side-bar */}
            <div className="column is-two-fifths">
              <aside className="menu">
                <div className="is-flex center">
                  <figure className="image is-128x128">
                    <img className="is-rounded" src="/profile.jpeg" />
                  </figure>
                </div>
                {/*<ul className="menu-list">*/}
                {/*  <li><a>Dashboard</a></li>*/}
                {/*  <li><a>Customers</a></li>*/}
                {/*</ul>*/}
                {/*<p className="menu-label">*/}
                {/*  Administration*/}
                {/*</p>*/}
                {/*<ul className="menu-list">*/}
                {/*  <li><a>Team Settings</a></li>*/}
                {/*  <li>*/}
                {/*    <a className="is-active">Manage Your Team</a>*/}
                {/*    <ul>*/}
                {/*      <li><a>Members</a></li>*/}
                {/*      <li><a>Plugins</a></li>*/}
                {/*      <li><a>Add a member</a></li>*/}
                {/*    </ul>*/}
                {/*  </li>*/}
                {/*  <li><a>Invitations</a></li>*/}
                {/*  <li><a>Cloud Storage Environment Settings</a></li>*/}
                {/*  <li><a>Authentication</a></li>*/}
                {/*</ul>*/}
                {/*<p className="menu-label">*/}
                {/*  Transactions*/}
                {/*</p>*/}
                {/*<ul className="menu-list">*/}
                {/*  <li><a>Payments</a></li>*/}
                {/*  <li><a>Transfers</a></li>*/}
                {/*  <li><a>Balance</a></li>*/}
                {/*</ul>*/}
              </aside>
            </div>
            <div className="column">Auto
            </div>
          </div>
        </div>

        <style jsx>{`
          .center {
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}

export default Home
