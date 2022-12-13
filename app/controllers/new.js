import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class NewController extends Controller {
    @action
    createBook(event) {
        event.preventDefault();

        let book = this.store.createRecord('book', {
            title: this.title,
            author: this.authorName
        });

        book.save().then(() => {
            this.transitionToRoute('book', book.id);
        });
    }
}
