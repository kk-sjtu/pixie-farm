import React from 'react';
import PixelPanel from './PixelPanel';

const DialogBox = ({ name, text, onNext, isLast }) => {
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${name}`;

  return (
    <div onClick={onNext} style={{ cursor: 'pointer', userSelect: 'none' }}>
      <PixelPanel style={{ 
        display: 'flex', 
        gap: '20px', 
        alignItems: 'flex-start',
        minHeight: '120px'
      }}>
        {/* 头像区域 */}
        <div style={{
          width: '80px', height: '80px',
          backgroundColor: '#d9a066', border: '4px solid #583220',
          flexShrink: 0
        }}>
          <img src={avatarUrl} alt="avatar" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* 文字区 */}
        <div style={{ flex: 1 }}>
          <div style={{ color: '#8b0000', fontWeight: 'bold', marginBottom: '8px', fontSize: '1.2rem' }}>
            {name}
          </div>
          <p style={{ margin: 0, lineHeight: '1.5' }}>
            {text}
          </p>
          <div style={{ textAlign: 'right', fontSize: '0.8rem', marginTop: '10px', opacity: 0.6 }}>
            {/* 最后一页显示「结束」，否则显示「继续」 */}
            {isLast ? "■ 结束（点击进入小屋）" : "▼ 点击继续"}
          </div>
        </div>
      </PixelPanel>
    </div>
  );
};

export default DialogBox;