import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectEnvironmentServiceBase } from "./base/projectEnvironment.service.base";

@Injectable()
export class ProjectEnvironmentService extends ProjectEnvironmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
