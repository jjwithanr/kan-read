import Model, { attr,belongsTo } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class BookModel extends Model {
    @attr('string') title;
    @attr('string', { 
        defaultValue() { return "unread"; }}) status;
    @belongsTo('author') author;

    @tracked isUnread = true;
    @tracked isBeingRead = false;
    @tracked isFinished = false;
}
