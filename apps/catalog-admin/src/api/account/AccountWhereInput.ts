import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GitIntegrationListRelationFilter } from "../gitIntegration/GitIntegrationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AccountWhereInput = {
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  gitIntegrations?: GitIntegrationListRelationFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  name?: StringFilter;
  projects?: ProjectListRelationFilter;
  tenant?: TenantWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
