import { GitIntegration as TGitIntegration } from "../api/gitIntegration/GitIntegration";

export const GITINTEGRATION_TITLE_FIELD = "url";

export const GitIntegrationTitle = (record: TGitIntegration): string => {
  return record.url?.toString() || String(record.id);
};
