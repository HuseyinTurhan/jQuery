function search() { 
    let text = $("#searchText").val();
    let result = 0;

    $("#towns li").each(function () {
        if(text && $(this).text().startsWith(text))
        {
            result++;
            $(this).css("fontWeight","bold");
        }
    });

   $("#result").text(result + " matches found.");
}