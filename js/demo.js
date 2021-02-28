$(function (){
    //删除td
    $(".tabledate").on("click" ,".deltd" ,function (){
        $(this).parent().parent().remove();
    });
    //点击效果
    $(".databtn").on({
        mousedown: function(){
              $(this).css("background","rgba(0,0,0,0.4)");
        },
        mouseup: function (){
            $(this).css("background","rgba(0,0,0,0.1)");
        },

    });
    $("#add").click(function (){    
        $(".inf").fadeIn();             
    })
    $("#sech").click(function (){
       var st =  $("#sea-username").val();
       if(st!= "")
        $(".tab tbody tr").hide().find('td').eq(0).filter(":contains('"+st+"')").show();
        else
        $(".tab tbody tr").show();
    });
    // 关闭功能
    $("#closeBtn").click(function (){
        $(".inf").fadeOut();        
    });
    //拖拽模态框
    $(".inhead").mousedown(function (e){
        //获得鼠标在盒子内的坐标
       
        var X = e.pageX -  $(".inf")[0].offsetLeft;
        var Y = e.pageY -  $(".inf")[0].offsetTop;
        //移动盒子
        $("html").on("mousemove",function (e){
            var x = e.pageX - X + 'px';
            var y = e.pageY - Y + 'px';

            $(".inf").css("left",x);         
            $(".inf").css("top",y);
        });
        //解绑事件
        $("html").mouseup(function (){
            $("html").off();
        })
    });
 
    $("#ackbtn").click(function (){
            var name = $("#username").val();
            var age = $("#userage").val();
            var email = $("#useremail").val();
            $(".tabledate tbody")
            .append('<tr> <td>'+name+'</td> <td>'+age+' </td> <td> '
            +email+'</td> <td> <a href="javascript:;" class="deltd">删除</a></td></tr> ');
            $(".inf").css("display","none");
    });
    

function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var XHR = new XMLHttpRequest();
        XHR.open('GET', url, true);
        XHR.send();
 
        XHR.onreadystatechange = function() {
            if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    try {
                        var response = JSON.parse(XHR.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(XHR.statusText));
                }
            }
        }
    })
}

getJSON('http://poetry.apiopen.top/getTime').then(res => console.log(res));



// var url = 'file:///D:/%E5%89%8D%E7%AB%AFcode/table.txt';
// var result;
 
// var XHR = new XMLHttpRequest();
// XHR.open('GET', url, true);
// XHR.send();
 
// XHR.onreadystatechange = function() {
//     if (XHR.readyState == 4 && XHR.status == 200) {
//         result = XHR.response;
//         console.log(result);
//     }
// }

})