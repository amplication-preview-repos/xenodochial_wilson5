import { ComponentRepository } from "../componentRepository/ComponentRepository";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Component = {
  componentRepositories?: Array<ComponentRepository>;
  createdAt: Date | null;
  deletedAt: Date | null;
  id: string;
  metadata: JsonValue;
  name: string;
  project?: Project;
  updatedAt: Date | null;
};
