import { module, test } from 'qunit';
import { setupRenderingTest } from 'localize-test/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | plural-test', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PluralTest />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PluralTest>
        template block text
      </PluralTest>
    `);

    assert.dom().hasText('template block text');
  });
});
