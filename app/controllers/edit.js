import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditController extends Controller {
    @action
    editBook(book, event) {
        event.preventDefault();

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
