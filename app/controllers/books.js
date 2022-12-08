import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BooksController extends Controller {
    @action
    deleteBook(book) {
        book.destroyRecord();
    }
}
