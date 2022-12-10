import Route from '@ember/routing/route';

export default class EditAuthorRoute extends Route {
    model(params) {
        return this.store.findRecord('author', params.id);
    }
}
