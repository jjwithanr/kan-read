import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, visit, currentURL } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<NavBar />`);

    assert.dom('h1').hasText('KanRead');

    assert.dom('.nav a.list-link').hasText('Books');
  });
});
