import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComponentRepositoryServiceBase } from "./base/componentRepository.service.base";

@Injectable()
export class ComponentRepositoryService extends ComponentRepositoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
