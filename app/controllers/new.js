import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class NewController extends Controller {
    @action
    createBook(event) {
        event.preventDefault();

        let authorId = document.getElementById('authorName').value
        let author = this.store.peekRecord('author', authorId);
        if (author.bookList) {
            if (author.bookList.includes(this.title)) {
                alert("A book with this title from this author already exists.");
                return;
            }
            author.bookList = author.bookList + ", " + this.title;
        } else {
            author.bookList = this.title;
        }

        let book = this.store.createRecord('book', {
            title: this.title,
            authorName: author.name,
        });

        book.save().then(() => {
            this.transitionToRoute('book', book.id);
        });
    }
}
