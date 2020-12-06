(function() {
    // Get inputs by container
    $('.double-slider input[type="range"]').on('input', function(e) {
        // Split the elements From/To Slider and From/To values so you can handle them separtely 
        var fromSlider = $(this).parent().children('input[type="range"].from'),
            toSlider = $(this).parent().children('input[type="range"].to'),
            fromValue = parseInt($(this).parent().children('input[type="range"].from').val()),
            toValue = parseInt($(this).parent().children('input[type="range"].to').val()),
            currentlySliding = $(this).hasClass('from') ? 'from' : 'to',
            outputElemFrom = $(this).parent().children('.value-output.from'),
            outputElemTo = $(this).parent().children('.value-output.to');

        // Check which slider has been adjusted and prevent them from crossing each other 
        if (currentlySliding == 'from' && fromValue >= toValue) {
            fromSlider.val((toValue - 1));
            fromValue = (toValue - 1);
        } else if (currentlySliding == 'to' && toValue <= fromValue) {
            toSlider.val((fromValue + 1));
            toValue = (fromValue + 1);
        }

        // Updating the output values so they mirror the current slider's value
        outputElemFrom.html(fromValue);
        outputElemTo.html(toValue);

        // Caluculating and setting the progressbar widths    
        $('.progressbar_from').css('width', ((fromSlider.width() / parseInt(fromSlider[0].max)) * fromSlider[0].value) + "px");
        $('.progressbar_to').css('width', (toSlider.width() - ((toSlider.width() / parseInt(toSlider[0].max)) * toSlider[0].value)) + "px");

    });
})();
