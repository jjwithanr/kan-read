import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditController extends Controller {
    @action
    editBook(book, event) {
        event.preventDefault();

        book.save().then(() => {
            this.transitionToRoute('book', book.id)
        });
    }
}
