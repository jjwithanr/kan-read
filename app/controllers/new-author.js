import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class NewAuthorController extends Controller {
    @action
    createAuthor(event) {
        event.preventDefault();

        let author = this.store.createRecord('author', {
            name: this.name,
        });

        author.save().then(() => {
            this.transitionToRoute('authors');
        });
    }
}
