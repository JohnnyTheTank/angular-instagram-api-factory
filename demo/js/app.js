var app = angular.module("app", ['jtt_instagram']);
app.controller('controller', ['$scope', 'instagramFactory', function($scope, instagramFactory) {

    var _access_token = "<YOUR_ACCESS_TOKEN>";
    var _client_id = "<YOUR_CLIENT_ID>";

    // user id converter: http://jelled.com/instagram/lookup-user-id
    instagramFactory.getUserById({
        userId:"416104304",
        access_token:_access_token,
        client_id:_client_id,
    }).success(function(_data){
        console.info("user by id", _data);
    });

    // user id converter: http://jelled.com/instagram/lookup-user-id
    instagramFactory.getMediaFromUserById({
        userId:"416104304",
        count:20,
        access_token:_access_token,
        client_id:_client_id,
    }).success(function(_data){
        console.info("media from user by id", _data);
    });

    instagramFactory.getMediaByTag({
        tag:"camping",
        count:20,
        access_token:_access_token,
        client_id:_client_id,
    }).success(function(_data){
        console.info("media by tag", _data);
    });

}]);
