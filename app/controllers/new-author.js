import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class NewAuthorController extends Controller {
    @action
    createAuthor(event) {
        event.preventDefault();

        let alreadyExists = 0;
        this.store.peekAll('author').forEach((a) => {
            if (a.name == this.name.trim()) {
                alert("An author with this name already exists.");
                alreadyExists = 1;
                return;
            }
        });
        if (alreadyExists) {
            return;
        }

        let author = this.store.createRecord('author', {
            name: this.name,
        });

        author.save().then(() => {
            this.transitionToRoute('authors');
        });
    }
}
