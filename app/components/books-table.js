import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BooksTableComponent extends Component {
    @tracked query = '';
    
    @action
    deleteBook(book, books, authors) {
        
        authors.forEach(author => {
            if (author.name == book.authorName) {
                author.bookList = "";
                books.forEach(b => {
                    if (b.authorName == book.authorName) {
                        if (b == book) {
                            return;
                        }
                        author.bookList += b.title + ", ";
                    }
                });
                author.bookList = author.bookList.slice(0, -2);
            }
        });

        book.destroyRecord();
    }
}
