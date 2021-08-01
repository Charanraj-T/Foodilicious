fmenu("all");

function msgsend(event){
    event.preventDefault();
    $("#msgform").trigger("reset");
    $("#msgform").addClass("hidden");
    $(".detailres").removeClass("hidden");
}
function tabsend(event){
    event.preventDefault();
    $("#tableform").trigger("reset");
    $("#tableform").addClass("hidden");
    $(".bookres").removeClass("hidden");
}
function show23(){
    $("#sitem1").removeClass("hidden");
    $("#sitem2").addClass("hidden");
    $("#sitem3").addClass("hidden");
    $("#s1").removeClass("btn-outline-light").addClass("btn-outline-warning");
    $("#s2").removeClass("btn-outline-warning").addClass("btn-outline-light");
    $("#s3").removeClass("btn-outline-warning").addClass("btn-outline-light");
} 
function show13(){
    $("#sitem1").addClass("hidden");
    $("#sitem2").removeClass("hidden");
    $("#sitem3").addClass("hidden");
    $("#s1").removeClass("btn-outline-warning").addClass("btn-outline-light");
    $("#s2").removeClass("btn-outline-light").addClass("btn-outline-warning");
    $("#s3").removeClass("btn-outline-warning").addClass("btn-outline-light");
}
function show12(){
    $("#sitem1").addClass("hidden");
    $("#sitem2").addClass("hidden");
    $("#sitem3").removeClass("hidden");
    $("#s1").removeClass("btn-outline-warning").addClass("btn-outline-light");
    $("#s2").removeClass("btn-outline-warning").addClass("btn-outline-light");
    $("#s3").removeClass("btn-outline-light").addClass("btn-outline-warning");
}
function fmenu(c){
    var x, i;
    x = document.getElementsByClassName("fitem");
    if(c=="all")c="fitem";
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("hidden");
        if(x[i].classList.contains(c))
        x[i].classList.remove("hidden");
    }
    x = document.getElementById('m').getElementsByTagName('li');
    for(i=0;i<x.length;i++){
        x[i].classList.remove("active");
    }
    if(c=="fitem")c="all";
    $('#m'+c).addClass("active");
}