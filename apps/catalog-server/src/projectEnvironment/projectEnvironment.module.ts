import { Module } from "@nestjs/common";
import { ProjectEnvironmentModuleBase } from "./base/projectEnvironment.module.base";
import { ProjectEnvironmentService } from "./projectEnvironment.service";
import { ProjectEnvironmentController } from "./projectEnvironment.controller";
import { ProjectEnvironmentResolver } from "./projectEnvironment.resolver";

@Module({
  imports: [ProjectEnvironmentModuleBase],
  controllers: [ProjectEnvironmentController],
  providers: [ProjectEnvironmentService, ProjectEnvironmentResolver],
  exports: [ProjectEnvironmentService],
})
export class ProjectEnvironmentModule {}
