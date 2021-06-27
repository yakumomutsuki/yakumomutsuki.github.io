import styled from 'styled-components'

type color =
  | 'BleuGrise'
  | 'Beniaka'
  | 'Daidaiiro'
  | 'Lightseagreen'
  | 'Ruriiro'
  | 'Lightsteelblue'
  | 'Ecume'
  | 'BiancoSantorini'
  | 'Lightblue'
type direction = 'left' | 'top' | 'right' | 'bottom'

const COLORS: Record<color, number[]> = {
  BleuGrise: [240, 100, 90], // ブルー・グリーゼ
  Beniaka: [346, 75, 41], // 紅赤
  Daidaiiro: [26, 79, 53], // 橙色
  Lightseagreen: [177, 70, 40], // ライトシーグリーン
  Ruriiro: [208, 100, 30], // 瑠璃色
  Lightsteelblue: [214, 41, 78], // ライト・スティール・ブルー
  Ecume: [54, 82, 70], // エキューム
  BiancoSantorini: [40, 35, 87], // ビアンコ・サントリーニ
  Lightblue: [180, 100, 97], // ライトブルー
}

const toHSL = (color: keyof typeof COLORS, direction?: direction): string => {
  let [h, s, l] = COLORS[color] ? COLORS[color] : [0, 0, 0]
  switch (direction) {
    case 'left': {
      s = s + 20 <= 100 ? s + 20 : 100
      l = l + 20 <= 100 ? l + 20 : 100
      return `hsl(${h}, ${s}%, ${l}%)`
    }
    case 'top': {
      s = s + 10 <= 100 ? s + 10 : 100
      l = l + 10 <= 100 ? l + 10 : 100
      return `hsl(${h}, ${s}%, ${l}%)`
    }
    case 'right': {
      s = s - 20 >= 0 ? s - 20 : 0
      l = l - 20 >= 0 ? l - 20 : 0
      return `hsl(${h}, ${s}%, ${l}%)`
    }
    case 'bottom': {
      s = s - 10 >= 0 ? s - 10 : 0
      l = l - 10 >= 0 ? l - 10 : 0
      return `hsl(${h}, ${s}%, ${l}%)`
    }
    default: {
      return `hsl(${h}, ${s}%, ${l}%)`
    }
  }
}

interface Props {
  color: color
}

export const LegacyButton = styled.button<Props>`
  border-style: none;
  border-style: solid;
  border-width: 4px 6px;
  font-size: 1.5rem;
  line-height: 2rem;
  width: 220px;

  // hsl(任意,100%,50%) が純色
  border-left-color: ${({ color }) => toHSL(color, 'left')};
  border-top-color: ${({ color }) => toHSL(color, 'top')};
  border-right-color: ${({ color }) => toHSL(color, 'right')};
  border-bottom-color: ${({ color }) => toHSL(color, 'bottom')};
  background-color: ${({ color }) => toHSL(color)};

  // innerTextを修飾するstyle
  color: ${({ color }) => (color === 'Ecume' ? '#b8883b' : color === 'Lightblue' ? '#89acd7' : '#ffffff')};
  font-family: 'ヒラギノ丸ゴ Pro W4', 'ヒラギノ丸ゴ Pro', 'Hiragino Maru Gothic Pro', 'ヒラギノ角ゴ Pro W3',
    'Hiragino Kaku Gothic Pro', 'HG丸ｺﾞｼｯｸM-PRO', 'HGMaruGothicMPRO';
  text-shadow: 1px 1px 2px black;
`
