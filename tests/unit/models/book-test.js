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
});
