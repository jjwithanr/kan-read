export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList('author', 5).forEach(author => {
    server.createList('book', 3, { author });
  });
}
