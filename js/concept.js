var conceptual = angular.module('conceptual', []);

conceptual.controller('exchangeRate', function($scope) {
    $scope.amount = 1;
    $scope.baseCurr = 'INR';
    $scope.Curr = ['EUR', 'USD', 'INR'];
    $scope.forExch = {'EUR': 0.013, 'USD': 0.016, 'INR': 1};
    $scope.calculateExchangeRate = function(Curr) {
        return  ($scope.forExch[$scope.baseCurr] / $scope.forExch[Curr]) * $scope.amount;
    };
});


