
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var url = 'https://script.google.com/macros/s/AKfycbyTwlhVTE2qflgS9Z2kyu0UnMedG4PsuOrRXfI-DFrIyLQI35XJ/exec'
    var formData = JSON.parse(JSON.stringify(jQuery('#match-form').serializeArray()))

    var match_id = $('.validate-input input[name="match_id"]');

    $('#submit-form').on('click', function (e) {
        if ($(match_id).val().trim() == '') {
            showValidate(name);
            return false;
        }
        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: formData,
            success: function () {
                // Redirect user to form page
                window.location.href = "http:/dmuzzin.github.io/hEYE/form.html"
            }
        });
    })

    $('.match-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);
