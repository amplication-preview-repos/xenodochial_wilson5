import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ComponentRepositoryTitle } from "../componentRepository/ComponentRepositoryTitle";
import { GitIntegrationTitle } from "../gitIntegration/GitIntegrationTitle";

export const RepositoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="componentRepositories"
          reference="ComponentRepository"
        >
          <SelectArrayInput
            optionText={ComponentRepositoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceInput
          source="gitIntegration.id"
          reference="GitIntegration"
          label="Git Integration"
        >
          <SelectInput optionText={GitIntegrationTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
