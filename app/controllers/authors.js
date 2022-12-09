import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorsController extends Controller {
    @action
    deleteAuthor(author) {
        author.destroyRecord();
    }
}
