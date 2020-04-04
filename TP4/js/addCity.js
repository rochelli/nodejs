function POST (){
    var new_name = $("#name").val();
    $.ajax({
        url: '/city',
        type: 'POST',
        contentType: "application/json;charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({"name" : new_name}),
        success: function(result) {
            window.location.href = "/city";
        }
    });
}