import { useState, useEffect } from 'react';
import './App.css';
import Tile from './components/Tile.js';
import * as data from './category.json';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // 
      //  I was getting a ReadableObject with no body or json
    // 
    // fetch('http://localhost:8000/', {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // })
    // .then(response => {
    //   console.log('sponge', response)
    //   response.json()
    // })
    // .then(json => console.log('jason', json))
    console.log(data.default);
    setProductList(data.default.productList[0].products)
  }, [])
  return (
    <div className="App">
      <header>
        <p>
          Michelle's J.Crew Take Home Assignment
        </p>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '64px auto' }}>
        {productList && productList.map(product => { 
          return (
          <Tile
            name={product.productDescription}
            productCode={product.productCode}
            key={product.productId}
            listPrice={product.listPrice.formatted}
            nowPrice={product.now ? product.now.formatted : false}
            defaultColorCode={product.defaultColorCode}
          />
        )})
        }
      </div>
    </div>
  );
}

export default App;
