import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import appConfigs from "app/app.configs";

import appConstants from "app/app.constants";
import appComponent from "app/app.component";

import home from "home/home.module";

const COMPONENT_NAME = COMPONENT_PREFIX + "App";

export default angular
  .module(APP_NAMESPACE, [uiRouter, appConfigs, home])
  .constant(
    "APP_CONSTANTS",
    (() => {
      return appConstants;
    })()
  )
  .component(COMPONENT_NAME, appComponent).name;
