import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | books-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<BooksTable />`);

    assert.dom('label').hasText('Search book title:');
    assert.dom('tr').hasText('Title Author Status');
  });
});
