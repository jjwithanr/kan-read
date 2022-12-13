import Route from '@ember/routing/route';
import { hash } from 'rsvp';


export default class EditRoute extends Route {
    model(params) {
        return hash({
            book: this.store.findRecord('book',  params.id),
            books: this.store.findAll('book'),
            authors: this.store.findAll('author')
        });
    }
}
