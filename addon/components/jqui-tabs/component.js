import $ from 'jquery';
import Component from '@ember/component';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Component.extend(jquiWidget, {
    init() {
      this._super(...arguments);

      this.uiType = 'tabs';
      this.uiOptions = ['active', 'collapsible', 'disabled', 'event', 'heightStyle', 'hide', 'show'];
      this.uiEvents = ['activate', 'beforeActivate', 'beforeLoad', 'create', 'load'];

      this.uiActions = {
        // Hacky workaround for bug in JQuery UI Tabs _isLocal method
        // Source: http://stackoverflow.com/questions/13837304/jquery-ui-non-ajax-tab-loading-whole-website-into-itself
        create: function (event) {
          var tabsData = $(event.target).data('ui-tabs');
          tabsData.anchors.each(function (idx, anchor) {
            var contentId = $(anchor).attr('href');
            var $panel = $(tabsData.panels[idx]);
            $panel.html($(contentId).remove().html());
          });
        },
        beforeLoad: function (event) {
          event.preventDefault();
        }
      }
    }
});
