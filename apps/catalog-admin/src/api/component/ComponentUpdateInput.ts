import { ComponentRepositoryUpdateManyWithoutComponentsInput } from "./ComponentRepositoryUpdateManyWithoutComponentsInput";
import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ComponentUpdateInput = {
  componentRepositories?: ComponentRepositoryUpdateManyWithoutComponentsInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  metadata?: InputJsonValue;
  name?: string;
  project?: ProjectWhereUniqueInput;
  updatedAt?: Date | null;
};
