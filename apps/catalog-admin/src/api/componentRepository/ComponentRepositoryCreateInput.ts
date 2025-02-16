import { ComponentWhereUniqueInput } from "../component/ComponentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type ComponentRepositoryCreateInput = {
  component: ComponentWhereUniqueInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  metadata?: InputJsonValue;
  repository: RepositoryWhereUniqueInput;
  updatedAt?: Date | null;
};
