import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPONENT_TITLE_FIELD } from "../component/ComponentTitle";
import { REPOSITORY_TITLE_FIELD } from "./RepositoryTitle";
import { GITINTEGRATION_TITLE_FIELD } from "../gitIntegration/GitIntegrationTitle";

export const RepositoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ComponentRepository"
          target="repositoryId"
          label="ComponentRepositories"
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
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
