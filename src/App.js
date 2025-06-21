import React, { useState } from 'react';
import './App.css';

function App() {
  const hands = [ 'グー', 'チョキ', 'パー'];
  const [playerHand, setPlayerHand] = useState('');
  const [cpuHand, setCpuHand] = useState('');
  const [result, setResult] = useState('');

  //スコアの状態管理
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [drawCount, setDrawCount] = useState(0);

  //勝利判定
  const judge = (player, cpu) => {
    if (player === cpu) {
      setDrawCount(drawCount + 1);  //あいこカウントアップ
      return 'あいこ!';
    } else if (
      (player === 'グー' && cpu === 'チョキ')||
      (player === 'チョキ' && cpu === 'パー')||
      (player === 'パー' && cpu === 'グー')
    ) {
      setWinCount(winCount + 1);  //勝ちカウントアップ
      return 'あなたの勝ち!';
    } else {
      setLoseCount(loseCount + 1);  //負けカウントアップ
      return 'あなたの負け';
    }
  };

  //リセット処理
  const resetScore = () => {
    setWinCount(0);
    setLoseCount(0);
    setDrawCount(0);
  }

  //ボタンクリック時の処理
  const handClick = (hand) => {
    const cpu = hands[Math.floor(Math.random() * 3)];
    setPlayerHand(hand);
    setCpuHand(cpu);
    setResult(judge(hand, cpu));
  };

  return (
    <div className='App'>
      <h1>じゃんけんゲーム</h1>
      <div className="button-area">
        {hands.map((hand) => (
          <button key = {hand} onClick={() => handClick(hand)}>
            {hand}
          </button>
        ))}                
      </div>
      <div className="reset-area">
        <button onClick={resetScore}>リセットボタン</button>
      </div>
      <h2>あなたの手: {playerHand}</h2>
      <h2>相手の手: {cpuHand}</h2>
      <h2>結果: {result}</h2>

      <h3>【スコア】</h3>
      <h3>勝ち: {winCount}回</h3>
      <h3>負け: {loseCount}回</h3>
      <h3>あいこ: {drawCount}回</h3>
    </div>
  );
}
  
export default App;
