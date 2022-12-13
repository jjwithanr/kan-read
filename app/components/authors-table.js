import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthorsTableComponent extends Component {
    @tracked query = '';
    
    @action
    deleteAuthor(author, books) {
        books.forEach(book => {
            if (author.name == book.authorName) {
                book.destroyRecord();
            }
        });
        author.destroyRecord();
    }
}
