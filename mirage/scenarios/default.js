export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList('author', 5).forEach(author => {
    server.createList('book', 2, { authorName: author.name}).forEach(book => {
      if (!author.bookList) {
        author.update({
          bookList: book.title + ", "
        });
      } else {
        author.update({
          bookList: author.bookList + book.title + ", "
        });
      }
    });
    
    if (author.bookList) {
      author.update({
        bookList: author.bookList.slice(0, -2)
      });
    }

  });
}
