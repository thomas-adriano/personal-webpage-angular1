export default {
  controller: AppController,
  controllerAs: "vm",
  bindings: {
    testRouteDependency: "<"
  }
};

/* @ngInject */
function AppController() {
  const vm = this;
  vm.$onInit = function() {
    console.log("app initialized");
  };
}
