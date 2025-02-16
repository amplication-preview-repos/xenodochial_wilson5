import { ComponentRepository as TComponentRepository } from "../api/componentRepository/ComponentRepository";

export const COMPONENTREPOSITORY_TITLE_FIELD = "id";

export const ComponentRepositoryTitle = (
  record: TComponentRepository
): string => {
  return record.id?.toString() || String(record.id);
};
