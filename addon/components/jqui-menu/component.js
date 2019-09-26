import Component from '@ember/component';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Component.extend(jquiWidget, {
  init() {
    this._super(...arguments);

    this.uiType = 'menu';
    this.uiOptions = ['disabled'];
    this.uiEvents = ['blur', 'create', 'focus', 'select'];
  }
});
