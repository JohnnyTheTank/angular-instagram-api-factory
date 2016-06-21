**angular-instagram-api-factory** is an angularjs module with a instagram api factory.

[![npm version](https://badge.fury.io/js/angular-instagram-api-factory.png)](https://badge.fury.io/js/angular-instagram-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-instagram-api-factory.png)](https://badge.fury.io/bo/angular-instagram-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

:warning: **This use case is not supported anymore. On June 1, 2016 Instagram changed the permissions and all apps moved automatically to Sandbox Mode if they were not approved through the [review process](https://www.instagram.com/developer/review/).**


## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-instagram-api-factory`
    2. `npm install --save angular-instagram-api-factory`
    3. download [angular-instagram-api-factory.zip](https://github.com/JohnnyTheTank/angular-instagram-api-factory/zipball/master)
2. Add `jtt_instagram` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-instagram-api-factory/dist/angular-instagram-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-instagram-api-factory/dist/angular-instagram-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-instagram-api-factory.min.js"></script>
    ```
4. Use the factory `instagramFactory`


### factory methods

#### getMedia


```js
instagramFactory.getMediaFromUserById({
    userId: "<USER_ID>",
    count: "<COUNT>", // (optional) valid values: 1-33 | default: 20
    min_id: "<MIN_ID>", // (optional)
    max_id: "<MAX_ID>", // (optional)
    min_timestamp: "<MIN_TIMESTAMP>", // (optional)
    max_timestamp: "<MAX_TIMESTAMP>", // (optional)
    access_token: "<YOUR_ACCESS_TOKEN>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
instagramFactory.getMediaByTag({
    tag: "<TAG>",
    count: "<COUNT>", // (optional) valid values: 1-33 | default: 20
    min_tag_id: "<MIN_TAG_ID>", // (optional)
    max_tag_id: "<MAX_TAG_ID>", // (optional)
    min_timestamp: "<MIN_TIMESTAMP>", // (optional)
    max_timestamp: "<MAX_TIMESTAMP>", // (optional)
    access_token: "<YOUR_ACCESS_TOKEN>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
instagramFactory.getMediaFromLocationById({
    locationId: "<LOCATION_ID>",
    count: "<COUNT>", // (optional) valid values: 1-33 | default: 20
    min_id: "<MIN_ID>", // (optional)
    max_id: "<MAX_ID>", // (optional)
    min_timestamp: "<MIN_TIMESTAMP>", // (optional)
    max_timestamp: "<MAX_TIMESTAMP>", // (optional)
    access_token: "<YOUR_ACCESS_TOKEN>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
instagramFactory.getMediaByCoordinates({
    lat: "<LAT>",
    lng: "<LNG>",
    distance: "<DISTANCE>", // (optional) in meters, default: 1000
    count: "<COUNT>", // (optional) valid values: 1-33 | default: 20 (this parameter maybe don't work correct)
    min_timestamp: "<MIN_TIMESTAMP>", // (optional)
    max_timestamp: "<MAX_TIMESTAMP>", // (optional)
    access_token: "<YOUR_ACCESS_TOKEN>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getUser
```js
instagramFactory.getUserById({
    userId: "<USER_ID>",
    access_token: "<YOUR_ACCESS_TOKEN>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```


## Instagram JSONP API

* Docs: https://instagram.com/developer/endpoints/
* Api Console: https://apigee.com/console/instagram
* Username Converter: http://jelled.com/instagram/lookup-user-id

## More angular-api-factories
[bandsintown](https://github.com/JohnnyTheTank/angular-bandsintown-api-factory) - [dailymotion](https://github.com/JohnnyTheTank/angular-dailymotion-api-factory) - [facebook](https://github.com/JohnnyTheTank/angular-facebook-api-factory) - [flickr](https://github.com/JohnnyTheTank/angular-flickr-api-factory) - [footballdata](https://github.com/JohnnyTheTank/angular-footballdata-api-factory) - [github](https://github.com/JohnnyTheTank/angular-github-api-factory) - [openweathermap](https://github.com/JohnnyTheTank/angular-openweathermap-api-factory) - [tumblr](https://github.com/JohnnyTheTank/angular-tumblr-api-factory) - [vimeo](https://github.com/JohnnyTheTank/angular-vimeo-api-factory) - [wikipedia](https://github.com/JohnnyTheTank/angular-wikipedia-api-factory) - [youtube](https://github.com/JohnnyTheTank/angular-youtube-api-factory)

## License

MIT