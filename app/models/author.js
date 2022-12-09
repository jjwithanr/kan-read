import Model, { attr,hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
    @attr('string') name;
    @hasMany('book', { inverse: 'author', aynsc: true }) books;
}
