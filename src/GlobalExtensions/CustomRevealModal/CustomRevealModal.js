var customRevealModal = function () {
    $('.reveal--custom-reveal').parent().addClass('reveal-overlay--custom-reveal-overlay');
};

var revealOnPageLoad = function () {
    var $jsFormReveal = $('.js-form-reveal');
    var $jsCloseReveal = $('.js-close-reveal-modal');

    if($jsFormReveal.hasClass('js-reveal-pageload')) {
      $jsFormReveal.foundation("open");
    }

    return false;
};

var revealInteraction = function () {
  var $jsCloseReveal = $('.js-close-reveal-modal');

  $('.js-close-reveal-modal').click(function(){
    $('.js-form-reveal').foundation('close');
  });
};

var initialize = function () {
    customRevealModal();
    revealOnPageLoad();
    revealInteraction();
};

module.exports = {
    init: initialize
};
