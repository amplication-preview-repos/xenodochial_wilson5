import { ComponentRepositoryUpdateManyWithoutRepositoriesInput } from "./ComponentRepositoryUpdateManyWithoutRepositoriesInput";
import { GitIntegrationWhereUniqueInput } from "../gitIntegration/GitIntegrationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RepositoryUpdateInput = {
  componentRepositories?: ComponentRepositoryUpdateManyWithoutRepositoriesInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  gitIntegration?: GitIntegrationWhereUniqueInput;
  metadata?: InputJsonValue;
  name?: string;
  updatedAt?: Date | null;
};
