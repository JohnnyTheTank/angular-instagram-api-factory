"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/angular-instagram-api-factory
 @licence MIT
 */

angular.module("jtt_instagram", [])
    .factory('instagramFactory', ['$http', 'instagramSearchDataService', function ($http, instagramSearchDataService) {

        var instagramFactory = {};

        instagramFactory.getUserById = function (_params) {

            var instagramSearchData = instagramSearchDataService.getNew("userById", _params);

            return $http.jsonp(
                instagramSearchData.url,
                {
                    method: 'GET',
                    params: instagramSearchData.object,
                }
            );
        };

        instagramFactory.getMediaFromUserById = function (_params) {

            var instagramSearchData = instagramSearchDataService.getNew("mediaFromUserById", _params);

            return $http.jsonp(
                instagramSearchData.url,
                {
                    method: 'GET',
                    params: instagramSearchData.object,
                }
            );
        };

        instagramFactory.getMediaByTag = function (_params) {

            var instagramSearchData = instagramSearchDataService.getNew("mediaByTag", _params);

            return $http.jsonp(
                instagramSearchData.url,
                {
                    method: 'GET',
                    params: instagramSearchData.object,
                }
            );
        };

        instagramFactory.getMediaFromLocationById = function (_params) {

            var instagramSearchData = instagramSearchDataService.getNew("mediaFromLocationById", _params);

            return $http.jsonp(
                instagramSearchData.url,
                {
                    method: 'GET',
                    params: instagramSearchData.object,
                }
            );
        };

        instagramFactory.getMediaByCoordinates= function (_params) {

            var instagramSearchData = instagramSearchDataService.getNew("mediaByCoordinates", _params);

            return $http.jsonp(
                instagramSearchData.url,
                {
                    method: 'GET',
                    params: instagramSearchData.object,
                }
            );
        };

        return instagramFactory;
    }])
    .service('instagramSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "https://api.instagram.com/v1/";
        };

        this.fillDataInObjectByList = function(_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if(typeof _params[value] !== "undefined") {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var instagramSearchData = {
                object: {},
                url: "",
            };

            instagramSearchData.object = {
                access_token: _params.access_token,
                client_id: _params.client_id,
                callback: "JSON_CALLBACK"
            };

            switch (_type) {
                case "userById":
                    instagramSearchData.url = this.getApiBaseUrl()+"users/" + _params.userId;
                    break;

                case "mediaFromUserById":
                    instagramSearchData.object.count = _params.count || 20;
                    instagramSearchData = this.fillDataInObjectByList(instagramSearchData, _params, [
                        'max_id', 'min_id', 'min_timestamp', 'max_timestamp'
                    ]);
                    instagramSearchData.url = this.getApiBaseUrl()+"users/" + _params.userId + "/media/recent";
                    break;

                case "mediaByTag":
                    instagramSearchData.object.count = _params.count || 20;
                    instagramSearchData = this.fillDataInObjectByList(instagramSearchData, _params, [
                        'max_tag_id', 'min_tag_id', 'min_timestamp', 'max_timestamp'
                    ]);
                    instagramSearchData.url = this.getApiBaseUrl()+"tags/" + _params.tag + "/media/recent";
                    break;

                case "mediaFromLocationById":
                    instagramSearchData.object.count = _params.count || 40;
                    instagramSearchData = this.fillDataInObjectByList(instagramSearchData, _params, [
                        'max_id', 'min_id', 'min_timestamp', 'max_timestamp'
                    ]);
                    instagramSearchData.url = this.getApiBaseUrl()+"locations/" + _params.locationId + "/media/recent";
                    break;

                case "mediaByCoordinates":
                    instagramSearchData.object.count = _params.count || 20;
                    instagramSearchData = this.fillDataInObjectByList(instagramSearchData, _params, [
                        'lat', 'lng', 'distance', 'min_timestamp', 'max_timestamp'
                    ]);
                    instagramSearchData.url = this.getApiBaseUrl()+"media/search";
                    break;
            }

            return instagramSearchData;
        };
    });