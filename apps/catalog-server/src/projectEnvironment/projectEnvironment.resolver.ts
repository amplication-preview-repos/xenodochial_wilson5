import * as graphql from "@nestjs/graphql";
import { ProjectEnvironmentResolverBase } from "./base/projectEnvironment.resolver.base";
import { ProjectEnvironment } from "./base/ProjectEnvironment";
import { ProjectEnvironmentService } from "./projectEnvironment.service";

@graphql.Resolver(() => ProjectEnvironment)
export class ProjectEnvironmentResolver extends ProjectEnvironmentResolverBase {
  constructor(protected readonly service: ProjectEnvironmentService) {
    super(service);
  }
}
