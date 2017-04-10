// import dependencies
import app from 'app'; // reference to angular.module('app', ['ui.router'])
import templateUrl from './home.html';
import './home.scss';

// Controller for angular component
function HomeCtrl() {
  const Home = this;

  Home.target = 'World';
}

// define component
app.component('home', {
  templateUrl: templateUrl,
  controller: HomeCtrl,
  controllerAs: 'Home'
});

// export component name
export default 'home';
