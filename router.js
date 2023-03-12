var myApp = angular.module("myModule", ["ngRoute"]);
// chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {
  // xoa khoang trang trinh duyet
  $locationProvider.hashPrefix("");
  // $routeProvider : chuyen trang
  $routeProvider
    .when("/facebook", {
      // lam gi thi lam
      // noi dung cua trang chu
      templateUrl: "pages/facebook.html",
      controller: homeController,
    })
    .when("/gioithieu", {
      // lam gi thi lam
      // noi dung cua trang chu
      //   template: "<h1>Noi dung trang contact</h1>",
      //Truyen file HTML
      templateUrl: "pages/gioiThieu.html",
    })
    .otherwise({
      redirectTo: "/trangchu",
    });
});
