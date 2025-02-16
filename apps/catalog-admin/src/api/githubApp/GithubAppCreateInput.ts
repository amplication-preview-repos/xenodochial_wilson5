import { GitIntegrationWhereUniqueInput } from "../gitIntegration/GitIntegrationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type GithubAppCreateInput = {
  appId: string;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  gitIntegration: GitIntegrationWhereUniqueInput;
  installationId: string;
  metadata?: InputJsonValue;
  updatedAt?: Date | null;
};
