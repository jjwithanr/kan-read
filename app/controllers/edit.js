import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditController extends Controller {
    @action
    editBook(book, books, authors, event) {
        event.preventDefault();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

        authors.forEach(author => {
            if (author.name == book.authorName) {
                author.bookList = "";
                books.forEach(b => {
                    if (b.authorName == book.authorName) {
                        author.bookList += b.title + ", ";
                    }
                });
            }
        });

        let newStatus = document.getElementById('status').value;
        if (newStatus != book.status) {
            book.status = newStatus;
            book.save().then(() => {
                this.transitionToRoute('');
            });
        }
        else {
            book.save().then(() => {
                this.transitionToRoute('book', book.id)
            });
        }

    }
}
