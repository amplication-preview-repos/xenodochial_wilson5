import { ProjectEnvironmentWhereInput } from "./ProjectEnvironmentWhereInput";
import { ProjectEnvironmentOrderByInput } from "./ProjectEnvironmentOrderByInput";

export type ProjectEnvironmentFindManyArgs = {
  where?: ProjectEnvironmentWhereInput;
  orderBy?: Array<ProjectEnvironmentOrderByInput>;
  skip?: number;
  take?: number;
};
