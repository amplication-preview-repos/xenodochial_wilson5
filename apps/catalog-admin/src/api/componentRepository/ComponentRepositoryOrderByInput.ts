import { SortOrder } from "../../util/SortOrder";

export type ComponentRepositoryOrderByInput = {
  componentId?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  repositoryId?: SortOrder;
  updatedAt?: SortOrder;
};
