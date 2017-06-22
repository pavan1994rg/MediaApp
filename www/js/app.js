// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngStorage','jett.ionic.filter.bar','youtube-embed','ngCordova','ionic.native','ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	document.addEventListener("deviceready", function onDeviceReady(w) {
    // Should work on Andriod
    if(StatusBar && statusbarTransparent) {
        // Enable translucent statusbar
        statusbarTransparent.enable();

        // Get the bar back
        StatusBar.show();
    }
    // iOS only
    else if (StatusBar) {
        // Get the bar back
        StatusBar.show();
    }
}, false);
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


 .state('app',{
    url:'/app',
    templateUrl:'templates/menu.html',
    controller:'ChatsCtrl',
     abstract: true
  })

  .state('app.chats', {
      url: '/chats',
      views: {      
    'menuContent': {
        templateUrl: 'templates/chats.html',
        controller: 'chats1Ctrl'
      }
      }
 })
      .state('app.chatDetail',{
        url:'/chatDet/:chatId',
        views: {      
    'menuContent': {
        templateUrl:'templates/chatDet.html',
        controller:'chatDeCtrl'
      }
    }
      })
      .state('app.chatImage',{
        url:'/chatImg/:chatId',
        templateUrl:'templates/chatImg.html',
        controller:'chatImgCtrl'
      })

      .state('app.latest',{
        url:'/latest',
         'menuContent': {
        templateUrl:'templates/latest.html',
        controller:'latCtrl'
      }

      })

      .state('app.search',{
        url:'/search',
        templateUrl:'templates/search.html',
        controller:'seaCtrl'
      })

      .state('app.login',{
          views: {      
    'menuContent': {
        url:'/login',
        templateUrl:'templates/profile.html',
        controller:'loginCtrl'
      }
    }

      })
      .state('app.register',{

        url:'/register',
         views: {      
    'menuContent': {
        templateUrl:'templates/register.html',
        controller:'regCtrl'
      }
    }
      })
      .state('app.forgot',{
        url:'/forgot',
         'menuContent': {
        templateUrl:'templates/forgot.html',
        controller:'forCtrl'
      }
      })
       .state('app.privacy',{
        url:'/privacy',
        views: {      
    'menuContent': {
        templateUrl:'templates/privacy.html',
        controller:'priCtrl'
      }
    }
      })
     
       .state('app.about',{
         views: {      
    'menuContent': {
        url:'/about',
        templateUrl:'templates/about.html',
        controller:'aboutCtrl'
      }
    }
      })
   .state('app.terms',{
          url:'/terms',
            views: {      
    'menuContent': {
        templateUrl:'templates/contact.html',
        controller:'termsCtrl'
      }
    }
      })
     .state('app.categories',{
          url:'/categories/:cateId',
            views: {      
    'menuContent': {
        templateUrl:'templates/categories.html',
        controller:'cateCtrl'
      }
    }
      });
   
   
   
 
  $urlRouterProvider.otherwise('/app/chats');

});

