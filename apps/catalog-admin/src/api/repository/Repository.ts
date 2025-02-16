import { ComponentRepository } from "../componentRepository/ComponentRepository";
import { GitIntegration } from "../gitIntegration/GitIntegration";
import { JsonValue } from "type-fest";

export type Repository = {
  componentRepositories?: Array<ComponentRepository>;
  createdAt: Date | null;
  deletedAt: Date | null;
  gitIntegration?: GitIntegration;
  id: string;
  metadata: JsonValue;
  name: string;
  updatedAt: Date | null;
};
