var app=angular.module('starter.controllers', [])



.controller('ChatsCtrl', function($scope,$localStorage,$state, $ionicFilterBar, $ionicSlideBoxDelegate,$window, $ionicGesture,$http,$sce,$ionicPopover,$rootScope, ConnectivityMonitor,$ionicPopup) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.Height = $window.innerHeight-30;
 
$scope.logout=function(){
 
 window.plugins.googleplus.logout(
    function (msg) {
      $scope.userImage=false;
      $scope.userName=false;
      alert(msg); // do something useful instead of alerting
    }
);
}
   $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
      $scope.showPopup = function() {
    $state.go('search');
 }

 $rootScope.urlrecent="http://www.kannadafilmclub.com/";

$scope.recent_categroies=[];
$scope.subcategories=[];
$scope.mainCategories=[];
$scope.subcategories=[];
$http.get($rootScope.urlrecent+"api/get_category_index").then(function(data){
    console.log(data);
    $scope.recent_categroies=data.data.categories;
    $scope.recent_categroies.forEach(function(element,index){
      if(element.parent==0){
 $scope.mainCategories.push(element);
}
            $scope.id=element.id;
             $scope.recent_categroies.forEach(function(element,index){

                  if($scope.id==element.parent){
                    $scope.subcategories.push(element);

                  }          
})

})

  })
$rootScope.places = [{name:'New York'}, {name: 'London'}, {name: 'Milan'}, {name:'Paris'}];
var max=$rootScope.places.length;
$scope.loginUser= function () {
     

     document.addEventListener('deviceready', function()
{ window.plugins.googleplus.login(
    {
      'scopes': 'profile', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '640248712554-tsdu5bke2n8pmcl9557jeoa5ktetteu8.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      $rootScope.user=obj;
      $scope.userName=obj.displayName;
      $scope.userImage=obj.imageUrl; // do something useful instead of alerting
    },
    function (msg) {
      
    }
   ); // your code with window.plugins.googleplus....
}, true);
  };
   $scope.show=function(pro) {
    
   
    if ($scope.isGroupShown(pro)) {

      $scope.shownGroup = pro;
    } else {
      $scope.shownGroup = pro;
    }
    // body...
   }
     $scope.close=function(pro) {
  if ($scope.isGroupShown(pro)) {
       $scope.shownGroup = null;
    } else {
      $scope.shownGroup = pro;
    }
    // body...
 
    // body...
   }
   $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };


  var template = '<ion-popover-view>'+
            ' <ion-list><ion-item href=#/privacy ng-click="closePopover()">PrivacyPolicy</ion-item></ion-list>'+'<ion-list><ion-item href=#/terms ng-click="closePopover()">Terms of Use</ion-item></ion-list>'+'<ion-list><ion-item href=#/about ng-click="closePopover()">About</ion-item></ion-list>'+'<ion-list ng-if="!userData"><ion-item ui-sref="login" ng-click="closePopover()">Sign in</ion-item></ion-list>'+'<ion-list ng-if="userData"><ion-item ui-sref="login">Sign Out</ion-item></ion-list><ion-content></ion-content></ion-popover-view>';

 


  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hidden popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });



$scope.$on('$ionicView.enter',function(e){
    console.log("userData",$localStorage.userData);
    if($localStorage.userData){
      $rootScope.userData=$localStorage.userData;

     
    }
  })
 
  })

/*homepage*/
.controller('chats1Ctrl', function($scope, $ionicSlideBoxDelegate,$window,$http,$sce, $ionicScrollDelegate,$state,$rootScope,$timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
 $scope.Height = $window.innerHeight-30;

   $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
   $scope.postshow=true;
    
   $scope.tiles = ['1','2','3','4'];
   
     
$http.get($rootScope.urlrecent+"api/get_category_posts/?id=48&count=2").then(function(data){
    console.log(data);
    $scope.recent_slide=data.data.posts;
  })
  $scope.recent_posts=[];
  $http.get($rootScope.urlrecent+"api/get_category_posts/?id=52&count=6").then(function(data){
    console.log(data);
    $scope.recent_posts=data.data.posts;
      $scope.postshow=false;
    $scope.recent_posts.forEach(function(element,index,array){
      element.excerpt=element.excerpt.substr(0,100);
      element.excerpt=element.excerpt+"  Read more...";
      element.excerpt=$sce.trustAsHtml(element.excerpt);
    })
})
$http.get($rootScope.urlrecent+"api/get_category_posts/?id=48&count=12").then(function(data){
  console.log(data);
  $scope.recent_others=data.data.posts;
    $scope.recent_others.forEach(function(element,index,array){
      element.excerpt=element.excerpt.substr(0,100);
      element.excerpt=element.excerpt+"  Read more...";
      element.excerpt=$sce.trustAsHtml(element.excerpt);
  
})
    })

$http.get($rootScope.urlrecent+"api/get_category_posts/?id=50&count=6").then(function(data){
  console.log(data);
  $scope.recent_games=data.data.posts;
    $scope.recent_games.forEach(function(element,index,array){
      element.excerpt=element.excerpt.substr(0,100);
      element.excerpt=element.excerpt+"  Read more...";
      element.excerpt=$sce.trustAsHtml(element.excerpt);
  
})
    })
$http.get($rootScope.urlrecent+"api/get_category_posts/?id=56&count=1").then(function(data){
  console.log(data);
  $scope.recent_lol=data.data.posts;
 
    $scope.recent_lol.forEach(function(element,index,array){
      element.excerpt=element.excerpt.substr(0,100);
      element.excerpt=element.excerpt+"   Read more...";
      element.excerpt=$sce.trustAsHtml(element.excerpt);
  
})
    })

$http.get($rootScope.urlrecent+"api/get_category_posts/?id=64&count=5").then(function(data){
  console.log(data);
  $scope.recent_short=data.data.posts;
    })
       $http.get($rootScope.urlrecent+"api/get_category_posts/?id=63&count=6").then(function(data){
           console.log(data);
            $scope.recent_exclusive=data.data.posts;

       })




       /*slider controll*/
       var slidesInSlideshow = 4;
 var slidesTimeIntervalInMs = 3000; 
  
  $scope.slideshow = 1;
  var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);

 
})
/*postdetail*/
.controller('chatDeCtrl', function($scope,$http,$stateParams,$sce,$rootScope,$localStorage,$ionicLoading,$state,$ionicPopup,$ionicModal,$cordovaGooglePlus) {
  $rootScope.$root.Category_id;
  $rootScope.$root.postid;
  $rootScope.$root.cha;
   $scope.postshow=true;
   $scope.recent_posts=[];

   $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };



  document.addEventListener("fullscreenchange", changeHandler, false);
document.addEventListener("webkitfullscreenchange", changeHandler, false);
document.addEventListener("mozfullscreenchange", changeHandler, false);
function changeHandler(e) {
  console.log(e);
  if(e.srcElement==document){
 
  screen.lockOrientation('portrait');

  }
  else{
  screen.lockOrientation('landscape');
 
  }
}
 

  $http.get($rootScope.urlrecent+"api/get_post/?id="+$stateParams.chatId).then(function(data){

    console.log(data);
    $scope.video_exist=false;
     $scope.ipost=data.data.post;
         $scope.imageslide=data.data.post.attachments;
        var contentdata=data.data.post.content;
             
              $scope.imgslide=data.data.post.thumbnail_images.full.url;
        $scope.datacon =contentdata.replace(/<img[^>]*>/g,"");
 
     $scope.video_url=data.data.post.custom_fields.tm_video_url;
       $scope.image=data.data.post.thumbnail_images.full.url;
    
     function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

function MyCtrl($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
}
$scope.myId = getId(''+$scope.video_url+'');




$scope.$on('youtube.player.ready', function($event, player) {
player.playVideo();
});


    $rootScope.$root.postid=data.data.post.id;
    $scope.comment=[];
    $scope.image=data.data.post.thumbnail_images.full.url;
            
             $scope.postshow=true;

   $scope.$on('$ionicView.enter',function(e){
   console.log("userData",$localStorage.userData);
    if($localStorage.userData){
      $rootScope.userData=$localStorage.userData;

    }
  })
   if($localStorage.userData){
   $rootScope.$root.name=$localStorage.userData.data.user.displayname;

   $rootScope.$root.email=$localStorage.userData.data.user.email;
 }
 else{
  $scope.postshow=false;
 }
    $scope.post_title=data.data.post.title;

  
        $rootScope.$root.Category_id=data.data.post.categories[0].id;
        var video_url=data.data.post.custom_fields.tm_video_file;
         $scope.channelid=data.data.post.custom_fields.channel_id;

                        angular.forEach($scope.channelid,function(value,key){
                      


      })

    
    
 $scope.post_content=$sce.trustAsHtml(data.data.post.content);
 $scope.get_comment=data.data.post.comments;
 $scope.get_content=data.data.post.content;

 $scope.url=$sce.trustAsResourceUrl(''+video_url+'');

    

  return $http.get($rootScope.urlrecent+"api/get_category_posts/?id="+$rootScope.$root.Category_id+"&count=12")
}).then(function(data){
  console.log(data);
  $scope.recent_catposts=data.data.posts;

      
    $scope.recent_catposts.forEach(function(element,index,array){
      element.excerpt=element.excerpt.substr(0,100);
      element.excerpt=element.excerpt+"Read more...";
      element.excerpt=$sce.trustAsHtml(element.excerpt);
  

  })

    
     
     $scope.$on('$ionicView.enter',function(e){
   console.log("userData",$localStorage.userData);
    if($localStorage.userData){
      $rootScope.userData=$localStorage.userData;

    }


  
  }) 
     

})
       
       
  })

.controller('profCtrl',function($scope){
 

})

/*latest page*/
.controller('latCtrl',function($scope,$http,$sce){
  $scope.recent_posts=[];
 
    $scope.postshow=true;
  $http.get($rootScope.urlrecent+"api/get_recent_posts/").then(function(data){
    console.log(data);
    $scope.recent_posts=data.data.posts;
 
  

       $scope.postshow=false;
    
    $scope.recent_posts.forEach(function(element,index,array){
      element.excerpt=element.excerpt.substr(0,60);
      element.excerpt=element.excerpt+"Read more...";
      element.excerpt=$sce.trustAsHtml(element.excerpt);
    })
})

})



.controller('seaCtrl',function($scope,$http){
   $scope.postshow=true;

$http.get($rootScope.urlrecent+"api/dmskills/get_search/").then(function(data){
    console.log(data);
      $scope.postshow=false;
  
          $scope.recent_search=data.data.likes;
                     
     })  
    
})

/*post detail*/
  .controller('chatImgCtrl', function($scope,$http,$stateParams,$sce,$rootScope,$localStorage,$ionicLoading,$state,$ionicPopup,$ionicModal) {
  $rootScope.$root.Category_id;
  $rootScope.$root.postid;
  $rootScope.$root.cha;
   $scope.postshow=true;
   $scope.recent_posts=[];

 $scope.share = function() {
        $cordovaSocialSharing.share("spectra", "Share", $rootScope.urlrecent);
    }
   $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };
  function changeHandler(e) {
    alert('hello');
   // Mode has changed.
}
    
 
  
     

  $http.get($rootScope.urlrecent+"api/get_post/?id="+$stateParams.chatId).then(function(data){

    console.log(data);
   
     $scope.ipost=data.data.post;
      $scope.content=data.data.post.content;
      $scope.datacon=$sce.trustAsHtml($scope.content);

     $scope.img=data.data.post.thumbnail_images.full.url;

  
     function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

var myId = getId(''+video_url+'');


$scope.myCode = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
    + myId + '" frameborder="0" allowfullscreen></iframe>';
angular.element(document).ready( function() {
    //var drtab = new Royal_Tab($('.dailyrpts_tabs.royal_tab'));
    $scope.$apply(function() {
      $scope.content = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+ myId );
    });
  });


    $rootScope.$root.postid=data.data.post.id;
    $scope.comment=[];
    $scope.image=data.data.post.thumbnail_images.full.url;
             $scope.postshow=true;
   $scope.$on('$ionicView.enter',function(e){
   console.log("userData",$localStorage.userData);
    if($localStorage.userData){
      $rootScope.userData=$localStorage.userData;

    }
  })
   if($localStorage.userData){
   $rootScope.$root.name=$localStorage.userData.data.user.displayname;

   $rootScope.$root.email=$localStorage.userData.data.user.email;
 }
 else{
  $scope.postshow=false;
 }
    $scope.post_title=data.data.post.title;
        $rootScope.$root.Category_id=data.data.post.categories[0].id;
        var video_url=data.data.post.custom_fields.tm_video_file;
         $scope.channelid=data.data.post.custom_fields.channel_id;
                        angular.forEach($scope.channelid,function(value,key){
      })
 $scope.post_content=$sce.trustAsHtml(data.data.post.content);
 $scope.get_comment=data.data.post.comments;
 $scope.get_content=data.data.post.content;

 $scope.url=$sce.trustAsResourceUrl(''+video_url+'');
  return $http.get($rootScope.urlrecent+"api/get_category_posts/?id="+$rootScope.$root.Category_id+"&count=12")
}).then(function(data){
  console.log(data);
  $scope.recent_catposts=data.data.posts;
    $scope.recent_catposts.forEach(function(element,index,array){
      element.excerpt=element.excerpt.substr(0,100);
      element.excerpt=element.excerpt+"Read more...";
      element.excerpt=$sce.trustAsHtml(element.excerpt);
  })

    
     
  


 })


       
       
  })





  
.controller('loginCtrl',function($scope, $cordovaGooglePlus,$cordovaOauth){
     $scope.data={};
     $scope.$on('$ionicView.enter',function(e){
   console.log("userData",$localStorage.userData);
    if($localStorage.userData){
      $rootScope.userData=$localStorage.userData;

     
    }


  })



   
   $scope.login=function(){
   document.addEventListener('deviceready', function()
{ window.plugins.googleplus.login(
    {
      'scopes': 'profile', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '640248712554-tsdu5bke2n8pmcl9557jeoa5ktetteu8.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      $rootScope.user=obj;
      $scope.userName=obj.displayName;
      $scope.userImage=obj.imageUrl; // do something useful instead of alerting
    },
    function (msg) {
      alert('error: ' + msg);
    }
   ); // your code with window.plugins.googleplus....
}, true);
}

$scope.logout=function(){
 
 window.plugins.googleplus.logout(
    function (msg) {
      $scope.userImage=false;
      $scope.userName=false;
      alert(msg); // do something useful instead of alerting
    }
);
}




})

.controller('regCtrl',function($scope,$http,$rootScope,$ionicPopup,$localStorage){
    $http.get($rootScope.urlrecent+"api/get_nonce/?controller=user&method=register&insecure=cool").then(function(data){
    console.log(data);
    
    $rootScope.get_nounce=data.data.nonce;

    


     

              
             
             })  
            
    $scope.data={};
  $scope.login = function () {
  
    $http.get($rootScope.urlrecent+"api/user/register/?username="+$scope.data.membershipNo+"&email="+$scope.data.password+"&nonce="+$rootScope.get_nounce+"&display_name="+$scope.data.name+"&insecure=cool&notify=yes").then(function(data){
      console.log(data);
      var myPopup = $ionicPopup.show({
  
    title: 'Registration Successful Please Login (Password sent to mail)',

  
    scope: $scope,
    buttons: [
     
      {
        text: '<b>Ok</b>',
        type: 'button-positive',
        onTap: function(e) {
          $state.go('login');
        
          }
        
      }
    ]
  });
      $scope.get_cookie=data.data.cookie;
      $scope.get_userid=data.data.user_id;
    }).catch(function(data){
       var myPopup = $ionicPopup.show({
  
    title: 'User already exists',
  
    scope: $scope,
    buttons: [
     
      {
        text: '<b>Ok</b>',
        type: 'button-positive',
        onTap: function(e) {
        
          }
        
      }
    ]
  });


    })
         
  }
     
          

 $scope.check=function(email){
          var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!regex.test(email))
          {
           var myPopup = $ionicPopup.show({
  
    title: 'wrong email id',

  
    scope: $scope,
    buttons: [
     
      {
        text: '<b>Ok</b>',
        type: 'button-positive',
        onTap: function(e) {
          
        
          }
        
      }
    ]
  });
            }
          }


})
.controller('forCtrl',function($scope,$http,$ionicPopup,$state){

 $scope.data={};
  $scope.submit=function(){
    alert('hello');
    $http.get($rootScope.urlrecent+"api/dmskills/retrieve_password/?user_login="+$scope.data.userdetail).then(function(data){
    console.log(data);
    if(data.data==true){
      var myPopup = $ionicPopup.show({
  
    title: 'Password Reset Link sent to mail',

  
    scope: $scope,
    buttons: [
     
      {
        text: '<b>Ok</b>',
        type: 'button-positive',
        onTap: function(e) {
          $state.go('login');
        
          }
        
      }
    ]
  });

    }
    else{
       var myPopup = $ionicPopup.show({
  
    title: 'Invalid Username or Email',

  
    scope: $scope,
    buttons: [
     
      {
        text: '<b>Ok</b>',
        type: 'button-positive',
        onTap: function(e) {
        
        
          }
        
      }
    ]
  });


    }
  })
  }
})






.controller('priCtrl',function($scope){

})

.controller('aboutCtrl',function($scope){

})
.controller('termsCtrl',function($scope){

})

.controller('cateCtrl',function($scope,$http,$rootScope,$stateParams){
  $scope.postshow=false;
  $http.get($rootScope.urlrecent+"api/get_category_posts/?id="+$stateParams.cateId).then(function(data){
  console.log($stateParams.cateId);
$scope.offset=2;
  console.log(data);
  $scope.recent_cate=data.data.posts;
  $scope.pages=data.data.pages;
  $scope.title=data.data.category.title;
  console.log($scope.pages);
  $scope.postshow=true;
 })
 $scope.offset=2;
    $scope.canLoadMore=true;
      $scope.loadMore=function(){
   $scope.canLoadMore=true;
      
     if($scope.offset<=$scope.pages){
       
      
      $http.get($rootScope.urlrecent+"api/get_category_posts/?id="+$stateParams.cateId+"&count=10&status=publish&page="+$scope.offset).then(function(data){
  console.log($stateParams.cateId);
  var newposts=data.data.posts;
$scope.recent_cate.push.apply($scope.recent_cate,newposts);
  console.log(data);
   $scope.offset++;
   console.log($scope.offset);
$scope.$broadcast('scroll.infiniteScrollComplete');
  
})
    }
    else{
       $scope.canLoadMore=false;
    }



      }

})



.factory('ConnectivityMonitor', function($rootScope, $cordovaNetwork){
 
  return {
    isOnline: function(){
      if(ionic.Platform.isWebView()){
        return $cordovaNetwork.isOnline();    
      } else {
        return navigator.onLine;
      }
    },
    isOffline: function(){
      if(ionic.Platform.isWebView()){
        return !$cordovaNetwork.isOnline();    
      } else {
        return !navigator.onLine;
      }
    },
    startWatching: function(){
        if(ionic.Platform.isWebView()){
 
          $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            console.log("went online");
          });
 
          $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
            console.log("went offline");
          });
 
        }
        else {
 
          window.addEventListener("online", function(e) {
            console.log("went online");
          }, false);    
 
          window.addEventListener("offline", function(e) {
            console.log("went offline");
          }, false);  
        }       
    }
  }
})