import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | authors-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<AuthorsTable />`);

    assert.dom('label').hasText('Search author name:');
    assert.dom('tr').hasText('Name Books');
  });
});
