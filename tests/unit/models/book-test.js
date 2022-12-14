import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | book', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('book', {});
    assert.ok(model);
  });

  test('should be written by an author', function(assert) {
    const book = this.owner.lookup('service:store').modelFor('book');

    const relationship = get(book, 'relationshipsByName').get('author');

    assert.equal(relationship.key, 'author', 'has relationship with author');
    assert.equal(
      relationship.kind,
      'belongsTo',
      'kind of relationship is belongsTo'
    );
  });

  test('it has the right title', function (assert) {
    let store = this.owner.lookup('service:store');
    let book = store.createRecord('book', {
      title: 'How To Test Ember JS',
      authorName: 'Jeremy Chang',
      status: 'reading',
    });

    assert.strictEqual(book.title, 'How To Test Ember JS');
    book.title = "Something Else";
    assert.strictEqual(book.title, 'Something Else');
    book.title = "Last Thing"
    assert.strictEqual(book.title, 'Last Thing');
  });
});
