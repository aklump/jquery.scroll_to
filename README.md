# ScrollTo
## A jQuery Plugin

**Animates the vertical scrolling to an element in the DOM.  More importantly, makes it very simple to do so with dead-simple syntax.  And very small at 918 bytes minified.**

## Example One

    $('.comments').scrollTo();
    
Scrolls the body of the page to the element found by `.comments` using the default speed and easing of `jQuery.animate()`.

## Example Two: modals

    $('.modal-footer').scrollTo({
      target: '.modal',
      speed: 800,
      easing: 'swing'
    })

This example will scroll the target `.modal` which contains `.modal-footer` so that `.modal-footer` is at the top of the page.  Nothing is done to the body element.
