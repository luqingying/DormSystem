/**
 * Created by luqingying on 2018/8/3.
 */
/*页面加载的一些准备*/
$("th:first-child,td:first-child").hide();
$("#del-btns").hide();
$("#college,#major").attr("disabled","true");

/*导航栏点击部分*/
$("#top-nav li").click(function () {
    $(this).addClass("active-li");
    $(this).siblings().removeClass("active-li");
});
$("#nav-room").click(function () {
   $(".revise").attr("data-target","#reviseRoomModal");
   $("#college,#major").attr("disabled","true");
});
$("#nav-stu").click(function () {
    $(".revise").attr("data-target","#reviseStuModal");
    $("#college,#major").removeAttr("disabled");
});


$("#check-all").click(function () {
    $(":checkbox").each(function(){
        $(this).attr("checked", !$(this).attr("checked"));
    });

});


/*$.ajax({
    url: ,
    type:POST,
    success:function(result){
        $("#div1").html(result);
    }
})*/
/*


$("#search").click(function () {
    var unit = $("#unit").val();
    var floor = $("#floors").val();
    $.ajax({
            url: ,
            type:POST,
            data:{
                unit : unit,
                floor : floor
            },
            success:function(result){
                    $("#div1").html(result);
                }
        });
})*/
