import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import { Container } from 'reactstrap';

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>
          <Container>
            <TableComponent products={this.props.products} />
          </Container>
        </h1>
      </div>
    )
  }
}
