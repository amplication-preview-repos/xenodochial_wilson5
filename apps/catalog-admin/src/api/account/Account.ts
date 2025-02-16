import { GitIntegration } from "../gitIntegration/GitIntegration";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";
import { Tenant } from "../tenant/Tenant";

export type Account = {
  createdAt: Date | null;
  deletedAt: Date | null;
  gitIntegrations?: Array<GitIntegration>;
  id: string;
  metadata: JsonValue;
  name: string;
  projects?: Array<Project>;
  tenant?: Tenant;
  updatedAt: Date | null;
};
