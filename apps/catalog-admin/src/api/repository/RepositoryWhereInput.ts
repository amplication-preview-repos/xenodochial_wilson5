import { ComponentRepositoryListRelationFilter } from "../componentRepository/ComponentRepositoryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GitIntegrationWhereUniqueInput } from "../gitIntegration/GitIntegrationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RepositoryWhereInput = {
  componentRepositories?: ComponentRepositoryListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  gitIntegration?: GitIntegrationWhereUniqueInput;
  id?: StringFilter;
  metadata?: JsonFilter;
  name?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
