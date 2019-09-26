import TextField from '@ember/component/text-field';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default TextField.extend(jquiWidget, {
    init() {
      this._super(...arguments);

      this.uiType = 'autocomplete';
      this.uiOptions = ['autofocus', 'delay', 'disabled', 'minLength', 'position', 'source'  ];
      this.uiEvents = ['close', 'search'];
    }
});
