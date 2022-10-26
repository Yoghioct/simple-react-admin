import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { BackComponent } from '../components/BackComponent';

export default class DetailProductContainer extends Component {
  render() {
    return (
      <div>
          <Container>
            <BackComponent />
            Detail Product
          </Container>
      </div>
    )
  }
}
