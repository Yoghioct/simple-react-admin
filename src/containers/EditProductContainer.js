import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { BackComponent } from '../components/BackComponent';
import { connect } from 'react-redux';
import { getProductEdit } from '../actions/productAction';

class EditProductContainer extends Component {
  componentDidMount() {
    // this.props.dispatch(getProductEdit(this.props.match.params.id))
  }
  render() {
    return (
      <div>
        <Container>
          <BackComponent />
          <h1>Edit Product</h1>
        </Container>
          {/* <h1>Edit Product {this.props.match.params.id}</h1> */}
      </div>
    )
  }
}

export default connect()(EditProductContainer);