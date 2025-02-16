import { ComponentRepositoryListRelationFilter } from "../componentRepository/ComponentRepositoryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ComponentWhereInput = {
  componentRepositories?: ComponentRepositoryListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  name?: StringFilter;
  project?: ProjectWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
