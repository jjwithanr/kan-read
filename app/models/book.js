import Model, { attr,belongsTo } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class BookModel extends Model {
    @attr('string') title;
    @attr('string', { 
        defaultValue() { return "unread"; }}) status;
    @attr('string') authorName;
    @belongsTo('author') author;

    get isUnread() {
        return this.status == 'unread';
    }

    get isBeingRead() {
        return this.status == 'reading';
    }

    get isFinished() {
        return this.status =='finished';
    }

}
