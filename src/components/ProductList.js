import React from "react";
import { List, Datagrid, TextField, DateField, EditActions, DeleteButton, EditButton, BooleanField } from 'react-admin'

const ProductList = (props) => {
  return <List {...props}>
    <Datagrid>
        <TextField source='name' />
        <TextField source='qty' />
        <DateField source='expiredAt' />
        <BooleanField source='isActive' />
        <EditButton basePath='/product' />
        <DeleteButton basePath='/product' />
    </Datagrid>
  </List>
 
}

export default ProductList
