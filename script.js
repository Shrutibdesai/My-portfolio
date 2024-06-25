$ (document).ready(function(){
    $("#menu").click(function(){
        $(this).toggleclass("fa-times");
        $ ("header").toggleclass("toggle");
    })
    $(window).on("scroll load",function(){

    
        $("#menu").rClass("fa-times");
        $("header").rClass("toggle");
})
})
