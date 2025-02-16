import { SortOrder } from "../../util/SortOrder";

export type RepositoryOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  gitIntegrationId?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
