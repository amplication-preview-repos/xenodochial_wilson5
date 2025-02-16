import { Module } from "@nestjs/common";
import { GithubAppModuleBase } from "./base/githubApp.module.base";
import { GithubAppService } from "./githubApp.service";
import { GithubAppController } from "./githubApp.controller";
import { GithubAppResolver } from "./githubApp.resolver";

@Module({
  imports: [GithubAppModuleBase],
  controllers: [GithubAppController],
  providers: [GithubAppService, GithubAppResolver],
  exports: [GithubAppService],
})
export class GithubAppModule {}
