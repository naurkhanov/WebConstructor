import Header from '../Header/Header';
import WidgetsArea from '../WidgetsArea/WidgetsArea';
import Main from '../Main/Main';
import { useState } from 'react';

function App() {
  const items = {
    button: {
      type: 'button',
      content: 'button',
    },
    image: {
      type: 'image',
      content:
        'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-08/20190730_zaa_s145_008.jpg?itok=jA2jjra6',
    },
    headline: {
      type: 'headline',
      content: 'A legendary cap set that feels like new',
    },
    paragraph: {
      type: 'paragraph',
      content:
        'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.\n' +
        'Using the "Insert" panel on the right, drag and drop \n' +
        'the Abandoned Cart element onto the page below.',
    },
  };

  const [data, setData] = useState([]);

  const addNewItem = (type) => {
    setData([...data, { ...items[type], id: data.length + 1 }]);
  };

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <WidgetsArea addNewItem={addNewItem} />
        <Main data={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;
