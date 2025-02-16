import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPONENT_TITLE_FIELD } from "../component/ComponentTitle";
import { REPOSITORY_TITLE_FIELD } from "../repository/RepositoryTitle";

export const ComponentRepositoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ComponentRepositories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Component"
          source="component.id"
          reference="Component"
        >
          <TextField source={COMPONENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <ReferenceField
          label="Repository"
          source="repository.id"
          reference="Repository"
        >
          <TextField source={REPOSITORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
