angular.module('named-views.quotation', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.quotation', {
        url: 'quotation',
        views: {
          'content@': {
            templateUrl: 'quotation.html'
          }
        }
      }
    )
  })
;
