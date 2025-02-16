import { AccountCreateNestedManyWithoutTenantsInput } from "./AccountCreateNestedManyWithoutTenantsInput";
import { InputJsonValue } from "../../types";

export type TenantCreateInput = {
  accounts?: AccountCreateNestedManyWithoutTenantsInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  metadata?: InputJsonValue;
  name: string;
  updatedAt?: Date | null;
};
