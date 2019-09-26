import TextField from '@ember/component/text-field';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default TextField.extend(jquiWidget, {
  init() {
    this._super(...arguments);

    this.uiType = 'spinner';
    this.uiOptions = ['culture', 'disabled', 'incremental', 'max', 'min', 'numberFormat', 'page', 'step'];
    this.uiEvents = ['change', 'create', 'spin', 'start', 'stop'];
  }
});
