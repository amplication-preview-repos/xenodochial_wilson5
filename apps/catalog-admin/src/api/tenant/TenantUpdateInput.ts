import { AccountUpdateManyWithoutTenantsInput } from "./AccountUpdateManyWithoutTenantsInput";
import { InputJsonValue } from "../../types";

export type TenantUpdateInput = {
  accounts?: AccountUpdateManyWithoutTenantsInput;
  createdAt?: Date | null;
  deletedAt?: Date | null;
  metadata?: InputJsonValue;
  name?: string;
  updatedAt?: Date | null;
};
