import React, { useState } from 'react';
import './App.css';

function App() {
  const hands = [ 'グー', 'チョキ', 'パー'];
  const [playerHand, setPlayerHand] = useState('');
  const [cpuHand, setCpuHand] = useState('');
  const [result, setResult] = useState('');

  //勝利判定
  const judge = (player, cpu) => {
    if (player === cpu) {
      return 'あいこ!';
    } else if (
      (player === 'グー' && cpu === 'チョキ')||
      (player === 'チョキ' && cpu === 'パー')||
      (player === 'パー' && cpu === 'グー')
    ) {
      return 'あなたの勝ち!';
    } else {
      return 'あなたの負け';
    }
  };

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
      <div>
        {hands.map((hand) => (
          <button key = {hand} onClick={() => handClick(hand)}>
            {hand}
          </button>
        ))}        
      </div>
      <h2>あなたの手: {playerHand}</h2>
      <h2>相手の手: {cpuHand}</h2>
      <h2>結果: {result}</h2>
    </div>
  );
}
  
export default App;
