import { GitIntegrationCreateNestedManyWithoutAccountsInput } from "./GitIntegrationCreateNestedManyWithoutAccountsInput";
import { InputJsonValue } from "../../types";
import { ProjectCreateNestedManyWithoutAccountsInput } from "./ProjectCreateNestedManyWithoutAccountsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AccountCreateInput = {
  createdAt?: Date | null;
  deletedAt?: Date | null;
  gitIntegrations?: GitIntegrationCreateNestedManyWithoutAccountsInput;
  metadata?: InputJsonValue;
  name: string;
  projects?: ProjectCreateNestedManyWithoutAccountsInput;
  tenant: TenantWhereUniqueInput;
  updatedAt?: Date | null;
};
