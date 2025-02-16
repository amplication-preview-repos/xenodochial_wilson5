import { GithubApp as TGithubApp } from "../api/githubApp/GithubApp";

export const GITHUBAPP_TITLE_FIELD = "appId";

export const GithubAppTitle = (record: TGithubApp): string => {
  return record.appId?.toString() || String(record.id);
};
