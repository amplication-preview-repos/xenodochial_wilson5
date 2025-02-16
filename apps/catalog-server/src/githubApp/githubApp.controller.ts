import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GithubAppService } from "./githubApp.service";
import { GithubAppControllerBase } from "./base/githubApp.controller.base";

@swagger.ApiTags("githubApps")
@common.Controller("githubApps")
export class GithubAppController extends GithubAppControllerBase {
  constructor(protected readonly service: GithubAppService) {
    super(service);
  }
}
