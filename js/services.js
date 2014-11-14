angular.module('finance', [])
        .factory('currencyConverter', function() {
            var Curr = ['EUR', 'USD', 'INR'];
            var forExch = {'EUR': 0.013, 'USD': 0.016, 'INR': 1};
            var calculateExchangeRate = function(baseCurr, amount, Curr) {
                return  (forExch[baseCurr] / forExch[Curr]) * amount;
            };
            return {Curr: Curr, calculateExchangeRate: calculateExchangeRate};
        });