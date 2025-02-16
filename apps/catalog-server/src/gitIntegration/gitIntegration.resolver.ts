import * as graphql from "@nestjs/graphql";
import { GitIntegrationResolverBase } from "./base/gitIntegration.resolver.base";
import { GitIntegration } from "./base/GitIntegration";
import { GitIntegrationService } from "./gitIntegration.service";

@graphql.Resolver(() => GitIntegration)
export class GitIntegrationResolver extends GitIntegrationResolverBase {
  constructor(protected readonly service: GitIntegrationService) {
    super(service);
  }
}
