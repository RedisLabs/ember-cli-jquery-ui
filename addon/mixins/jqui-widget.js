import Mixin from '@ember/object/mixin';
import { scheduleOnce } from '@ember/runloop';
import $ from 'jquery';

// Create a new mixin for jQuery UI widgets using the Ember
// mixin syntax.

// eslint-disable-next-line ember/no-new-mixins
export default Mixin.create({

    // When Ember creates the view's DOM element, it will call this
    // method.
    didInsertElement: function() {
      this._super(...arguments);

      let _this = this;
      scheduleOnce('afterRender', afterREnder);

      function afterREnder() {

        // Make jQuery UI options available as Ember properties
        let options = _this._gatherOptions();

        // Make sure that jQuery UI events trigger methods on this view.
        _this._gatherEvents(options);

        let ui;
        let uiType = _this.get('uiType');

        // Workaround for bug in jQuery UI datepicker
        // $.ui.datepicker is not a function
        if (uiType === "datepicker") {
          _this.$().datepicker(
            // eslint-disable-next-line ember/no-new-mixins
            $.extend(options, {
              onSelect: function () {
                _this.$().change();
              }
            })
          );
          ui = {
            option: function (key, value) {
              _this.$().datepicker('option', key, value);
            },
            _destroy: function () {
              _this.$().datepicker('destroy');
            }
          };
        } else {

          // Create a new instance of the jQuery UI widget based on its `uiType`
          // and the current element.
          ui = $.ui[_this.get('uiType')](options, _this.get('element'));
        }

        // Save off the instance of the jQuery UI widget as the `ui` property
        // on this Ember view.
        _this.set('ui', ui);

      }
    },

    // When Ember tears down the view's DOM element, it will call
    // this method.
    willDestroyElement: function() {
        this._super(...arguments);

        let ui = this.get('ui');

        if (ui) {
            // Tear down any observers that were created to make jQuery UI
            // options available as Ember properties.
            let observers = this._observers;
            for (let prop in observers) {
                if (observers.hasOwnProperty(prop)) {
                    this.removeObserver(prop, observers[prop]);
                }
            }
            ui._destroy();
        }
    },

    // Each jQuery UI widget has a series of options that can be configured.
    // For instance, to disable a button, you call
    // `button.options('disabled', true)` in jQuery UI. To make this compatible
    // with Ember bindings, any time the Ember property for a
    // given jQuery UI option changes, we update the jQuery UI widget.
    _gatherOptions: function() {
        let uiOptions = this.get('uiOptions'), options = {};

        // The view can specify a list of jQuery UI options that should be treated
        // as Ember properties.
        uiOptions.forEach(function(key) {
            options[key] = this.get(key);

            // Set up an observer on the Ember property. When it changes,
            // call jQuery UI's `option` method to reflect the property onto
            // the jQuery UI widget.
            let observer = function() {
                let value = this.get(key);
                this.get('ui').option(key, value);
            };
            this.addObserver(key, observer);

            // Insert the observer in a Hash so we can remove it later.
            this._observers = this._observers || {};
            this._observers[key] = observer;
        }, this);
        return options;
    },

    // Each jQuery UI widget has a number of custom events that they can
    // trigger. For instance, the progressbar widget triggers a `complete`
    // event when the progress bar finishes. Make these events behave like
    // normal Ember events. For instance, a subclass of JQ.ProgressBar
    // could implement the `complete` method to be notified when the jQuery
    // UI widget triggered the event.
    _gatherEvents: function(options) {
        let uiEvents = this.get('uiEvents') || [], self = this;
        uiEvents.forEach(function(eventName) {
            let callback = self.uiActions && self.uiActions[eventName];

            // You can register a handler for a jQuery UI event by passing
            // it in along with the creation options. Update the options hash
            // to include any event callbacks.
            options[eventName] = function(event, ui) {
                if (callback) {
                    callback.call(self, event, ui);
                }

                self.sendAction(eventName, event, ui);
            };
        });
    }
});
