import { ComponentRepositoryCreateNestedManyWithoutComponentsInput } from "./ComponentRepositoryCreateNestedManyWithoutComponentsInput";
import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ComponentCreateInput = {
  componentRepositories?: ComponentRepositoryCreateNestedManyWithoutComponentsInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  metadata?: InputJsonValue;
  name: string;
  project: ProjectWhereUniqueInput;
  updatedAt?: Date | null;
};
