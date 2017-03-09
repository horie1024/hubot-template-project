// Description:
//   A Sample code for study.
//
// Dependencies:
//   none
//
// Commands:
//   hello - Hubot replies "world!".
//   meigen - Hubot replies meigen.
//
// Author:
//   you

module.exports = (robot) => {

  robot.hear(/^hello$/, (msg) => {
    msg.reply('world');  
  });

  const meigen = [
    '健康のためなら死んでもいい', 
    '生卵をかければティッシュでも食べられる',
    'CPY(cal per yen)',
    '納豆は大豆のゾンビ',
    '僕、固ゆでは許せないですね 卵が死んでるじゃないか',
    'ジャパニーズ・トラディショナル・ウェポン',
    '健康に上限はない',
    'ハワイは四捨五入して日本',
    'とんがりコーンは空洞だから実質カロリーゼロ',
    '自分に甘く地球に厳しい男だね',
    'マガジンはみんなの心とGitの中に残っている',
    'ビジネスとしてグッドデザイン賞ですね',
    '金曜日の天一なんて懲役3年ものだよ'    
  ];

  robot.hear(/^meigen$/, (msg) => {
    msg.reply(msg.random(meigen));
  });
}
