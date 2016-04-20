
$(function(){
	// 选项卡 导航
	// var _option = $('.navigation .navigation-list');
 //    _option.click(function(){
 //        $(this).addClass('active').siblings().removeClass('active');
 //        $(this).next().addClass('MainNav_listsActive').siblings().removeClass('MainNav_listsActive');
 //    });
    // APP 头部导航
    var _optionA = $('.MainNav .MainNav_list');
    _optionA.click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).next().addClass('MainNav_listsActive').siblings().removeClass('MainNav_listsActive');
    });
    // 轮播
    $("#owl-companybanner").owlCarousel({
    autoPlay : 4000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 300,
    goToFirstSpeed : 400,
    singleItem : true,
    // autoHeight : true,

    transitionStyle:"fade"
  });
  $("#owl-CattleBanner").owlCarousel({
        items : 4,
        lazyLoad : true,
        navigation : true,
        paginationSpeed:300,
        rewindSpeed:0,
        margin:30
      });
    
    // 省略号
    $('.tow-line').ellipsis({
        row: 2
    })
    $('.four-line').ellipsis({
        row: 4
    });
// nav
    // var flagA = true;
    // $(".navigation-list").click(function(){
    //     if (flagA) {
    //         $(this).next().css({display:"block"});
    //         flagA = false;
    //     }
    //     else {
    //         $(this).next().css({display:"none"});
    //         flagA = true;
    //     }
    // });
    // var flagB = true;
    //  $(".MainNav_list").click(function(){
    //     if (flagB) {
    //         $(this).next().css({display:"block"});
    //         flagB = false;
    //     }
    //     else {
    //         $(this).next().css({display:"none"});
    //         flagB = true;
    //     }
    // });
    
    
    
    var flag = true;
    $(".header-top-nav").click(function(){
        if(flag){
          $(".MainNav").css({height:"auto"});
          $(".MainLogin").css({height:0});
          // $('.arrow-top').removeClass('PortraitImg');
          flag = false;
        }else{
          $(".MainNav").css({height:0});
          flag = true
        }
        
    });
    var flag_login = true;
    $(".arrow-top").click(function(){
      if(flag_login){
          $('.arrow-top').addClass('PortraitImg');
          $(".MainLogin").css({height:120});
          $(".MainNav").css({height:0});
          flag_login = false;
        }else{
          $('.arrow-top').removeClass('PortraitImg');
          $(".MainLogin").css({height:0});
          flag_login = true
        }
    });
    
    // 流式布局js
    //判断浏览器类型
    function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串    
       
         console.log(userAgent)
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
       if(userAgent.indexOf("Mozilla")>-1){
           return "IE";
       }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        }
    }
    var mb = myBrowser(); 
    console.log(mb)
    if ("IE" == mb || "FF" == mb) {
        warterfal();
        $(".Fbox li").find("img").on("load",function(){
             warterfal();
            var windoW = $(window).width();
        })
    }
    if ("Safari" == mb) {
        $(".Fbox li").find("img").on("load",function(){
             warterfal();
            var windoW = $(window).width();
        })
    }

    //检测窗口大小变化
    $(window).resize(function() {
              warterfal();
        });

})

//图片动态布局
function warterfal(){
        //获取所有的图片容器
        var windoW = $(window).width();
        var boxList = $(".Fbox li");
        var boxW = boxList.eq(0).outerWidth();
        var aHrr = [];
        var ulH = $(".Fbox");
        if(windoW>=992){
            boxList.each(function(index,value){
                    var h = boxList.eq(index).outerHeight();                
                    if(index<4){
                            aHrr.push(h);
                        }else{
                            var minH = Math.min.apply(null,aHrr);
                            var minP = $.inArray(minH,aHrr);
                            var baseT =Math.floor(index/4)-1;                            
                            if(baseT>1||baseT==1){
                                 $(value).css({
                                    position:'absolute',
                                    top:minH+(baseT * 20)+"px",
                                    left:boxW*minP+15+'px',
                                    'paddingRight' :'22px'
                                });                 
                            }
                            else{
                                 $(value).css({
                                    position:'absolute',
                                    top:minH+"px",
                                    left:boxW*minP+15+'px',
                                    'paddingRight' :'22px' 
                                });
                            }
                            //实时获取和更新数组中的最小高度的值；
                            aHrr[minP] += boxList.eq(index).height();
                        }
                 })
                var ulmaxH = Math.max.apply(null,aHrr);
                ulH.css({
                    height:ulmaxH
                })
            }else{
                boxList.each(function(index,value){
                    var h = boxList.eq(index).outerHeight();
                    var pStr = boxList.eq(index).find("p").text().trim();
                    var pL = pStr.length;
                    if(pL>50){
                        var num = pStr.substring(0,49);
                        console.log(num.typeof);
                        $(".Fbox li").eq(index).find("p").text(num+'……');
                        $(".Fbox").css({
                            "margin-bottom":"22px"
                        })
                    }

                })
            }
    }