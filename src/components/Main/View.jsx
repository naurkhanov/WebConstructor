import React from 'react';

function View({ data }) {
  return (
    <div className="view">
      {!!data.length &&
        data.map((item) => {
          return (
            <>
              {item.type === 'image' && (
                <div className="view__item">
                  <img src={item.content} alt="space" />
                </div>
              )}
              {item.type === 'headline' && (
                <div className="view__item">
                  <h3>{item.content}</h3>
                </div>
              )}
              {item.type === 'paragraph' && (
                <div className="view__item">
                  <p>{item.content}</p>
                </div>
              )}
              {item.type === 'button' && <div className="view__item">
                <button>
                  Register now
                </button>
              </div>}
            </>
          );
        })}
    </div>
  );
}

export default View;
