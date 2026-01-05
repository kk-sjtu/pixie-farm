import React, { useState } from 'react';
import OutsideScene from './OutsideScene';
import InsideScene from './InsideScene';

function App() {
  // 控制场景状态：outside（外部）/ inside（内部）
  const [scene, setScene] = useState('outside');

  // 进入小屋
  const handleEnterHouse = () => {
    setScene('inside');
  };

  // 离开小屋
  const handleLeaveHouse = () => {
    setScene('outside');
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      fontFamily: 'VT323, monospace'
    }}>
      {/* 根据场景渲染对应内容 */}
      {scene === 'outside' ? (
        <OutsideScene onEnterHouse={handleEnterHouse} />
      ) : (
        <InsideScene onLeaveHouse={handleLeaveHouse} />
      )}
    </div>
  );
}

export default App;