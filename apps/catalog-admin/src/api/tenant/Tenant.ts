import { Account } from "../account/Account";
import { JsonValue } from "type-fest";

export type Tenant = {
  accounts?: Array<Account>;
  createdAt: Date | null;
  deletedAt: Date | null;
  id: string;
  metadata: JsonValue;
  name: string;
  updatedAt: Date | null;
};
