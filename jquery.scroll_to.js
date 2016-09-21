/**
 * Scroll To jQuery JavaScript Plugin v0.1.1
 * http://www.intheloftstudios.com/packages/js/jquery.scroll_to
 *
 * Quick plugin for scrolling to an element with animation.  Supports modals and non-body elements.
 *
 * Copyright 2016, Aaron Klump <sourcecode@intheloftstudios.com>
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: Tue Sep 20 18:03:45 PDT 2016
 *
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
/* @preserve http://www.intheloftstudios.com/packages/js/jquery.scroll_to */
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
      self.go();
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
          self.go();
        });
      }
    }
  }

  ScrollTo.prototype.go = function () {
    var destination = this.$el.offset().top + this.$target.scrollTop() - this.options.offset;

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
      return new ScrollTo(this, options);
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
    "easing": null,

    /**
     * An offset will be added to the detected position.  Use this to fine adjust the destination. Negative numbers
     * move content further up.
     */
    "offset": 0
  };

  /**
   * Returns the scrollTo version.
   *
   * @return {string}
   */
  $.fn.scrollTo.version = function () {
    return '0.1.1';
  };

})(jQuery, window);

