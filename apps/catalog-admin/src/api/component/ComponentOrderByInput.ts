import { SortOrder } from "../../util/SortOrder";

export type ComponentOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
