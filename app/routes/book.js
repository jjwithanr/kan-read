import Route from '@ember/routing/route';

export default class BookRoute extends Route {
    model(params) {
        return this.store.findRecord('book', params.id);
    }
}
