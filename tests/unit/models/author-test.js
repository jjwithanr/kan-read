import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | author', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('author', {});
    assert.ok(model);
  });

  test('should have books', function(assert) {
    const author = this.owner.lookup('service:store').modelFor('author');

    const relationship = get(author, 'relationshipsByName').get('books');

    assert.equal(relationship.key, 'books', 'has relationship with book');
    assert.equal(
      relationship.kind,
      'hasMany',
      'kind of relationship is hasMany'
    );
  });

  test('it has the right name', function (assert) {
    let store = this.owner.lookup('service:store');
    let author = store.createRecord('author', {
      name: 'Jeremy Chang',
      bookList: 'How To Test Ember JS',
    });

    assert.strictEqual(author.name, 'Jeremy Chang');
    author.name = "Jerry Chong";
    assert.strictEqual(author.name, 'Jerry Chong');
    author.name = "Terry Cheng"
    assert.strictEqual(author.name, 'Terry Cheng');
  });
});
