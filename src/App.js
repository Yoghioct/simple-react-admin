import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import DetailProductContainer from './containers/DetailProductContainer';
import EditProductContainer from './containers/EditProductContainer';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route exact path="/detail/:id" element={<DetailProductContainer />} />
            <Route exact path="/edit/:id" element={<EditProductContainer />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found</h2>
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    )
  }
}
