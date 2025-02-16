import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GITINTEGRATION_TITLE_FIELD } from "../gitIntegration/GitIntegrationTitle";

export const RepositoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Repositories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceField
          label="Git Integration"
          source="gitintegration.id"
          reference="GitIntegration"
        >
          <TextField source={GITINTEGRATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
