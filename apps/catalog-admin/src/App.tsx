import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { GitIntegrationList } from "./gitIntegration/GitIntegrationList";
import { GitIntegrationCreate } from "./gitIntegration/GitIntegrationCreate";
import { GitIntegrationEdit } from "./gitIntegration/GitIntegrationEdit";
import { GitIntegrationShow } from "./gitIntegration/GitIntegrationShow";
import { GithubAppList } from "./githubApp/GithubAppList";
import { GithubAppCreate } from "./githubApp/GithubAppCreate";
import { GithubAppEdit } from "./githubApp/GithubAppEdit";
import { GithubAppShow } from "./githubApp/GithubAppShow";
import { RepositoryList } from "./repository/RepositoryList";
import { RepositoryCreate } from "./repository/RepositoryCreate";
import { RepositoryEdit } from "./repository/RepositoryEdit";
import { RepositoryShow } from "./repository/RepositoryShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { ProjectEnvironmentList } from "./projectEnvironment/ProjectEnvironmentList";
import { ProjectEnvironmentCreate } from "./projectEnvironment/ProjectEnvironmentCreate";
import { ProjectEnvironmentEdit } from "./projectEnvironment/ProjectEnvironmentEdit";
import { ProjectEnvironmentShow } from "./projectEnvironment/ProjectEnvironmentShow";
import { ComponentList } from "./component/ComponentList";
import { ComponentCreate } from "./component/ComponentCreate";
import { ComponentEdit } from "./component/ComponentEdit";
import { ComponentShow } from "./component/ComponentShow";
import { ComponentRepositoryList } from "./componentRepository/ComponentRepositoryList";
import { ComponentRepositoryCreate } from "./componentRepository/ComponentRepositoryCreate";
import { ComponentRepositoryEdit } from "./componentRepository/ComponentRepositoryEdit";
import { ComponentRepositoryShow } from "./componentRepository/ComponentRepositoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"catalog"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="GitIntegration"
          list={GitIntegrationList}
          edit={GitIntegrationEdit}
          create={GitIntegrationCreate}
          show={GitIntegrationShow}
        />
        <Resource
          name="GithubApp"
          list={GithubAppList}
          edit={GithubAppEdit}
          create={GithubAppCreate}
          show={GithubAppShow}
        />
        <Resource
          name="Repository"
          list={RepositoryList}
          edit={RepositoryEdit}
          create={RepositoryCreate}
          show={RepositoryShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="ProjectEnvironment"
          list={ProjectEnvironmentList}
          edit={ProjectEnvironmentEdit}
          create={ProjectEnvironmentCreate}
          show={ProjectEnvironmentShow}
        />
        <Resource
          name="Component"
          list={ComponentList}
          edit={ComponentEdit}
          create={ComponentCreate}
          show={ComponentShow}
        />
        <Resource
          name="ComponentRepository"
          list={ComponentRepositoryList}
          edit={ComponentRepositoryEdit}
          create={ComponentRepositoryCreate}
          show={ComponentRepositoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
