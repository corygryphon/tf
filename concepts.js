
angular.module('tf_concepts', [])
    .controller('mainControl', function($scope, $http) {

        $scope.result = function() {
            var y = $scope.number;
            var m = $scope.multiply(y);
            //$scope.test(y,m);
            return m;
        };

        $scope.multiply = function(y){
            var x = 321;
            if( y == 0 ) {
                return 0;
            }
            if( y > 0 ) {
                return (x + $scope.multiply(y - 1));
            }
            if( y < 0 ){
                return -$scope.multiply(-y);
            }
        };

        $scope.test = function(y,m){
            var chk = (y*321);
            var test = (m == chk ? "pass" : "fail");
            console.log(test);
        };
    });