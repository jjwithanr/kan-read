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
});
