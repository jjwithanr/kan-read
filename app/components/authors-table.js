import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthorsTableComponent extends Component {
    @tracked query = '';
    
    @action
    deleteAuthor(author) {
        author.destroyRecord();
    }
}
