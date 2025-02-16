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

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="GitIntegration"
          target="accountId"
          label="GitIntegrations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="ID" source="id" />
            <TextField label="Metadata" source="metadata" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Project"
          target="accountId"
          label="Projects"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Deleted At" source="deletedAt" />
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
