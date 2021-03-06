var foundation = require('foundation/foundation.core').foundation;
var keyboard = require('foundation/foundation.util.keyboard');
var box = require('foundation/foundation.util.box');
var triggers = require('foundation/foundation.util.triggers');
var mediaQuery = require('foundation/foundation.util.mediaQuery');
var slider = require('foundation/foundation.slider');
var motion = require('foundation/foundation.util.motion');
var timerAndImageLoader = require('foundation/foundation.util.timerAndImageLoader');
var orbit = require('foundation/foundation.orbit');
var reveal = require('foundation/foundation.reveal');
var datepicker = require('nodeModulesPath/foundation-datepicker/js/foundation-datepicker');
var lazyload = require('nodeModulesPath/jquery-lazyload/jquery.lazyload');
var customRevealModal = require('GlobalExtensions/CustomRevealModal/CustomRevealModal');

$.fn.foundation = foundation;

$(document).ready(function () {
    $(document).foundation();
    console.log("foundation init");
    customRevealModal.init();

    $(document).on('click', '[data-url]', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $modal = $('.js-form-reveal');
        var url = $this.attr("data-url");
        console.log("url: ", url);

        $.ajax(url)
          .done(function (resp) {
              $modal.html(resp.html);
          });
    });

    // Datepicker
    $(function () {
        $('.js-datepicker').fdatepicker({
            format: 'mm-dd-yyyy',
            disableDblClickSelection: true
        });
    });

    // Lazy load
    $("div.lazy").lazyload({
      effect : "fadeIn"
    });


});
