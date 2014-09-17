
function IndexController($scope, $http){
    $scope.controllerWired = "Controller successfully connected.";
    $http({method:'GET', url: 'api/test'})
        .success(function(data){
            console.log(data);
        })
        .error(function(data){
            console.log(data);
        });

    //working file reader
//    $http({
//        method:'POST',
//        url: 'api/file',
//        data: {
//            filePath : 'C:\\Games\\test.txt'
//        }
//    })
//        .success(function(data){
//            console.log(data);
//        })
//        .error(function(data){
//            console.log(data);
//        })
};