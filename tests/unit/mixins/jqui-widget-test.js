import EmberObject from '@ember/object';
import {module, test} from 'qunit';
import JquiWidgetMixin from 'ember-cli-jquery-ui/mixins/jqui-widget';

module('JquiWidgetMixin');

test('it works', function(assert) {
  // eslint-disable-next-line ember/no-new-mixins
  var JquiWidgetObject = EmberObject.extend(JquiWidgetMixin);
  var subject = JquiWidgetObject.create();
  assert.ok(subject);
});

test('gathers options', function(assert) {
  // eslint-disable-next-line ember/no-new-mixins
  var JquiWidgetObject = EmberObject.extend(JquiWidgetMixin, {
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    uiOptions: ['option1', 'option2']
  });
  var subject = JquiWidgetObject.create();
  var options = subject._gatherOptions();
  assert.ok('option1' in options);
  assert.ok('option2' in options);
});
