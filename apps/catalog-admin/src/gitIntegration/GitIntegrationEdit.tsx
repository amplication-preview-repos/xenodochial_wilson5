import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { GithubAppTitle } from "../githubApp/GithubAppTitle";
import { RepositoryTitle } from "../repository/RepositoryTitle";

export const GitIntegrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput source="githubApps" reference="GithubApp">
          <SelectArrayInput
            optionText={GithubAppTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <ReferenceArrayInput source="repositories" reference="Repository">
          <SelectArrayInput
            optionText={RepositoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
