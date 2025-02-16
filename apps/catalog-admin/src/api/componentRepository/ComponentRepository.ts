import { Component } from "../component/Component";
import { JsonValue } from "type-fest";
import { Repository } from "../repository/Repository";

export type ComponentRepository = {
  component?: Component;
  createdAt: Date | null;
  deletedAt: Date | null;
  id: string;
  metadata: JsonValue;
  repository?: Repository;
  updatedAt: Date | null;
};
