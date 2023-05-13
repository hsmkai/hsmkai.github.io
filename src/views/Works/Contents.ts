interface iTitle {
  [name: string]: {
    title: string,
    subTitle: string,
    desc: string[],
    cardLabel: string,
  }
}

interface iContent {
  [name: string]: {
    title: string,
    imgsrc: string,
    to: string,
    text: string[]
  }[]
}

export const titles: iTitle = {
  'world': {
    title: 'world',
    subTitle: '個性豊かな新世界。',
    desc: ['斜向がお届けする配布ワールドの数々をご紹介。'],
    cardLabel: '配布ワールド'
  },
  'other': {
    title: 'others',
    subTitle: '世界を彩るコンテンツ。',
    desc: ['Minecraftの世界を彩る様々なコンテンツや斜向の創作物をご紹介。'],
    cardLabel: 'リソースパック'
  },
  'agreement': {
    title: 'Agreements',
    subTitle: '各種規約',
    desc: [],
    cardLabel: '規約'
  },
}

export const contents: iContent = {
  'world': [
    {
      title: 'マイクラ博物館の謎',
      imgsrc: 'museum.png',
      to: 'museum',
      text: [
        'マインクラフト × 謎解き！',
        'マインクラフトの全てが展示されている博物館。',
        'そこに迷い込んだあなたは一人の少女と出会う。',
        '「お願い、博物館の時間を動かしたいの！」',
        'どうやら博物館の時間が止まってしまったらしい。',
        'なぜ時間が止まってしまったのか？',
        'そもそもマイクラ博物館とは何なのか？',
        'ラナと呼ばれる少女と共に、博物館の謎を解き明かせ！',
      ]
    },
    {
      title: 'prologram++',
      imgsrc: 'prologram.png',
      to: 'prologram',
      text: [
        'プログラムを構築してパズルを解け！',
        'ここはドローンが飛び回る未来世界。',
        '君はドローン操縦士になるため、この試験飛行場へやってきた。',
        'さぁ、君の手でプログラムを構築し、難解なステージに挑め！',
      ]
    },
    {
      title: 'Code:Survival',
      imgsrc: 'CodeSurvival.jpg',
      to: 'code.survival',
      text: [
        '荒廃した世界で一人称RTS！',
        '舞台は、文明が一度滅んだ世界。',
        'ロボットである自分たちは、生きるために必要な鉱石を採掘して暮らしている。',
        'ガンタレットとバリケードを駆使して採掘の邪魔をしてくるロボットから採掘機を守り切れ！',
      ]
    },
  ],
  'other': [
    {
      title: 'Cutie-Trick‼',
      imgsrc: 'cutie_trick.png',
      to: 'cutie_trick',
      text: [
        'マインクラフトのハロウィンを更に楽しく！',
        'かわいい魔女が!?',
        'かわいいピグリンが!?',
        'リソースパックでハロウィンを楽しもう！',
      ]
    },
  ],
  'agreement': [
    {
      title: '利用規約',
      imgsrc: 'default.png',
      to: 'terms-of-use',
      text: []
    },
    {
      title: 'ガイドライン',
      imgsrc: 'default.png',
      to: 'guide',
      text: []
    },
  ]
}