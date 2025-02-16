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

import { COMPONENT_TITLE_FIELD } from "./ComponentTitle";
import { REPOSITORY_TITLE_FIELD } from "../repository/RepositoryTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const ComponentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="ComponentRepository"
          target="componentId"
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
