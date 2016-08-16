var customRevealModal = function () {
    $('.reveal--custom-reveal').parent().addClass('reveal-overlay--custom-reveal-overlay');
};

var initialize = function () {
    customRevealModal();
};

module.exports = {
    init: initialize
};
