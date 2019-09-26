import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('jqui-autocomplete', 'JquiAutocompleteComponent', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // creates the component instance
    await render(hbs`<JquiAutocomplete/>`);
    assert.ok(this.element.querySelector('input').getAttribute('class').includes('ui-autocomplete-input'));
  });
});
