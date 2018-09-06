window.onload=function() {
    // 购物车弹出框
    var shop = document.querySelector("#shopping");
    var shopcar = document.querySelector(".navLibox");
    //导航栏大的弹出框
    var tank = document.querySelectorAll(".con_tan ul");
    // 弹出框整体大框
    var con_tan = document.querySelector(".con_tan")
    //获取导航栏上的li
    var conli = document.querySelectorAll(".con_ul ul li");
    var conul = document.querySelector(".tan_pig");
    var lun = document.querySelector(".lun");
    //轮播左图上的li
    var lun_left = document.querySelectorAll(".lun_left ul li");
    //轮播图右边的ul
    var lun_right = document.querySelectorAll(".lun_right .lunk ")
    console.log(lun_right)
    //轮播图上的小点
    var lun_dian = document.querySelectorAll(".lun_dian ul li");
    //轮播图左尖括号
    var but_left = document.querySelector(".but_left");
    //轮播图右尖括号
    var but_right = document.querySelector(".but_right");
    //获取小米闪购 的左尖括号
    var small_left = document.querySelector(".samll-top2 .samll-top2left")
    var small_right = document.querySelector(".samll-top2 .samll-top3left")
    //获取小米闪购的长度
    var small_length = document.querySelector(".small-right1")
    // 获取家电的li
    var homeli = document.querySelectorAll(".home .homeli li")
    // 获取家电下面图片的ul
    var homeul = document.querySelectorAll(" .home2 .home_right .ul1")
    //获取智能的li
    var zhili = document.querySelectorAll(".home .zhili li");
    //获取智能的ul
    var zhiul = document.querySelectorAll(".home2 .home_right .ul2")
    //获取搭配的li
    var dali = document.querySelectorAll(".home .dali li")
    //获取搭配的ul
    var daul = document.querySelectorAll(".home2 .home_right .ul3")
    //配件的li
    var armli = document.querySelectorAll(".home .armli li");
    //配件的ul
    var armul = document.querySelectorAll(".home2 .home_right .ul4")
    //周边的li
    var rimli = document.querySelectorAll(".home .rimli li")
    //周边的ul
    var rimul = document.querySelectorAll(".home2 .home_right .ul5");
    //为你推荐左尖括号
    var recleft = document.querySelector(".samll11 .recommendleft");
    var recright = document.querySelector(".samll11 .recommendright")
    var reclength = document.querySelector(".recommend .recommend1")
    //内容小圆点的li
    var dianli = document.querySelectorAll(".matter .matterone .dian li");
    //内容第一个框里面的li
    var one1 = document.querySelectorAll(".matter .matterone .aa ")
    var kuoleft = document.querySelector(".matter .matterone .kuo .kuoleft")
    var kuoright = document.querySelector(".matter .matterone .kuo .kuoright")
    var kuo = document.querySelectorAll(".matter .matterone .kuo")
    //图片的长度
    var matterlength = document.querySelector(".matter .matterone .matterone2")
    //第二个框里面的
    var dianli2 = document.querySelectorAll(".matter .mattertwo .dian li");
    //内容第一个框里面的li
    var two2 = document.querySelectorAll(".matter .mattertwo .aa ")
    var kuoleft2 = document.querySelector(".matter .mattertwo .kuo .kuoleft")
    var kuoright2 = document.querySelector(".matter .mattertwo .kuo .kuoright")
    var kuo2 = document.querySelectorAll(".matter .mattertwo .kuo")
    //图片的长度
    var matterlength2 = document.querySelector(".matter .mattertwo .matterone2")
    //第三个框里面的
    var dianli3 = document.querySelectorAll(".matter .matterthree .dian li");
    //内容第一个框里面的li
    var three3 = document.querySelectorAll(".matter .matterthree .aa ")
    var kuoleft3 = document.querySelector(".matter .matterthree .kuo .kuoleft")
    var kuoright3 = document.querySelector(".matter .matterthree .kuo .kuoright")
    var kuo3 = document.querySelectorAll(".matter .matterthree .kuo")
    //图片的长度
    var matterlength3 = document.querySelector(".matter .matterthree .matterone2")
    //第四个框里面的
    var dianli4 = document.querySelectorAll(".matter .matterfour .dian li");
    //内容第一个框里面的li
    var four4 = document.querySelectorAll(".matter .matterfour .aa ")
    var kuoleft4 = document.querySelector(".matter .matterfour .kuo .kuoleft")
    var kuoright4 = document.querySelector(".matter .matterfour .kuo .kuoright")
    var kuo4 = document.querySelectorAll(".matter .matterfour .kuo")
    //图片的长度
    var matterlength4 = document.querySelector(".matter .matterfour .matterone2")
    //大轮播
    var maig = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

    //小米手机
    var miul = ['miul/1.png', 'miul/2.png', 'miul/3.png', 'miul/4.png', 'miul/5.png', 'miul/6.jpg'];
    //红米
    var redRice = ['redRice/1.png', 'redRice/2.png', 'redRice/3.png', 'redRice/4.png', 'redRice/5.png', 'redRice/6.png'];
    //电视
    var Tv = ['Tv/1.png', 'Tv/2.png', 'Tv/3.png', 'Tv/4.png', 'Tv/5.png', 'Tv/6.png'];
    //笔记本
    //空调
    //新品
    //路由器
    //智能硬件
    //服务
    //社区
    var num = 0;
    shop.onmouseover = function () {
        shopcar.style.display = "block";
        shop.style.color = "red";
        shopcar.style.height = "100px";
        // shopcar.style.paddingTop="15px";
        shopcar.style.transition = "2s"

    }
    shop.onmouseout = function () {
        shopcar.style.display = "none";
    }
    // 大轮播
    var timer = null;

    function autoplay() {
        ++num;
        if (num > 4) {
            num = 0
        }
        for (var j = 0; j < len; j++) {
            lun_dian[j].className = "";
        }
        lun_dian[num].className = "active";
        lun.style.background = "url(img/lun/" + maig[num] + ")";
    }

    but_left.onclick = function () {
        --num;
        if (num < 0) {
            num = 0
        }
        lun.style.background = "url(img/lun/" + maig[num] + ")";

    }
    but_right.onclick = function () {
        ++num;
        if (num > 4) {
            num = 4
        }
        lun.style.background = "url(img/lun/" + maig[num] + ")";

    }
    var len = lun_dian.length;
    for (var i = 0; i < len; i++) {
        lun_dian[i].index = i;
        lun.onmouseover = function () {
            clearInterval(timer);
        }
        lun.onmouseout = function () {
            timer = setInterval(autoplay, 2000);

        }
        lun_dian[i].onmouseover = function () {
            for (var j = 0; j < len; j++) {

                lun_dian[j].className = "";
            }
            lun_dian[this.index].className = "active"
            lun.style.background = "url(img/lun/" + maig[this.index] + ")";
        }
        lun_dian[i].onmouseout = function (){
            num = this.index;
        }
    }
    timer = setInterval(autoplay, 2000);
    // 导航栏弹出框
    var leng = conli.length;
    for (var j = 0; j < leng; j++) {
        conli[j].index = j;
        conli[j].onmouseover = function () {
            con_tan.style.height = "230px";
            for (var k = 0; k < leng; k++) {
                // conli[k].style.color="#333";
                tank[k].style.display = "none";
                // con_tan.style.height="230px";
            }
            conli[this.index].style.color = "#ff6700";
            tank[this.index].style.display = "block";
            // con_tan[this.index].style.heihgt="230px";
        }
        conli[j].onmouseout = function () {
            tank[this.index].style.display = "none";
            con_tan.style.height = "0px";
        }
    }
    //   轮播左边的弹出框
    var lengthh = lun_left.length;

    for (var i = 0; i < lengthh; i++) {
        lun_left[i].index = i;
        lun_left[i].onmouseover = function () {
            for (var k = 0; k < lengthh; k++) {
                // console.log(lun_left)
                lun_left[k].className = "";
                lun_right[k].style.display = "none"
                // console.log(lun_right[k]);
            }
            lun_left[this.index].className = "active3"
            lun_right[this.index].style.display = "block"
        }
        lun_left[i].onmouseout = function () {
            lun_right[this.index].style.display = "none"
        }
    }
    // 小米闪购的轮播
    var nn = 0
    small_left.onclick = function () {
        nn = nn - 243;
        if (nn < -980) {
            nn = -980
        }
        small_length.style.marginLeft = nn + "px";
    }
    small_right.onclick = function () {
        nn = nn + 243;
        if (nn > 0) {
            nn = 0
        }
        small_length.style.marginLeft = nn + "px";
    }
    //家电
    var length = homeli.length;

    for (var i = 0; i < length; i++) {
        homeli[i].index = i;
        homeli[i].onmouseover = function () {
            for (var k = 0; k < length; k++) {
                // console.log(lun_left)
                homeli[k].className = "";
                homeul[k].style.display = "none"
                // console.log(lun_right[k]);
            }
            homeli[this.index].className = "active8"
            homeul[this.index].style.display = "block"
        }
    }
// //    智能
    var leng = zhili.length;

    for (var i = 0; i < leng; i++) {
        zhili[i].index = i;
        zhili[i].onmouseover = function () {
            for (var k = 0; k < leng; k++) {
                // console.log(lun_left)
                zhili[k].className = "";
                zhiul[k].style.display = "none"
                // console.log(lun_right[k]);
            }
            zhili[this.index].className = "active7"
            zhiul[this.index].style.display = "block"
        }
    }
//    搭配
    var len = dali.length;

    for (var i = 0; i < len; i++) {
        dali[i].index = i;
        dali[i].onmouseover = function () {
            for (var k = 0; k < len; k++) {
                // console.log(lun_left)
                dali[k].className = "";
                daul[k].style.display = "none"
                // console.log(lun_right[k]);
            }
            dali[this.index].className = "active6"
            daul[this.index].style.display = "block"
        }
    }
// //    配件
    var lenn = armli.length;

    for (var i = 0; i < lenn; i++) {
        armli[i].index = i;
        armli[i].onmouseover = function () {
            for (var k = 0; k < lenn; k++) {
                // console.log(lun_left)
                armli[k].className = "";
                armul[k].style.display = "none"
                // console.log(lun_right[k]);
            }
            armli[this.index].className = "active4"
            armul[this.index].style.display = "block"
        }
    }
// //    周边
    var length1 = rimli.length;

    for (var i = 0; i < length1; i++) {
        rimli[i].index = i;
        rimli[i].onmouseover = function () {
            for (var k = 0; k < length1; k++) {
                // console.log(lun_left)
                rimli[k].className = "";
                rimul[k].style.display = "none"
                // console.log(lun_right[k]);
            }
            rimli[this.index].className = "active5"
            rimul[this.index].style.display = "block"
        }
    }
// //    为你推荐的轮播
    var ll = 0;
    recleft.onclick = function () {
        ll = ll - 1221;
        if (ll < -2442) {
            ll = -2442
        }
        reclength.style.marginLeft = ll + "px";
    }
    recright.onclick = function () {
        ll = ll + 1221;
        if (ll > 0) {
            ll = 0;
        }
        reclength.style.marginLeft = ll + "px";

    }
//    内容第一框
    var lengg = dianli.length;
    for (var j = 0; j < lengg; j++) {
        dianli[j].index = j;
        dianli[j].onmouseover = function () {
            for (var i = 0; i < lengg; i++) {
                one1[i].style.display = "none";
                dianli[i].style.border = "";
                dianli[i].style.background = "#b0b0b0";
            }
            one1[this.index].style.display = "block";
            dianli[this.index].style.border = "2px solid #ff6700"
            dianli[this.index].style.background = "white";
        }
    }
//    内容第一框左尖括号
    var kk = 0;
    kuoleft.onclick = function () {
        kk = kk - 303;
        if (kk < -606) {
            kk = -606
        }
        matterlength.style.marginLeft = kk + "px";
    }
    kuoright.onclick = function () {
        kk = kk + 303;
        if (kk > 0) {
            kk = 0;
        }
        matterlength.style.marginLeft = kk + "px";
    }
    //    内容第二框
    var leng = dianli2.length;
    for (var j = 0; j < leng; j++) {
        dianli2[j].index = j;
        dianli2[j].onmouseover = function () {
            for (var i = 0; i < leng; i++) {
                two2[i].style.display = "none";
                dianli2[i].style.border = "";
                dianli2[i].style.background = "#b0b0b0";
            }
            two2[this.index].style.display = "block";
            dianli2[this.index].style.border = "2px solid #ff6700"
            dianli2[this.index].style.background = "white";
            nummber2=dianli2[this.index].index;
            console.log(nummber2)
        }
    }
//    内容第二框左尖括号
    var kk2 = 303;
    function carousel3(){
        matterlength2.style.marginLeft = -kk2*nummber2 + "px";

    }
    kuoleft2.onclick = function () {
        nummber2=nummber2-1;
        if(nummber2<=0)nummber2=0
    }
    kuoright2.onclick = function () {
        kk = kk + 303;
        if (kk > 0) {
            kk = 0;
        }
        matterlength2.style.marginLeft = kk + "px";
    }
    //    内容第三框
    var nummber1=0;
    var leng = dianli3.length;
    for (var l= 0; l < leng; l++) {
        dianli3[l].index = l;
        dianli3[l].onmouseover = function () {
            for (var i = 0; i < leng; i++) {
                // three3[i].style.display = "none";
                dianli3[i].style.border = "";
                dianli3[i].style.background = "#b0b0b0";
            }
            // three3[this.index].style.display = "block";
            dianli3[this.index].style.border = "2px solid #ff6700"
            dianli3[this.index].style.background = "white";
            nummber1=dianli3[this.index].index;
            console.log(nummber1)
            carousel2();
        }
    }
//    内容第三框左尖括号

    var kk1 = 303;
    function carousel2(){
        matterlength3.style.marginLeft =-kk1*nummber1 + "px";
        for (var i = 0; i < leng; i++) {
            // three3[i].style.display = "none";
            dianli3[i].style.border = "";
            dianli3[i].style.background = "#b0b0b0";
        }
        // three3[this.index].style.display = "block";
        dianli3[nummber1].style.border = "2px solid #ff6700"
        dianli3[nummber1].style.background = "white";
    }
    kuoleft3.onclick = function () {
       nummber1=nummber1-1;
       if(nummber1<=0)nummber1=0;
        carousel2();
    }
    kuoright3.onclick = function () {
       nummber1=nummber1+1;
       if(nummber1>=2)nummber1=2;
        carousel2();
    }
//    第四个框
    var nummber = 0;
    var lengn = dianli4.length;
    for (var j = 0; j < lengn; j++) {
        dianli4[j].index = j;
        dianli4[j].onmouseover = function () {
            for (var i = 0; i < lengn; i++) {
                // four4[i].style.display = "none";
                dianli4[i].style.border = "";
                dianli4[i].style.background = "#b0b0b0";
            }
            // four4[this.index].style.display = "block";
            dianli4[this.index].style.border = "2px solid #ff6700"
            dianli4[this.index].style.background = "white";
            nummber =dianli4[this.index].index;
            console.log(nummber)
            carousel()
        }
    }
//    内容第四框左尖括号
    var kk = 303;
    function carousel(){
        matterlength4.style.marginLeft = -kk*nummber + "px";
            for (j=0;j<lengn;j++){
                dianli4[j].style.border = "";
                dianli4[j].style.background = "#b0b0b0";
            }
            dianli4[nummber].style.border = "2px solid #ff6700"
            dianli4[nummber].style.background = "white";
        }
    kuoleft4.onclick = function () {
        nummber = nummber -1;
        if (nummber <= 0)nummber = 0;
            carousel();
        }
        kuoright4.onclick = function() {
            nummber = nummber +1;
            if (nummber >= 2)nummber =2;
            carousel();
        }
}

