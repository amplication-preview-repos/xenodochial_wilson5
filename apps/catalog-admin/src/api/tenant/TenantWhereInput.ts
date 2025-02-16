import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TenantWhereInput = {
  accounts?: AccountListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  name?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
