import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorsTableShowMoreBooksComponent extends Component {
    @tracked showLess = true;

    @action toggleShow() {
        this.showLess = !this.showLess;
    }
}
