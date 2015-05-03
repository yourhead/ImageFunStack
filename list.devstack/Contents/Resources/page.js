
// This javascript will appear once at the top of the page
//
// It will NOT be active in Edit mode
//
// Because it appears only once for all instances of this
// stack, we cannot use %id%, so here we just set up some
// functions that can be used by every instance.
//
// Note that these functions are defined as part of the "stack"
// variable. This allows us to access them from other places.


// returns the large image URL
// this stack stores the large image URL in the data-large HTML attribute
// this is a simple way bind the large image with the small one
stack.largeImageUrl = function (element) {
    return element.getAttribute ('data-large');
}

// returns the retina image URL
// this stack doesn't currently use this retina image to keep things
// simple. it's placed here just to show that any number of variations
// of the original image can be created. you could both of the
// URLs to the CSS and use a media query to select the appropriate one
stack.retinaImageUrl = function (element) {
    return element.getAttribute ('data-large-2x');
}

// set the background image css for the large image
stack.setLargeImage = function (largeElement, thumbElement) {
    var thumbUrl = stack.largeImageUrl (thumbElement);
    var thumbCss = 'url("' + thumbUrl + '")';
    largeElement.css('background-image', thumbCss);
}