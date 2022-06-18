import type { NextPage } from 'next';
// import { useTranslation, LanguageSwitcher } from 'next-export-i18n';
import Head from 'next/head';
import styles from './index.module.css';
// import styles from '../styles/Home.module.css';
// import { Counter } from '@/components/common/atoms/counter';

import { Header } from '@/components/common/atoms/header';

const qualifications: string[] = [
  'Java SE 8 Programmer I (2019-01)',
  'LPIC Level 1 (2019-09)',
  'HTML5 Professional Exam Level1 (2020-01)',
  'HTML5 Professional Exam Level2 (2020-02)',
  'OSS-DB Exam Silver (2020-09)',
  'ITIL Foundation 2011 (2020-12)',
  'LPIC Level 2 (2021-09)',
  'AWS Certified Cloud Practitioner (2021-12)',
  'AWS Certified Solutions Architect – Associate (2022-01)',
];

const Home: NextPage = () => {
  // const { t } = useTranslation();
  // //const [query] = useLanguageQuery();

  return (
    <>
      <Head>
        <title>yakumomutsuki.github.io</title>
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      </Head>

      <Header />

      <main className="container">
        <div className="lead">
          <div className="columns">
            {/* side-bar */}
            <div className="column is-two-fifths">
              <div className="is-flex center is-justify-content-center">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="/profile.jpeg"
                    alt="profile icon"
                    width={400}
                    height={400}
                    decoding="async"
                  />
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
                  <a
                    className={`fab fa-twitter ${styles.touchable} ${styles.icon}`}
                    href="https://twitter.com/yakumomutsuki"
                  >
                    &nbsp;Twitter
                  </a>
                </li>
                <li>
                  <a
                    className={`fab fa-github ${styles.touchable} ${styles.icon}`}
                    href="https://github.com/yakumomutsuki"
                  >
                    &nbsp;GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <section>
                <h2 className={styles.heading}>Skills</h2>
                <div className="content">
                  <ul>
                    <li>HTML5 / CSS</li>
                    <li>JavaScript / TypeScript</li>
                    <li>Vue.js / React.js</li>
                    <li>Java / Ruby / PHP</li>
                  </ul>
                </div>
                <h2 className={styles.heading}>Certified</h2>
                <div className="content">
                  <ul>
                    {qualifications.map((qualification, index) => (
                      <li key={index}>{qualification}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
