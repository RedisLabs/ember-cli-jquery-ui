import Component from '@ember/component';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Component.extend(jquiWidget, {
    init() {
      this._super(...arguments);

      this.uiType = 'accordion';
      this.uiOptions = ['active', 'animate', 'collapsible', 'disabled', 'event', 'header', 'heightStyle', 'icons'];
      this.uiEvents = ['activate', 'beforeActivate', 'create'];
    }
});
