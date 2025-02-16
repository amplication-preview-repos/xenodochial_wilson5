import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TENANT_TITLE_FIELD } from "./TenantTitle";

export const TenantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="Account"
          target="tenantId"
          label="Accounts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="ID" source="id" />
            <TextField label="Metadata" source="metadata" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
