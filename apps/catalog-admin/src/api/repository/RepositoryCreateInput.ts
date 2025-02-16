import { ComponentRepositoryCreateNestedManyWithoutRepositoriesInput } from "./ComponentRepositoryCreateNestedManyWithoutRepositoriesInput";
import { GitIntegrationWhereUniqueInput } from "../gitIntegration/GitIntegrationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RepositoryCreateInput = {
  componentRepositories?: ComponentRepositoryCreateNestedManyWithoutRepositoriesInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  gitIntegration: GitIntegrationWhereUniqueInput;
  metadata?: InputJsonValue;
  name: string;
  updatedAt?: Date | null;
};
