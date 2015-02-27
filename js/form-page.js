$(document).ready(function () {

    jQuery.validator.addMethod("notEqual", function(value, element, param) {
        return this.optional(element) || value !== param;
    }, "Please choose a value!");

    $('#basicInfoForm').validate({
        rules: {
            name: 'required',
            email: 'required',
            phone: {
                required: true,
                number: true,
                minlength: 6
            }
        },
        messages: {
            name: 'Please enter your name.',
            email: 'Please enter your email address.',
            phone: 'Please enter your phone number.'
        }
    });

    $('#basicInfoBtn').on('click', function() {

        if ( !$('#basicInfoForm').valid() ) {
            return;
        }

        $(this).parents('.section-wrap').addClass('collapse-in completed');
        $(this).parents('.section-wrap').next('.section-wrap').removeClass('collapse-in');

    });

    $('#businessInfoForm').validate({
        rules: {
            businessName: 'required',
            businessUrl: {
                url: true,
                required: true
            },
            businessCategory: {
                required: true,
                notEqual: "default"
            }
        },
        messages: {
            businessName: 'Please enter the name of your business.',
            businessUrl: 'Please enter the company website URL.',
            businessCategory: 'Please select your business category.'
        }
    });

    $('#businessInfoBtn').on('click', function () {

        if ( ! $('#businessInfoForm').valid() ) {
            return;
        }

        $(this).parents('.section-wrap').addClass('collapse-in completed');
        $(this).parents('.section-wrap').next('.section-wrap').removeClass('collapse-in');

    });

    $('#businessAddForm').validate({
        rules: {
            city: 'required',
            state: {
                required: true,
                notEqual: 'default'
            },
            pincode: {
                number: true,
                required: true
            }
        },
        messages: {
            city: 'Please enter your city.',
            state: 'Please select your state.',
            pincode: 'Please enter your pincode.'
        }
    });

    $('#businessAddBtn').on('click', function() {

        if( !$('#businessAddForm').valid() ) {
            return;
        }

        var postdata = $('#basicInfoForm').serialize() + '&' + $('#businessInfoForm').serialize() + '&' + $('#businessAddForm').serialize();

        $.ajax({
            url: '/path/to/php',
            dataType: 'JSON',
            method: 'POST',
            data: postdata,
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        })

    });

});