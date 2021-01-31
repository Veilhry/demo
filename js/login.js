$(function() {
    $(".btn-log").click(function(){  
        var name = $(".inpn").val(); 
        var pwd = $(".inpp").val();
       if(name.length==0)
       { 
           $(".errorn").css("display","inline");
       }
       else
        $(".errorn").css("display","none");
       if(pwd.length==0)
       {
           $(".errorp").css("display","inline");
       }
       else
       $(".errorp").css("display","none");
       if(name=='admin' && pwd=='123456')  
       {
           window.location.href="D:/前端code/购物车.html"
       }
       else if (name !='' && pwd!='')
       alert("账号或密码错误");
    });
    $(document).keydown(function(event){
            if(event.keyCode==13)
            　　     $(".btn-log").trigger("click");
        });
})