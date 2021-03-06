angular.module('ngCordova.plugins.backgroundGeolocation', [])

.factory('$cordovaBackgroundGeolocation', ['$q',
  function ($q) {


    return {

      init: function() {
        window.navigator.geolocation.getCurrentPosition(function(location) {
          return location;
        });
      },

      configure: function(options) {
        
       this.init();

       var q = $q.defer();

       window.plugins.backgroundGeoLocation.configure(
         function (result){
           q.resolve(result);
           window.plugins.backgroundGeoLocation.finish();
         },
         function (err) {
           q.reject(err);
         },options);

       this.start();

       return q.promise;
     },

     start : function () {
       var q = $q.defer();

       window.plugins.backgroundGeoLocation.start(
         function(result){
           q.resolve(result);
         },
         function(err){
           q.reject(err);
         });

       return q.promise;
     },

     stop : function () {
       var q = $q.defer();

       window.plugins.backgroundGeoLocation.stop(
         function (result) {
           q.resolve(result);
         },
         function (err) {
           q.reject(err);
         });

       return q.promise;
     }
   };
 }
 ]);
