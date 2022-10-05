function attachEvents() { 
    $("#items li").on("click", function () { 
        if($(this).hasClass("selected"))
        {
            $(this).removeClass("selected");
        }
        else
        {
            $(this).addClass("selected");
        }
    }); 

    $("#showTownsButton").click(function () { 
        var option_all = $("#items li.selected").map(function () {
            return $(this).text();
        }).get().join(', ');
        $("#selectedTowns").text("Selected cities: " + option_all);
    });
}