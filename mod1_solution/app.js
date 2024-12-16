( function () {
    'use strict'

    angular.module('firstMission', [])
    .controller('firstMissionController', function ($scope){
        $scope.command = "";
        $scope.commandSize = 0;
        $scope.message = "";

        $scope.checkByCommandLength = function(){
            if($scope.command.trim()===""){
                $scope.message = "Please enter data first";
                return;
            }
            const commands = $scope.command.split(',').map(item => item.trim()).filter(item => item !== ""); 
            if(commands.length <= 3) {
                $scope.message = "Enjoy !";
            } else {
                $scope.message = "Too much !";
            }
        }
    })
}) ();