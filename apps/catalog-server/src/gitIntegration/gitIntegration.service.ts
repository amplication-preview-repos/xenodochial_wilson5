import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GitIntegrationServiceBase } from "./base/gitIntegration.service.base";

@Injectable()
export class GitIntegrationService extends GitIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
