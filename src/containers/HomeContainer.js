import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getProductList } from '../actions/productAction'

class HomeContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getProductList());
  }
  render() {
    return (
      <div>
        <h1>
          <Container>
            <TableComponent />
          </Container>
        </h1>
      </div>
    )
  }
}

export default connect()(HomeContainer)
