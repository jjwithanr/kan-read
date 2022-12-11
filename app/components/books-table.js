import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BooksTableComponent extends Component {
    @tracked query = '';
    
    @action
    deleteBook(book) {
        book.destroyRecord();
    }
}
