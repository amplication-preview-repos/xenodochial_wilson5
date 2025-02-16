import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ComponentCreateNestedManyWithoutProjectsInput } from "./ComponentCreateNestedManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";
import { ProjectEnvironmentCreateNestedManyWithoutProjectsInput } from "./ProjectEnvironmentCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  account: AccountWhereUniqueInput;
  components?: ComponentCreateNestedManyWithoutProjectsInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  metadata?: InputJsonValue;
  name: string;
  projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutProjectsInput;
  updatedAt?: Date | null;
};
