var conceptual = angular.module('conceptual', ['finance']);

conceptual.controller('exchangeRate', ['currencyConverter', function(currencyConverter) {
        this.amount = 1;
        this.baseCurr = 'INR';
        this.Curr = currencyConverter.Curr;

        this.total = function(Curr) {
            return currencyConverter.calculateExchangeRate(this.baseCurr, this.amount, Curr);
        };

    }]);
