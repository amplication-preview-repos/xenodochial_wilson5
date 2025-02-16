import { Module } from "@nestjs/common";
import { TenantModule } from "./tenant/tenant.module";
import { AccountModule } from "./account/account.module";
import { GitIntegrationModule } from "./gitIntegration/gitIntegration.module";
import { GithubAppModule } from "./githubApp/githubApp.module";
import { RepositoryModule } from "./repository/repository.module";
import { ProjectModule } from "./project/project.module";
import { ProjectEnvironmentModule } from "./projectEnvironment/projectEnvironment.module";
import { ComponentModule } from "./component/component.module";
import { ComponentRepositoryModule } from "./componentRepository/componentRepository.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    TenantModule,
    AccountModule,
    GitIntegrationModule,
    GithubAppModule,
    RepositoryModule,
    ProjectModule,
    ProjectEnvironmentModule,
    ComponentModule,
    ComponentRepositoryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
