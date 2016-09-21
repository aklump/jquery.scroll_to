/**
 * {{ name }} jQuery JavaScript Plugin v{{ version }}
 * {{ homepage }}
 *
 * {{ description }}.
 *
 * Copyright 2013, Aaron Klump
 * @license Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: {{ date }}
 */

/**
 * The following example will scroll the body to the .comments section.
 * @code
 *   $('.comments').scrollTo();
 * @endcode
 *
 * The next example will scroll a model (.modal) to the .modal-footer element.
 * @code
 *   $('.modal-footer').scrollTo({
 *     target: '.modal'
 *   });
 * @endcode
 *
 * Refer to the defaults section of options.
 */

;(function ($, window) {
  "use strict";

  var windowLoaded = false;
  $(window).load(function () {
    windowLoaded = true;
  });

  function ScrollTo(el, options) {
    var self = this;
    self.options = $.extend({}, $.fn.scrollTo.defaults, options);
    self.$target = $(self.options.target);
    self.$el = $(el);

    if (windowLoaded) {
      self.move();
    }
    else {
      // This will detect if we have any images in our targets and delay the
      // initialization until after the images load.
      var hasImages = self.$el.is('img') || self.$el.find('img').length;
      if (!windowLoaded && hasImages) {
        // This prevents flashing content while images load.
        self.$el.hide();
        $(window).load(function () {
          self.$el.show();
          self.move();
        });
      }
    }
  }

  ScrollTo.prototype.move = function () {
    var destination = this.$el.offset().top;
    destination += this.$target.scrollTop();

    if (this.options.speed > 0) {
      this.$target.not(':animated').animate({
        scrollTop: destination
      }, this.options.speed, this.options.easing);
    }
    else {
      this.$target.scrollTop(destination);
    }
  };

  $.fn.scrollTo = function (options) {
    return this.each(function () {
      new ScrollTo(this, options);
    });
  };

  $.fn.scrollTo.defaults = {

    /**
     * The jQuery selector for the element that will be scrolled.
     *
     * You might change this if you're scrolling a modal.
     */
    "target": 'html,body',

    /**
     * See the defaults for jQuery.animate().
     *
     * For no animation, set speed to 0.
     */
    "speed" : null,
    "easing": null
  };

  /**
   * Returns the scrollTo version.
   *
   * @return {string}
   */
  $.fn.scrollTo.version = function () {
    return '0.0.1';
  };

})(jQuery, window);
