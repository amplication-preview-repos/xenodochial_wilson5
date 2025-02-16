import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GitIntegrationTitle } from "../gitIntegration/GitIntegrationTitle";

export const GithubAppCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="App Id" source="appId" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceInput
          source="gitIntegration.id"
          reference="GitIntegration"
          label="Git Integration"
        >
          <SelectInput optionText={GitIntegrationTitle} />
        </ReferenceInput>
        <TextInput label="Installation Id" source="installationId" />
        <div />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
