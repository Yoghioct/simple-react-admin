import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from 'reactstrap';

const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
        return { width: "5%" };
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
        return { width: "5%" };
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
                <Button color="dark" size="sm">
                    Detail
                </Button>
                {' '}
                <Button color="primary" size="sm">
                    Edit
                </Button>
                {' '}
                <Button color="danger" size="sm">
                    Delete
                </Button>
            </div>
        )
    }
}
];

const defaultSorted = [{
    dataField:'name',
    order: 'asc'
}];

const TableComponent = (props) => {
    return (
        <Container>
        <BootstrapTable bootstrap4 keyField='id' data={ props.products } columns={columns} defaultSorted={ defaultSorted }  />
        </Container>
    )
}

export default TableComponent