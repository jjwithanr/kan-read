import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books');
  this.route('book', { path: '/books/:id' });
  this.route('new', {path: '/books/new' });
  this.route('edit', { path: '/books/:id/edit' });
});
