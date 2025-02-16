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

export const GithubAppList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GithubApps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="App Id" source="appId" />
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
        <TextField label="Installation Id" source="installationId" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
