import { Account } from "../account/Account";
import { Component } from "../component/Component";
import { JsonValue } from "type-fest";
import { ProjectEnvironment } from "../projectEnvironment/ProjectEnvironment";

export type Project = {
  account?: Account;
  components?: Array<Component>;
  createdAt: Date | null;
  deletedAt: Date | null;
  id: string;
  metadata: JsonValue;
  name: string;
  projectEnvironments?: Array<ProjectEnvironment>;
  updatedAt: Date | null;
};
