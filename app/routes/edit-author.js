import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class EditAuthorRoute extends Route {
    model(params) {
        return hash({
            author: this.store.findRecord('author',  params.id),
            authors: this.store.findAll('author'),
            books: this.store.findAll('book')
        });
    }
}
