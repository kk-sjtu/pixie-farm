import React from 'react';
import PixelPanel from './PixelPanel';

// 星露谷风外部小屋场景
const OutsideScene = ({ onEnterHouse }) => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--page-bg)', // 草地背景
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(46, 120, 60, 0.2) 0px, rgba(46, 120, 60, 0.2) 8px, transparent 8px, transparent 16px)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* 天空装饰 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '40%',
        backgroundColor: '#87ceeb',
        zIndex: 0
      }}>
        {/* 云朵 */}
        <div style={{ width: '120px', height: '60px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '50px', left: '20%', opacity: 0.9 }}></div>
        <div style={{ width: '150px', height: '70px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '80px', left: '70%', opacity: 0.9 }}></div>
      </div>

      {/* 场景标题 */}
      <h1 style={{
        color: '#583220',
        textShadow: '3px 3px 0px #f6e3c4',
        fontSize: '3rem',
        marginBottom: '20px',
        zIndex: 2,
        fontFamily: 'VT323, monospace'
      }}>
        星露谷 · 我的小屋
      </h1>

      {/* 核心场景容器 */}
      <div style={{
        width: '90%',
        maxWidth: '900px',
        height: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* 主人公 */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '100px',
          width: '80px',
          height: '120px',
          zIndex: 3
        }}>
          {/* 像素风人物（使用dicebear像素头像） */}
          <img 
            src="https://api.dicebear.com/9.x/pixel-art/svg?seed=farmer&scale=100&size=120" 
            alt="主人公" 
            style={{
              width: '100%',
              height: '100%',
              imageRendering: 'pixelated'
            }}
          />
        </div>

        {/* 星露谷风格小屋 */}
        <div style={{
          width: '600px',
          height: '400px',
          position: 'relative',
          imageRendering: 'pixelated'
        }}>
          {/* 小屋主体（木质结构） */}
          <div style={{
            width: '100%',
            height: '80%',
            backgroundColor: '#8b4513',
            border: '8px solid #583220',
            position: 'absolute',
            bottom: 0,
            boxShadow: 'inset 4px 4px 0px #a0522d, inset -4px -4px 0px #603813'
          }}>
            {/* 小屋窗户 */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#add8e6',
              border: '6px solid #583220',
              position: 'absolute',
              top: '80px',
              right: '80px',
              boxShadow: 'inset 3px 3px 0px #c4e4f0, inset -3px -3px 0px #7fb8cc'
            }}>
              {/* 窗户格 */}
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ width: '100%', height: '3px', backgroundColor: '#583220' }}></div>
                <div style={{ height: '100%', width: '3px', backgroundColor: '#583220' }}></div>
              </div>
            </div>

            {/* 小屋门（可点击进入） */}
            <div 
              onClick={onEnterHouse}
              style={{
                width: '120px',
                height: '180px',
                backgroundColor: '#a0522d',
                border: '6px solid #583220',
                position: 'absolute',
                top: '40px',
                left: '200px',
                cursor: 'pointer',
                boxShadow: 'inset 3px 3px 0px #b36936, inset -3px -3px 0px #8c481e',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              {/* 门把手 */}
              <div style={{
                width: '10px',
                height: '20px',
                backgroundColor: '#d4af37',
                borderRadius: '3px',
                position: 'absolute',
                top: '90px',
                right: '20px'
              }}></div>
              {/* 门提示文字 */}
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#f6e3c4',
                textShadow: '2px 2px 0px #583220',
                fontSize: '1.2rem',
                fontFamily: 'VT323, monospace'
              }}>
                点击门口进入小屋
              </div>
            </div>
          </div>

          {/* 小屋屋顶 */}
          <div style={{
            width: '650px',
            height: '150px',
            backgroundColor: '#c56e33',
            border: '8px solid #583220',
            position: 'absolute',
            top: '20px',
            left: '-25px',
            transform: 'skewY(-8deg)',
            boxShadow: 'inset 4px 4px 0px #e08848, inset -4px -4px 0px #a85928'
          }}>
            {/* 屋顶烟囱 */}
            <div style={{
              width: '40px',
              height: '80px',
              backgroundColor: '#8b4513',
              border: '4px solid #583220',
              position: 'absolute',
              top: '-40px',
              right: '100px'
            }}>
              {/* 烟囱冒烟 */}
              <div style={{ width: '30px', height: '30px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '50%', position: 'absolute', top: '-15px', left: '5px' }}></div>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '50%', position: 'absolute', top: '-35px', left: '0px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 草地装饰 */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '20%',
        backgroundColor: '#4a7c59',
        zIndex: 1,
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(38, 97, 49, 0.3) 0px, rgba(38, 97, 49, 0.3) 16px, transparent 16px, transparent 32px)'
      }}></div>
    </div>
  );
};

export default OutsideScene;