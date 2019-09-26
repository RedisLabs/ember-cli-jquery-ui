import Component from '@ember/component';
import { next } from '@ember/runloop';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Component.extend(jquiWidget, {
    tagName: 'button',

    init() {
      this._super(...arguments);

      this.uiType = 'button';
      this.uiOptions = ['disabled'];
      this.uiEvents = [];
      this.disabled = false;
      this.icon = "";
    },

    didInsertElement: function() {
      this._super(...arguments);
      var _this = this;
      next(function() {
          _this.$().button("option", "icons", {
              primary: _this.get('icon')
          });
      });
    },

    click: function() {
      this.action();
    }
});
