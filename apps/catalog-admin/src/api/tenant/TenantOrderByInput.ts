import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
