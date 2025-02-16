import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ComponentTitle } from "../component/ComponentTitle";
import { ProjectEnvironmentTitle } from "../projectEnvironment/ProjectEnvironmentTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="components" reference="Component">
          <SelectArrayInput
            optionText={ComponentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="projectEnvironments"
          reference="ProjectEnvironment"
        >
          <SelectArrayInput
            optionText={ProjectEnvironmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
