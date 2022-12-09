import Route from '@ember/routing/route';

export default class NewAuthorRoute extends Route {
    setupController(controller, model) {
        controller.set('name', '');
    }
}
