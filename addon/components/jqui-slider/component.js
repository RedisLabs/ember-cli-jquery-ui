import Component from '@ember/component';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Component.extend(jquiWidget, {
  init() {
    this._super(...arguments);

    this.uiType = 'slider';
    this.uiOptions = ['animate', 'disabled', 'max', 'min', 'orientation', 'range', 'step', 'value', 'values'];
    this.uiEvents = ['change', 'create', 'slide', 'start', 'stop'];
    this.uiActions = {
      slide: function (event, ui) {
        this.set('value', ui.value);
        this.set('values', ui.values);
      }
    }
  }
});
