$(document).ready(function () {
    $('#basicInfoForm').validate({
        rules: {
            name: 'required',
            email: 'required',
            phone: 'required'
        },
        messages: {
            name: 'Please enter your name',
            email: 'Please enter your email address',
            phone: 'Please enter your phone number'
        }
    });

    $('#basicInfoBtn').on('click', function() {

        if ( !$('#basicInfoForm').valid() ) {
            return;
        }

        $(this).parents('.section-wrap').addClass('collapse-in completed');
        $(this).parents('.section-wrap').next('.section-wrap').removeClass('collapse-in');

    });

});