
function initializeTable() { 

    let $table = $("#countriesTable tbody");
    $("#createLink").click(function () { 
        let $country = $("#newCountryText").val();
        let $capital = $("#newCapitalText").val();
        $("#newCountryText").val("");
        $("#newCapitalText").val("");
        
        let up = "<a class='up' href=# onclick=carryUp($(this))>[Up]</a>";
        
        let down = "<a class='down' href=# onclick=carryDown($(this))>[Down]</a>";
        
        let del = "<a id='delbtn' href=# onclick=del($(this))>[Delete]</a>";

        if($country && $capital)
        {
            $table.append(`<tr><td>${$country}</td>
                            <td>${$capital}</td>
                            <td>${up} ${down} ${del}</td></tr>`);
        }
    });
};

function carryUp($this)
{
    let row = $this.parents("tr");

    if(row.prev().index() == 1)
    {
        row.find(".up").hide();
        row.prev().find(".up").show();
    }
    if(row.nextAll().length == 0)
    {
        row.prev().find(".down").hide();
    }
    row.insertBefore(row.prev());
    row.find(".down").show();
};

function carryDown($this)
{
    let row = $this.parents("tr");

    if(row.next().nextAll().length == 0)
    {
        row.find(".down").hide();
        row.next().find(".down").show();
    }

    if(row.index() == 1)
    {
        row.next().find(".up").hide();
    }
    row.insertAfter(row.next());
    row.find(".up").show();
};

function del($this)
{
    var row = $this.parents("tr:first");
    row.hide("fast");
};

