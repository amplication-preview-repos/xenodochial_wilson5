import { ComponentWhereUniqueInput } from "../component/ComponentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type ComponentRepositoryWhereInput = {
  component?: ComponentWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  repository?: RepositoryWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
