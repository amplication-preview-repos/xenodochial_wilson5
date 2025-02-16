import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { GITINTEGRATION_TITLE_FIELD } from "./GitIntegrationTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const GitIntegrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Url" source="url" />
        <ReferenceManyField
          reference="GithubApp"
          target="gitIntegrationId"
          label="GithubApps"
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
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Repository"
          target="gitIntegrationId"
          label="Repositories"
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
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
