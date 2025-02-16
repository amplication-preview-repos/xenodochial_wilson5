import * as graphql from "@nestjs/graphql";
import { GithubAppResolverBase } from "./base/githubApp.resolver.base";
import { GithubApp } from "./base/GithubApp";
import { GithubAppService } from "./githubApp.service";

@graphql.Resolver(() => GithubApp)
export class GithubAppResolver extends GithubAppResolverBase {
  constructor(protected readonly service: GithubAppService) {
    super(service);
  }
}
