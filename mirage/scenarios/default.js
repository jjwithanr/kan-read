export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  let authorAmount = Math.floor(Math.random() * 10) + 4;
  server.createList('author', authorAmount).forEach(author => {
    let bookAmount = Math.floor(Math.random() * 7) + 2;
    server.createList('book', bookAmount, { authorName: author.name}).forEach(book => {
      if (!author.bookList) {
        author.update({
          bookList: book.title + ", "
        });
      } else {
        author.update({
          bookList: author.bookList + book.title + ", "
        });
      }
      book.update({
        author: author
      });
    });
      author.update({
        bookList: author.bookList.slice(0, -2)
      });

  });
}
