
// This javascript will be created for each instance of our stack
//
// It will NOT be active in Edit mode
//
// Because this script will be called for each stack, we put as
// litter here as possible. Only the code requires the use of %id%.


// this code will run when the DOM has completed loading
// here we set up the behavior of our stack
$( document ).ready(function() {

    // use jQuery to find the elements in our stack
    var thumbnails = $( "#%id% li img" );
    var largeImage = $( "#%id% .large_image" );
    
    // add a click handler to each thumbnail
    thumbnails.click (function () {
        
       // swap in the large image
       stacks.com_yourhead_stacks_list.setLargeImage (largeImage, this);
    
    });
    
    // when the page loads, we want to set the default image to the 
    // first image. but only if there's at least one image available
    if (thumbnails.length > 0) {
       stacks.com_yourhead_stacks_list.setLargeImage (largeImage, thumbnails[0]);
    }

});