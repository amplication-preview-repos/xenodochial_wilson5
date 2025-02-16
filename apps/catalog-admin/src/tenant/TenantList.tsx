import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TenantList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Tenants"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
