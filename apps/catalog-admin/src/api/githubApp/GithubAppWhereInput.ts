import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GitIntegrationWhereUniqueInput } from "../gitIntegration/GitIntegrationWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type GithubAppWhereInput = {
  appId?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  gitIntegration?: GitIntegrationWhereUniqueInput;
  id?: StringFilter;
  installationId?: StringFilter;
  metadata?: JsonFilter;
  updatedAt?: DateTimeNullableFilter;
};
