import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('jqui-tabs', 'JquiTabsComponent', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // creates the component instance
    await render(hbs`<JquiTabs/>`);
    assert.ok(this.element.querySelector('div').getAttribute('class').includes('ui-tabs'));
  });
});
