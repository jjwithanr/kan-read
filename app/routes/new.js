import Route from '@ember/routing/route';

export default class NewRoute extends Route {
    setupController(controller, model) {
        controller.set('title', '');
        controller.set('author', '');
    }
}
