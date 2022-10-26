import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { BackComponent } from '../components/BackComponent';

export default class EditProductContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <BackComponent />
          Edit Product
        </Container>
      </div>
    )
  }
}
