import { ProjectEnvironment as TProjectEnvironment } from "../api/projectEnvironment/ProjectEnvironment";

export const PROJECTENVIRONMENT_TITLE_FIELD = "name";

export const ProjectEnvironmentTitle = (
  record: TProjectEnvironment
): string => {
  return record.name?.toString() || String(record.id);
};
