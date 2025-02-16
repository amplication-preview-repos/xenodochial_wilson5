import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComponentRepositoryService } from "./componentRepository.service";
import { ComponentRepositoryControllerBase } from "./base/componentRepository.controller.base";

@swagger.ApiTags("componentRepositories")
@common.Controller("componentRepositories")
export class ComponentRepositoryController extends ComponentRepositoryControllerBase {
  constructor(protected readonly service: ComponentRepositoryService) {
    super(service);
  }
}
