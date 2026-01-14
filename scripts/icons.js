$("#checkmark").on("click", function(event) {
    if ($('#layerpopup').attr('display') == 'none'){
        $('#layerpopup').attr('display','block');
    }else{
        $('#layerpopup').attr('display','none');
    }
});