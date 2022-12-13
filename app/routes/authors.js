import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AuthorsRoute extends Route {
    model() {
        return hash({
            authors: this.store.findAll('author'),
            books: this.store.findAll('book')
        });
    }
}
