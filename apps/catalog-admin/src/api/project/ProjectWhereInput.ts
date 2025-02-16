import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ComponentListRelationFilter } from "../component/ComponentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectEnvironmentListRelationFilter } from "../projectEnvironment/ProjectEnvironmentListRelationFilter";

export type ProjectWhereInput = {
  account?: AccountWhereUniqueInput;
  components?: ComponentListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  name?: StringFilter;
  projectEnvironments?: ProjectEnvironmentListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
