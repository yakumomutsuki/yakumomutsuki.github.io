import * as React from 'react'

import Head from 'next/head'
import { LegacyButton } from '@/components/asobisystem/modern-internet-roujinkai-1/legacy-button'
import { Want } from '@/components/asobisystem/modern-internet-roujinkai-1/want'

import styled from 'styled-components'

export default function ModernInternetRoujinkai1() {
  return (
    <>
      <Head>
        <title>💻スクール</title>
      </Head>
      <Wrapper>
        <section>
          <h1>パソコンスクール</h1>
          パコランド
          <a href="tel:00-1234-5678">TEL: 00-1234-5678</a>
          <div>
            <ul>入会金 5000円(税別)</ul>
            <ul>月謝 4回/月 10000円(税別) ～</ul>
            <ul>１対１のプライベートレッスン</ul>
          </div>
        </section>
        <Contents>
          <ul>
            <li className="mb-3">
              <LegacyButton color="BleuGrise">トップページ</LegacyButton>
            </li>
            <li className="mb-3">
              <LegacyButton color="Beniaka">教室ポリシー</LegacyButton>
            </li>
            <li className="mb-3">
              <LegacyButton color="Daidaiiro">特徴</LegacyButton>
            </li>
            <li className="mb-3">
              <LegacyButton color="Lightseagreen">時間割</LegacyButton>
            </li>
            <li className="mb-6">
              <LegacyButton color="Ruriiro">コース内容</LegacyButton>
            </li>
            <li className="mb-3">
              <LegacyButton color="Lightsteelblue">所在地</LegacyButton>
            </li>
            <li className="mb-6">
              <LegacyButton color="Ecume">Links</LegacyButton>
            </li>
            <li className="mb-3">
              <LegacyButton color="BiancoSantorini">お問合せ</LegacyButton>
            </li>
            <li>
              <LegacyButton color="Lightblue">連絡用フォーム</LegacyButton>
            </li>
          </ul>

          <ContentMain>
            <ContentHeader>
              <h2>こんな事ってありませんか？</h2>
              <p>１対１の個人レッスンでパコランドが解決いたします！</p>
            </ContentHeader>
            <ContentBody>
              <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between mb-3">
                <Want>
                  PCを買ったので正規
                  <br />
                  の使い方を覚えたい
                </Want>
                <Want>
                  いつかやろうと思うけど
                  <br />
                  先延ばしになってしまう
                </Want>
              </div>
              <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between mb-3">
                <Want>
                  エクセル・ワードを作成する
                  <br />
                  のに時間ばかり掛かる
                </Want>
                <Want>
                  スクールの授業が解らない
                  <br />
                  うちに終わってしまった
                </Want>
              </div>
              <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between">
                <Want>
                  思い通りにデータ
                  <br />
                  が作成できない
                </Want>
                <Want>
                  以前作ったものを
                  <br />
                  探し出すことができない
                </Want>
              </div>
            </ContentBody>
          </ContentMain>
        </Contents>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  background-color: #fbffe9;
`

const Contents = styled.div`
  display: flex;
`

const ContentMain = styled.div`
  padding: 0 10%;
  width: 100%;
`

const ContentHeader = styled.div`
  text-align: center;

  & > h2 {
    font-size: 2.5rem;
    color: #666600;
  }

  & > p {
    font-size: 2rem;
    color: #cc0066;
  }

  background-color: #ead5bf;
`

const ContentBody = styled.div`
  padding: 0 10%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url('/asobisystem/d79dcf0ee3fe179e989d832015a55958_400.jpg');
`
