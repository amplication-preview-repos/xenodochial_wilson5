import { GithubAppWhereInput } from "./GithubAppWhereInput";
import { GithubAppOrderByInput } from "./GithubAppOrderByInput";

export type GithubAppFindManyArgs = {
  where?: GithubAppWhereInput;
  orderBy?: Array<GithubAppOrderByInput>;
  skip?: number;
  take?: number;
};
