import TextField from '@ember/component/text-field';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default TextField.extend(jquiWidget, {
  init() {
    this._super(...arguments);

    this.uiType = 'datepicker';
    this.uiOptions = ["altField", "altFormat", "appendText", "autoSize",
      "beforeShow", "beforeShowDay", "buttonImage", "buttonImageOnly",
      "buttonText", "calculateWeek", "changeMonth", "changeYear", "closeText",
      "constrainInput", "currentText", "dateFormat", "dayNames", "dayNamesMin",
      "dayNamesShort", "defaultDate", "duration", "firstDay", "gotoCurrent",
      "hideIfNoPrevNext", "isRTL", "maxDate", "minDate", "monthNames",
      "monthNamesShort", "navigationAsDateFormat", "nextText", "numberOfMonths",
      "onChangeMonthYear", "onClose", "onSelect", "prevText",
      "selectOtherMonths", "shortYearCutoff", "showAnim", "showButtonPanel",
      "showCurrentAtPos", "showMonthAfterYear", "showOn", "showOptions",
      "showOtherMonths", "showWeek", "stepMonths", "weekHeader", "yearRange",
      "yearSuffix"];
  }
});
