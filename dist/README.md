# ScrollTo
## A jQuery Plugin

**Animates the vertical scrolling to an element in the DOM.  More importantly, makes it easy to do so with dead-simple syntax.  And very small at <900K minified.  Will wait for images to load before scrolling for accurate location.**

## Example One

    $('.comments').scrollTo();
    
Scrolls the body of the page to the element found by `.comments` using the default speed and easing of `jQuery.animate()`.

## Example Two: modals

    $('.modal-footer').scrollTo({
      target: '.modal',
      speed: 800,
      easing: 'swing'
    })

This example will scroll the target `.modal` to  `.modal-footer` so that `.modal-footer` is at the top of the page.  Nothing is done to the body element.  Not tested when the element is not a child of the target, but may still work.
