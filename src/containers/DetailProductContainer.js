import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { BackComponent } from '../components/BackComponent';
import { connect } from 'react-redux';
import { getProductDetail } from '../actions/productAction';

class DetailProductContainer extends Component {
  componentDidMount() {
    // this.props.dispatch(getProductDetail(this.props.match.params.id))
  }
  render() {
    return (
      <div>
          <Container>
            <BackComponent />
            <h1>Detail Product</h1>
          </Container>
      </div>
    )
  }
}

export default connect()(DetailProductContainer);