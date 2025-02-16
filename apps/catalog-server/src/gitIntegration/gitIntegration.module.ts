import { Module } from "@nestjs/common";
import { GitIntegrationModuleBase } from "./base/gitIntegration.module.base";
import { GitIntegrationService } from "./gitIntegration.service";
import { GitIntegrationController } from "./gitIntegration.controller";
import { GitIntegrationResolver } from "./gitIntegration.resolver";

@Module({
  imports: [GitIntegrationModuleBase],
  controllers: [GitIntegrationController],
  providers: [GitIntegrationService, GitIntegrationResolver],
  exports: [GitIntegrationService],
})
export class GitIntegrationModule {}
