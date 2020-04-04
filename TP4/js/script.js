function PUT (id){
    var new_name = $("#city"+id).val();
    $.ajax({
        url: '/city/'+id,
        type: 'PUT',
        contentType: "application/json;charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({"name" : new_name}),
        success: function(result) {
            window.location.href = "/city";
        }
    });
}

function DELETE (id){
    $.ajax({
        url: '/city/'+id,
        type: 'DELETE',
        success: function(result) {
            window.location.href = "/city";
        }
    });
}
