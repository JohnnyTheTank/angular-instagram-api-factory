var app = angular.module("app", ['jtt_instagram']);
app.controller('controller', ['$scope', 'instagramFactory', function($scope, instagramFactory) {

    var _access_token = '<YOUR_ACCESS_TOKEN>';

    // user id converter: http://jelled.com/instagram/lookup-user-id
    instagramFactory.getUserById({
        userId:"416104304",
        access_token:_access_token,
    }).then(function(_data){
        console.info("user by id", _data);
    });

    // user id converter: http://jelled.com/instagram/lookup-user-id
    instagramFactory.getMediaFromUserById({
        userId:"416104304",
        access_token:_access_token,
    }).then(function(_data){
        console.info("media from user by id", _data);
    });

    instagramFactory.getMediaByTag({
        tag:"camping",
        count:20,
        access_token:_access_token,
    }).then(function(_data){
        console.info("media by tag", _data);
    });

    instagramFactory.getMediaFromLocationById({
        locationId:"24245",
        access_token:_access_token,
    }).then(function(_data){
        console.info("media from location by id", _data);
    });

    instagramFactory.getMediaByCoordinates({
        lat:"48.097919294",
        lng:"11.55422501",
        distance:5000,
        count:20,
        access_token:_access_token,
    }).then(function(_data){
        console.info("media from coordinates", _data);
    });

}]);
