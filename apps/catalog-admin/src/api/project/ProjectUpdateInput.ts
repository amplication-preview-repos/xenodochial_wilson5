import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ComponentUpdateManyWithoutProjectsInput } from "./ComponentUpdateManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";
import { ProjectEnvironmentUpdateManyWithoutProjectsInput } from "./ProjectEnvironmentUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  account?: AccountWhereUniqueInput;
  components?: ComponentUpdateManyWithoutProjectsInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  metadata?: InputJsonValue;
  name?: string;
  projectEnvironments?: ProjectEnvironmentUpdateManyWithoutProjectsInput;
  updatedAt?: Date | null;
};
