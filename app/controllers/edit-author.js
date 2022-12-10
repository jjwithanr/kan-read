import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditAuthorController extends Controller {
    @action
    editAuthor(author, event) {
        event.preventDefault();

        author.save().then(() => {
            this.transitionToRoute('authors')
        });
    }
}
