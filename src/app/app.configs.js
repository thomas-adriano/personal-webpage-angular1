import angular from "angular";
import exceptionHandler from "core/error-logging/app-error-logging.module";

export default angular
  .module(APP_NAMESPACE + ".app.configs", [exceptionHandler])
  .factory("$exceptionHandler", appExceptionHandler)
  .config(appConfigs).name;

/* @ngInject */
function appExceptionHandler($log, errorLogger) {
  return function myExceptionHandler(exception, cause) {
    errorLogger.toBackend(exception, cause);
    throw exception;
  };
}

/* @ngInject */
function appConfigs() {
  console.log("app configs");
}
