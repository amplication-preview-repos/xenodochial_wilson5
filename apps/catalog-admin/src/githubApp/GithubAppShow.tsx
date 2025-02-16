import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { GITINTEGRATION_TITLE_FIELD } from "../gitIntegration/GitIntegrationTitle";

export const GithubAppShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
