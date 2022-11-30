// controller for display
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();
// -----------------------------------------------------------//
// controller for finance

var financeController = (function () {
  // private
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // private
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // var incomes = [];
  // var expenses = [];

  // var totalIncomes = 0;
  // var totalExpenses = 0;
  // -------------------------------------------------
  // private
  var data = {
    items: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItems: function (type, desc, val) {
      var item, id;

      if (data.items[type].length === 0) id = 1;
      else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }
      data.items[type].push(item);
    },

    seeData: function () {
      return data;
    },
  };
})();
// -----------------------------------------------------------//
// plug controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1 oruulah ugug3dliig delgetsees olj avna
    var input = uiController.getInput();

    // 2 olj avsan ugudluudee sanhuugin controllert damjuulj tend hadgalna
    financeController.addItems(input.type, input.description, input.value);
    // 3 olj avsn ugudluude web deer gargana
    // 4 tusuviig tootsoolno
    // 5 etssiin uldegdeliig delgetsed gargana
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Started");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
