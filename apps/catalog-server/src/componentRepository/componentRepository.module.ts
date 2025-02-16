import { Module } from "@nestjs/common";
import { ComponentRepositoryModuleBase } from "./base/componentRepository.module.base";
import { ComponentRepositoryService } from "./componentRepository.service";
import { ComponentRepositoryController } from "./componentRepository.controller";
import { ComponentRepositoryResolver } from "./componentRepository.resolver";

@Module({
  imports: [ComponentRepositoryModuleBase],
  controllers: [ComponentRepositoryController],
  providers: [ComponentRepositoryService, ComponentRepositoryResolver],
  exports: [ComponentRepositoryService],
})
export class ComponentRepositoryModule {}
