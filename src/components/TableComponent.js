import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import { Link } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';

const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
        return { width: "7%" };
    },
},
{
    dataField: 'name',
    text: 'Product Name',
    sort: true
}, {
    dataField: 'qty',
    text: 'Qty',
    sort: true,
    headerStyle: () => {
        return { width: "7%" };
    },
}, {
    dataField: 'expiredAt',
    text: 'Date'
}, {
    dataField: 'isActive',
    text: 'Status',
    headerStyle: () => {
        return { width: "10%" };
    },
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"detail/" + row.id}>
                    <Button color="dark" size="sm">
                        Detail
                    </Button>
                </Link>
                {' '}
                <Link to={"edit/" + row.id}>
                    <Button color="primary" size="sm">
                        Edit
                    </Button>
                </Link>
                {' '}
                <Button color="danger" size="sm">
                    Delete
                </Button>
            </div >
        )
    }
}
];

const defaultSorted = [{
    dataField: 'name',
    order: 'asc'
}];

 const mapStateToProps = (state) => {
    return {
        getProductList: state.products.getProductList,
        errorProductList: state.products.errorProductList
    }
 }

const TableComponent = (props) => {
    return (
        <Container>
            { props.getProductList ? 
            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={props.getProductList}
                columns={columns}
                defaultSorted={defaultSorted}
                search
            >
                {
                    props => (
                        <div>
                        <Row>
                            <Col>
                            <div className='float-right'>
                                <SearchBar {...props.searchProps} placeholder="Cari Produk..." />
                            </div>
                            </Col>
                        </Row>
            
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider> : null }

        </Container>
    )
}

export default connect(mapStateToProps, null)(TableComponent);