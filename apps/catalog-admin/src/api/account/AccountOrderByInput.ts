import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
