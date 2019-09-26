import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('jqui-button', 'JquiButtonComponent', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // creates the component instance
    await render(hbs`<JquiButton/>`);
    assert.ok(this.element.querySelector('button').getAttribute('class').includes('ui-button'));
  });
});
