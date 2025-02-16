import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { GithubAppCreateNestedManyWithoutGitIntegrationsInput } from "./GithubAppCreateNestedManyWithoutGitIntegrationsInput";
import { InputJsonValue } from "../../types";
import { RepositoryCreateNestedManyWithoutGitIntegrationsInput } from "./RepositoryCreateNestedManyWithoutGitIntegrationsInput";

export type GitIntegrationCreateInput = {
  account: AccountWhereUniqueInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  githubApps?: GithubAppCreateNestedManyWithoutGitIntegrationsInput;
  metadata?: InputJsonValue;
  repositories?: RepositoryCreateNestedManyWithoutGitIntegrationsInput;
  updatedAt?: Date | null;
  url: string;
};
