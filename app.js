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

function evesend(event){
    event.preventDefault();
    $("#eventregform").trigger("reset");
    $("#eventregform").addClass("hidden");
    $(".everegres").removeClass("hidden");
}

function ordersend(event){
    event.preventDefault();
    $("#orderform").trigger("reset");
    $("#ctable").addClass("hidden");
    $("#orderform").addClass("hidden");
    $(".orderres").removeClass("hidden");
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

let delbtn="<td><button class='btn del btn-dark btn-outline-light'>Delete</button></td>";

$(".add").click(function () {
    let row=$(this).closest("tr");
    let name=row.find("td:eq(0)").text();
    let price=row.find("td:eq(1)").text();

    let item = "<tr><td colspan='2'>"+
    name+"</td>"+"<td>"+price+"</td>"+delbtn+"</tr>";
    tableBody = $("#ctable tbody");
    tableBody.append(item);
    let cost=$("#cost").text();
    $("#cost").text(parseInt(cost)+parseInt(price));
}); 

$('.cartbtn').on('click', function(){
    var parent_id = $(this).parent().parent().attr('id');
    console.log(parent_id);
})

$("#ctable").on("click",".del",function () {
    let price=$(this).closest("tr").find("td:eq(1)").text();
    let cost=$("#cost").text();
    $("#cost").text(parseInt(cost)-parseInt(price));
    $(this).closest("tr").remove();
});