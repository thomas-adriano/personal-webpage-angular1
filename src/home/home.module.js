import angular from "angular";
import homeComponent from "home/home.component";

const COMPONENT_NAME = COMPONENT_PREFIX + "Home";

export default angular
  .module(APP_NAMESPACE + ".home", [])
  .component(COMPONENT_NAME, homeComponent)
  .config(homeRoute).name;

/* @ngInject */
function homeRoute($stateProvider, $urlRouterProvider) {
  console.log("home route config");
  const state = {
    name: "home",
    url: "/home",
    component: COMPONENT_NAME,
    resolve: {}
  };

  $stateProvider.state(state);
  $urlRouterProvider.otherwise(state.url);
}
