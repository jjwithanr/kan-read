import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditAuthorController extends Controller {
    @action
    editAuthor(author, books, event) {
        event.preventDefault();

        let booksList = author.bookList.split(", ");
        for (let i = 0; i < booksList.length; i++) {
            books.forEach(book => {
                if (book.title == booksList[i]) {
                    book.authorName = author.name;
                }
            });
        }

        author.save().then(() => {
            this.transitionToRoute('authors')
        });
    }
}
