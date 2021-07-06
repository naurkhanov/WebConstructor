import React from 'react';
import Constructor from './Constructor';
import View from './View';

function Main({ data, setData }) {
  return (
    <main>
      <div className="empty"></div>
      <div className="wrapper">
        <Constructor data={data} setData={setData} />
        <View data={data} />
      </div>
    </main>
  );
}

export default Main;
