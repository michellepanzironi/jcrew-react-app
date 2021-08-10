import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Tile from './components/Tile.js';
import ProductPage from './components/ProductPage.js';

import * as data from './category.json';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <p>
            Michelle's J.Crew Take Home Assignment
          </p>
        </header>

        <Switch>
          <Route path="/">
            <CategoryPage />
          </Route>
          <Route path="/:id">
            <ProductPage />
          </Route>
        </Switch>

        
      </div>
    </BrowserRouter>
  );
}

const CategoryPage = () => {

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
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '64px auto' }}>
      {productList && productList.map(product => {
        return (
          <Tile product={product} />
        )
      })
      }
    </div>
  )
}

export default App;
