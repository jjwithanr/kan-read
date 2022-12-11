import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditController extends Controller {
    @action
    editBook(book, event) {
        event.preventDefault();

        let newStatus = document.getElementById('status').value;
        
        if (newStatus != book.status) {

            if (newStatus == 'unread') {
                book.isUnread = true;
                book.isBeingRead = false;
                book.isFinished = false;
            } else if (newStatus == 'reading') {
                book.isUnread = false;
                book.isBeingRead = true;
                book.isFinished = false;
            } else {
                book.isUnread = false;
                book.isBeingRead = false;
                book.isFinished = true;
            }
    
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
