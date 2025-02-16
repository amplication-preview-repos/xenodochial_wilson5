import { ComponentRepositoryWhereInput } from "./ComponentRepositoryWhereInput";
import { ComponentRepositoryOrderByInput } from "./ComponentRepositoryOrderByInput";

export type ComponentRepositoryFindManyArgs = {
  where?: ComponentRepositoryWhereInput;
  orderBy?: Array<ComponentRepositoryOrderByInput>;
  skip?: number;
  take?: number;
};
