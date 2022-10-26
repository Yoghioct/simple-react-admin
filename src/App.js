import React from 'react'
import { Admin, Resource } from 'react-admin';
import { fetchUtils, simpleRestClient } from 'ra-core';
import restProvider from 'ra-data-simple-rest'
import ProductList from './components/ProductList'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}

function App() {
  return (
    <div className="App">
      <Admin dataProvider={restProvider('https://60cb2f6921337e0017e440a0.mockapi.io', fetchUtils.fetchJson, 'X-Total-Count')}>
        <Resource name="product" list={ProductList}/>
      </Admin>
    </div>
  );
}

export default App;
