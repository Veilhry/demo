$(function() {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（g-checkbox）就可以了
    // 事件可以使用change
    $(".checkall").change(function() {
        // console.log($(this).prop("checked"));
        $(".g-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-goods 类名
            $(".goods").addClass("check-goods");
        } else {
            // check-goods 移除
            $(".goods").removeClass("check-goods");
        }
        getSum();
    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".g-checkbox").change(function() {
        // $(".g-checkbox").length 这个是所有的小复选框的个数
        if ($(".g-checkbox:checked").length === $(".g-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {        
            $(this).parents(".goods").addClass("check-goods");
        } else {
            $(this).parents(".goods").removeClass("check-goods");
        }
        getSum();
    });
    // 3. 增减商品数量模块。
    $(".increment").click(function() {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
        // 当前商品的价格 p  
        var p = $(this).parents(".g-num").siblings(".g-price").html();
        p = p.substr(1);
        console.log(p);
        var price = (p * n).toFixed(2);
        // 小计模块 
        // toFixed(2) 可以让我们保留2位小数
        $(this).parents(".g-num").siblings(".g-sum").html("￥" + price);
        getSum();
    });
    $(".decrement").click(function() {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents(".g-num").siblings(".g-price").html();
        p = p.substr(1);
        console.log(p);
        // 小计模块 
        $(this).parents(".g-num").siblings(".g-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });
    //  4. 用户修改文本框的值 计算 小计模块  
    $(".itxt").change(function() {
        // 先得到文本框的里面的值 乘以 当前商品的单价 
        var n = $(this).val();
        // 当前商品的单价
        var p = $(this).parents(".g-num").siblings(".g-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents(".g-num").siblings(".g-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });
    // 5. 计算总计和总额模块
    //getSum();

    function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱       
        $(".itxt").each(function(i, ele) {          
            if($(ele).parents().parents().siblings(".g-check").children().prop("checked")==true)
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".g-sum").each(function(i, ele) {
            if($(ele).siblings(".g-check").children().prop("checked")==true)
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }
    // 6. 删除商品模块
    // (1) 商品后面的删除按钮
    $(".g-ope a").click(function() {
        // 删除的是当前的商品 
        $(this).parents(".goods").remove();
        getSum();
    });
    // (2) 删除选中的商品
    $(".remove-goods").click(function() {
        // 删除的是小的复选框选中的商品
        $(".g-checkbox:checked").parents(".goods").remove();
        getSum();
    });
    // (3) 清空购物车 删除全部商品
    $(".clear-all").click(function() {
        $(".goods").remove();
        getSum();
            })
    //7.倒计时
    //获取元素
        var hour = document.querySelector('.hour');
        var minute = document.querySelector('.minutes');
        var second =  document.querySelector('.second');
        var indate = +new Date('2021-1-31 20:00:00');//输入时间
        //定时器
        setInterval(countdown,1000);
        //倒计时
        function countdown(){
        var nowtime = +new Date();//当前时间         
        var times = (indate-nowtime) / 1000;//相差秒数
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0'+h :h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60 );
        m = m < 10 ? '0'+m :m;
        minute.innerHTML=m;
        var s =  parseInt(times %60 );
        s = s < 10 ? '0'+s :s;   
        second.innerHTML=s;
    }
    // //8.图片跳转
    // $(".peo").click(function(){
    //     window.location.href="D:/前端code/人类简史.html";
    // })

})