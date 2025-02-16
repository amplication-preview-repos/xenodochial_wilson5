import * as graphql from "@nestjs/graphql";
import { ComponentRepositoryResolverBase } from "./base/componentRepository.resolver.base";
import { ComponentRepository } from "./base/ComponentRepository";
import { ComponentRepositoryService } from "./componentRepository.service";

@graphql.Resolver(() => ComponentRepository)
export class ComponentRepositoryResolver extends ComponentRepositoryResolverBase {
  constructor(protected readonly service: ComponentRepositoryService) {
    super(service);
  }
}
