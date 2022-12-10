(function (){
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService) {
        const ctrl = this;

        ctrl.toBuyItems = [{ name: "cookies", quantity: 10 }, 
        { name: "chips", quantity: 3 },
        { name: "chocolates", quantity: 8 },
        { name: "milk", quantity: 2 },
        { name: "cereal", quantity: 5 }];


        ctrl.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(ctrl.toBuyItems[index]);
            ctrl.toBuyItems.splice(index, 1);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        const ctrl = this;

        ctrl.boughtItems = ShoppingListCheckOffService.getItems();
    
    }

    function ShoppingListCheckOffService() {
        const svc = this;

        const boughtItems = [];

        svc.buyItem = function(item) {
            boughtItems.push(item)
        }

        svc.getItems = function() {
            return boughtItems;
        }
    }
})();