function attachEvents() { 

    $(".button").on("click", function () { 
        $(".button.selected").removeClass("selected");
        $(this).addClass("selected");
    }); 
}