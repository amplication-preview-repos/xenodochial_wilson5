import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GitIntegrationTitle } from "../gitIntegration/GitIntegrationTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput
          source="gitIntegrations"
          reference="GitIntegration"
        >
          <SelectArrayInput
            optionText={GitIntegrationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="projects" reference="Project">
          <SelectArrayInput
            optionText={ProjectTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
