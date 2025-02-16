import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GithubAppListRelationFilter } from "../githubApp/GithubAppListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RepositoryListRelationFilter } from "../repository/RepositoryListRelationFilter";

export type GitIntegrationWhereInput = {
  account?: AccountWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  githubApps?: GithubAppListRelationFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  repositories?: RepositoryListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
  url?: StringFilter;
};
