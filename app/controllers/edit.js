import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditController extends Controller {
    @action
    editBook(book, event) {
        event.preventDefault();

        let newStatus = document.getElementById('status').value;

        book.status = newStatus;

        book.save().then(() => {
            this.transitionToRoute('book', book.id)
        });
    }
}
