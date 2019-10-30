"use strict";

var travelAgentsSignUp = function () {
    debugger;
    console.log("sadf")
    var travelAgentsSignUpView = $(".p-travel-agents-signup");
    var signupForm = travelAgentsSignUpView.find(".form-travel-agents-signup");
    var intermediaryInput = signupForm.find('[name="consortia"]');
    var affirmativeIntermediaryInput = signupForm.find("#is_agency_associated");
    var intermediaryTextInput = signupForm.find("#which_association");
    function init() {
        signupForm.validator({
            disable: false
        }).on("submit", function (e) {
            var $form = $(this);
            toggleLoadingButton($form, true);
