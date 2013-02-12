/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

    Drupal.postVote = function(){
        Drupal.gallery = document.URL.substring(0, document.URL.length-1);
        FB.api(
            '/me/og_urgallery:vote',
            'post',
            {
                gallery: Drupal.gallery
            },
            function(response) {
                alert(response.error.message);
            }
            );
    }
})(jQuery, Drupal, this, this.document);