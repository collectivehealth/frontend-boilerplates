import app from 'app';
import Home from './components/home/home';

app.config(['$stateProvider','$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/');

  $stateProvider.state('home', {
    url:'/',
    views: {
     '@': {
        component: Home
      }
    }

  });
}]);
