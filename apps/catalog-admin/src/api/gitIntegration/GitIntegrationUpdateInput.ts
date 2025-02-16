import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { GithubAppUpdateManyWithoutGitIntegrationsInput } from "./GithubAppUpdateManyWithoutGitIntegrationsInput";
import { InputJsonValue } from "../../types";
import { RepositoryUpdateManyWithoutGitIntegrationsInput } from "./RepositoryUpdateManyWithoutGitIntegrationsInput";

export type GitIntegrationUpdateInput = {
  account?: AccountWhereUniqueInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  githubApps?: GithubAppUpdateManyWithoutGitIntegrationsInput;
  metadata?: InputJsonValue;
  repositories?: RepositoryUpdateManyWithoutGitIntegrationsInput;
  updatedAt?: Date | null;
  url?: string;
};
