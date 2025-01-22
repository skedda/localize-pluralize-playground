import { module, test } from 'qunit';
import { setupTest } from 'localize-test/tests/helpers';

module('Unit | Route | loctest', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:loctest');
    assert.ok(route);
  });
});
