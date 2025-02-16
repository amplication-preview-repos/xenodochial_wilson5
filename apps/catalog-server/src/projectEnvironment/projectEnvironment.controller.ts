import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectEnvironmentService } from "./projectEnvironment.service";
import { ProjectEnvironmentControllerBase } from "./base/projectEnvironment.controller.base";

@swagger.ApiTags("projectEnvironments")
@common.Controller("projectEnvironments")
export class ProjectEnvironmentController extends ProjectEnvironmentControllerBase {
  constructor(protected readonly service: ProjectEnvironmentService) {
    super(service);
  }
}
