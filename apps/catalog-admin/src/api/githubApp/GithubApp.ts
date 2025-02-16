import { GitIntegration } from "../gitIntegration/GitIntegration";
import { JsonValue } from "type-fest";

export type GithubApp = {
  appId: string;
  createdAt: Date | null;
  deletedAt: Date | null;
  gitIntegration?: GitIntegration;
  id: string;
  installationId: string;
  metadata: JsonValue;
  updatedAt: Date | null;
};
