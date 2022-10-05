    function extractText() {
        $("button").css("background-color", "yellow");
        
        var option_all = $("#items li").map(function () {
            return $(this).text();
        }).get().join(', ');

        $("#result").text(option_all); 

    };
