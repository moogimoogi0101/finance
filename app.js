// controller for display
var uiController = (function () {})();
// -----------------------------------------------------------//
// controller for finance
var financeController = (function () {})();
// -----------------------------------------------------------//
// plug controller
var appController = (function (uiCtroller, financeController) {
  var ctrlAddItem = function () {
    // 1 oruulah ugug3dliig delgetsees olj avna
    console.log("delgetsees ugugdul avah heseg");
    // 2 olj avsan ugudluudee sanhuugin controllert damjuulj tend hadgalna

    // 3 olj avsn ugudluude web deer gargana

    // 4 tusuviig tootsoolno

    // 5 etssiin uldegdeliig delgetsed gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
