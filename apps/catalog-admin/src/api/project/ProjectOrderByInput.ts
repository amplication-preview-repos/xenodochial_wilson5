import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
