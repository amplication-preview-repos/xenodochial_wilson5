import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type ProjectEnvironment = {
  createdAt: Date | null;
  deletedAt: Date | null;
  id: string;
  metadata: JsonValue;
  name: string;
  project?: Project;
  updatedAt: Date | null;
};
