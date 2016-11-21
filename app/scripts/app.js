'use strict';

/**
 * @ngdoc overview
 * @name positioningSystemWebApp
 * @description
 * # positioningSystemWebApp
 *
 * Main module of the application.
 */
angular
  .module('positioningSystemWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng',
    'googlechart',
    'flow',
    'positioningSystemWebApp.controllers',
    'positioningSystemWebApp.directives',
    'positioningSystemWebApp.filters',
    'positioningSystemWebApp.services',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl', controllerAs: 'main'})
      .when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl', controllerAs: 'about'})
      .when('/',                                          { templateUrl: 'views/landpage/index.html', controller: 'IndexController', title: 'Home' })
      .when('/admin',                                     { templateUrl: 'views/admin/index.html', controller: 'IndexController', title: 'Admin' })
      .when('/statistics',                                { templateUrl: 'views/statistics.html', controller: 'IndexController', title: 'Statistics' })
      .when('/inbox',                                     { templateUrl: 'views/inbox.html', controller: 'MessagesController', title: 'Inbox' })
      .when('/status',                                    { templateUrl: 'views/status.html', controller: 'IndexController', title: 'Status' })
      .when('/contacts',                                  { templateUrl: 'views/contacts/contacts.html', controller: 'ContactsController', title: 'Contacts' })
      .when('/contacts/add',                              { templateUrl: 'views/contacts/contacts-add.html', controller: 'ContactsController', title: 'Contacts - Add' })
      .when('/contacts/requests',                         { templateUrl: 'views/contacts/contacts-requests.html', controller: 'ContactsController', title: 'Contacts - Requests' })
      .when('/profile',                                   { templateUrl: 'views/profile.html', controller: 'IndexController', title: 'Profile' })
      .when('/settings',                                  { templateUrl: 'views/settings.html', controller: 'IndexController', title: 'Settings' })
      .when('/about',                                     { templateUrl: 'views/landpage/about.html', controller: 'IndexController', title: 'About' })
      .when('/treeview/:projectId',                       { templateUrl: 'views/treeview.html', controller: 'TreeViewController', title: 'TreeView' })
      .when('/partners',                                  { templateUrl: 'views/partners/partners.html', controller: 'PartnersController', title: 'Partners' })
      .when('/partner/create',                            { templateUrl: 'views/partners/partner-create.html', controller: 'PartnersController', title: 'Create Partner' })
      .when('/partner/edit/:partnerId',                   { templateUrl: 'views/partners/partner-edit.html', controller: 'PartnersController', title: 'Edit Partner' })
      .when('/partner/view/:partnerId',                   { templateUrl: 'views/partners/partner-view.html', controller: 'PartnersController', title: 'View Partner' })
      .when('/projects',                                  { templateUrl: 'views/projects/projects.html', controller: 'ProjectsController', title: 'My Projects' })
      .when('/projects/others',                           { templateUrl: 'views/projects/projects-others.html', controller: 'ProjectsController', title: 'Projects' })
      .when('/project/timeline/:projectId',               { templateUrl: 'views/projects/project-timeline.html', controller: 'IndexController', title: 'Project Timeline' })
      .when('/project/other/view/:id',                    { templateUrl: 'views/projects/others/others-view.html', controller: 'ProjectsController', title: 'View Project' })
      .when('/project/other/edit/:id',                    { templateUrl: 'views/projects/others/others-edit.html', controller: 'ProjectsController', title: 'Edit Project' })
      .when('/project/create',                            { templateUrl: 'views/projects/project-create.html', controller: 'ProjectsController', title: 'Create Project' })
      .when('/project/edit/:projectId',                   { templateUrl: 'views/projects/project-edit.html', controller: 'ProjectsController', title: 'Edit Project' })
      .when('/project/view/:projectId',                   { templateUrl: 'views/projects/project-view.html', controller: 'ProjectsController', title: 'View Project' })
      .when('/project/statistics/:projectId',             { templateUrl: 'views/projects/project-statistics.html', controller: 'ProjectsController', title: 'View Project' })
      .when('/project/users/:projectId',                         { templateUrl: 'views/projects/project-users.html', controller: 'ProjectsController', title: 'View Project' })
      .when('/project/invite/:projectId',                 { templateUrl: 'views/projects/project-invite.html', controller: 'ProjectsController', title: 'View Project' })
      .when('/project/snapshots/:projectId',                         { templateUrl: 'views/projects/project-snapshots.html', controller: 'ProjectsController', title: 'View Project Snapshots' })
      .when('/project/snapshots/take/:projectId',                    { templateUrl: 'views/projects/project-snapshots-take.html', controller: 'ProjectsController', title: 'View Project Snapshots' })
      .when('/project/snapshot/view/:projectId/:snapshotId',  { templateUrl: 'views/projects/project-snapshots-view.html', controller: 'ProjectsController', title: 'View Project Snapshots' })
      .when('/messages/send/:contactId',                  { templateUrl: 'views/messages/send.html', controller: 'MessagesController', title: 'Send Message' })
      .when('/messages/view/:messageId',                  { templateUrl: 'views/messages/view.html', controller: 'MessagesController', title: 'View Message' })
      .when('/family/timeline/:familyId',                 { templateUrl: 'views/projects/families/family-timeline.html', controller: 'IndexController', title: 'Family Timeline' })
      .when('/family/create/:projectId',                   { templateUrl: 'views/projects/families/family-create.html', controller: 'FamiliesController', title: 'Create Family' })
      .when('/family/edit/:projectId/:familyId',          { templateUrl: 'views/projects/families/family-edit.html', controller: 'FamiliesController', title: 'Edit Family' })
      .when('/family/other/view/:familyId',               { templateUrl: 'views/projects/others/families/other-family-view.html', controller: 'FamiliesController', title: 'View Family' })
      .when('/family/other/create/:projectId',            { templateUrl: 'views/projects/families/family-create.html', controller: 'FamiliesController', title: 'Create Family' })
      .when('/family/other/edit/:projectId/:familyId',    { templateUrl: 'views/projects/families/family-edit.html', controller: 'FamiliesController', title: 'Edit Family' })
      .when('/family/view/:familyId',                     { templateUrl: 'views/projects/families/family-view.html', controller: 'FamiliesController', title: 'View Family' })
      .when('/subfamily/timeline/:subfamilyId',           { templateUrl: 'views/projects/subfamilies/subfamily-timeline.html', controller: 'IndexController', title: 'SubFamily Timeline' })
      .when('/subfamily/create/:familyId',             { templateUrl: 'views/projects/subfamilies/subfamily-create.html', controller: 'SubFamiliesController', title: 'Create SubFamily' })
      .when('/subfamily/edit/:familyId/:subfamilyId',     { templateUrl: 'views/projects/subfamilies/subfamily-edit.html', controller: 'SubFamiliesController', title: 'Edit SubFamily' })
      .when('/subfamily/view/:subfamilyId',               { templateUrl: 'views/projects/subfamilies/subfamily-view.html', controller: 'SubFamiliesController', title: 'View Family' })
      .when('/product/create/:subfamilyId',                 { templateUrl: 'views/projects/products/product-create.html', controller: 'ProductsController', title: 'Create Product' })
      .when('/product/edit/:subfamilyId/:productId',      { templateUrl: 'views/projects/products/product-edit.html', controller: 'ProductsController', title: 'Edit product' })
      .when('/product/view/:productId',                   { templateUrl: 'views/projects/products/product-view.html', controller: 'ProductsController', title: 'View Product' })
      .when('/products/finished',                         { templateUrl: 'views/projects/products/products-finished.html', controller: 'ProductsController', title: 'View Product' })
      .when('/products/started',                          { templateUrl: 'views/projects/products/products-started.html', controller: 'ProductsController', title: 'View Product' })
      .when('/products/notstarted',                       { templateUrl: 'views/projects/products/products-notstarted.html', controller: 'ProductsController', title: 'View Product' })
      .otherwise({redirectTo: '/'});
  })

  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/' && !$rootScope.globals.currentUser) {
                $location.path('/');
            }
            if ($location.path() == '/' && $rootScope.globals.currentUser) {
              $location.path('/admin');
            }
        });
    }]);
