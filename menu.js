$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
})

$("ul").click(function(p){
    p.stopPropagation();
})

 var buscador = $("#table").DataTable();

$(".buscar_texto").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($(".buscar_texto").val() == ""){
        $(".cont-s").fadeOut();
    }else{
        $(".cont-s").fadeIn();
    }
})