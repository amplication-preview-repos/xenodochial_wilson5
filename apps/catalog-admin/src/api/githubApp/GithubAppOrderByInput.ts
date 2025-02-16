import { SortOrder } from "../../util/SortOrder";

export type GithubAppOrderByInput = {
  appId?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  gitIntegrationId?: SortOrder;
  id?: SortOrder;
  installationId?: SortOrder;
  metadata?: SortOrder;
  updatedAt?: SortOrder;
};
