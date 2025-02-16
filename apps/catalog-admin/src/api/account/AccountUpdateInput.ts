import { GitIntegrationUpdateManyWithoutAccountsInput } from "./GitIntegrationUpdateManyWithoutAccountsInput";
import { InputJsonValue } from "../../types";
import { ProjectUpdateManyWithoutAccountsInput } from "./ProjectUpdateManyWithoutAccountsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AccountUpdateInput = {
  createdAt?: Date | null;
  deletedAt?: Date | null;
  gitIntegrations?: GitIntegrationUpdateManyWithoutAccountsInput;
  metadata?: InputJsonValue;
  name?: string;
  projects?: ProjectUpdateManyWithoutAccountsInput;
  tenant?: TenantWhereUniqueInput;
  updatedAt?: Date | null;
};
