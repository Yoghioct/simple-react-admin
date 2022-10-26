import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from 'reactstrap';

const columns = [{
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'qty',
    text: 'Qty',
    headerStyle: () => {
        return { width: "5%" };
    },
}, {
    dataField: 'expiredAt',
    text: 'expiredAt'
}, {
    dataField: 'isActive',
    text: 'isActive',
    headerStyle: () => {
        return { width: "10%" };
    },
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button color="dark" className="mr-2">
                    Detail
                </Button>
                <Button color="primary" className="mr-2">
                    Edit
                </Button>
                <Button color="danger" className="mr-2">
                    Delete
                </Button>
            </div>
        )
    }
}
];

const TableComponent = (props) => {
    return (
        <Container>
        <BootstrapTable keyField='id' data={ props.products } columns={columns} />
        </Container>
    )
}

export default TableComponent