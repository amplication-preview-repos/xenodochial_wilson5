import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GithubAppServiceBase } from "./base/githubApp.service.base";

@Injectable()
export class GithubAppService extends GithubAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
