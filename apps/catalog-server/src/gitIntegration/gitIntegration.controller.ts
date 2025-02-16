import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GitIntegrationService } from "./gitIntegration.service";
import { GitIntegrationControllerBase } from "./base/gitIntegration.controller.base";

@swagger.ApiTags("gitIntegrations")
@common.Controller("gitIntegrations")
export class GitIntegrationController extends GitIntegrationControllerBase {
  constructor(protected readonly service: GitIntegrationService) {
    super(service);
  }
}
