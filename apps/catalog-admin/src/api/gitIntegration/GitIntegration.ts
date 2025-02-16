import { Account } from "../account/Account";
import { GithubApp } from "../githubApp/GithubApp";
import { JsonValue } from "type-fest";
import { Repository } from "../repository/Repository";

export type GitIntegration = {
  account?: Account;
  createdAt: Date | null;
  deletedAt: Date | null;
  githubApps?: Array<GithubApp>;
  id: string;
  metadata: JsonValue;
  repositories?: Array<Repository>;
  updatedAt: Date | null;
  url: string;
};
