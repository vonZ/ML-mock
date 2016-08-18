var customRevealModal = function () {
    $('.reveal--custom-reveal').parent().addClass('reveal-overlay--custom-reveal-overlay');
};

var revealOnPageLoad = function () {
    var $jsFormReveal = $('.js-form-reveal');

    if($jsFormReveal.hasClass('js-reveal-pageload')) {
      $jsFormReveal.foundation("open");
    }
    return false;
};

var initialize = function () {
    customRevealModal();
    revealOnPageLoad();
};

module.exports = {
    init: initialize
};
