import template from "home/home.html";

export default {
  template,
  controller: HomeController,
  controllerAs: "vm",
  bindings: {}
};

/* @ngInject */
function HomeController() {
  const vm = this;
  vm.$onInit = function() {
    vm.developerName = "Thomas O. Adriano";
    vm.developerTitle = "Developer";
  };
}
