(function() {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [{name: "cookies", quantity: 2},
                      {name: "milk", quantity: 1},
                      {name: "chips", quantity: 3},
                      {name: "salsa", quantity: 3},
                      {name: "wings", quantity: 4},
                      {name: "candy", quantity: 5}];

    var boughtItems = [];

    service.buyItem = function (index) {
      var item = {
        name:     toBuyItems[index].name,
        quantity: toBuyItems[index].quantity
      };

      toBuyItems.splice(index, 1);
      boughtItems.push(item);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    };
  }
})()
