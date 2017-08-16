import angular from "angular";

export default angular
  .module(APP_NAMESPACE + ".core.errorlogging", [])
  .factory("errorLogger", errorLogger).name;

/* @ngInject */
function errorLogger($log) {
  return {
    toBackend
  };

  function toBackend(exception, cause) {
    $log.warn("Logging to backend");
    $log.warn(exception, cause);
  }
}
