export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/books');
  this.post('/books');
  this.get('/books/:id');
  this.patch('/books/:id');
  this.del('/books/:id');

  this.get('/authors');
  this.post('/authors');
  this.get('/authors/:id');
  this.patch('/authors/:id');
  this.del('/authors/:id');
}
