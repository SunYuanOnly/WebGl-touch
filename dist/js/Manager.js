//<script type="application/javascript" src="js/Manager.js">
var type=0;    //鱼眼类型 type=0,普通 =1,180度   =2,360度
var c_offsetWidth;
var c_offsetHeight;
var time = 7;	//进度条时间，以秒为单位，越小越快
var isPause=false;
var $elem, tick, percentTime;
var offX;
var offY;
var flag=true;
var gl;
var mouseButtonDown=false;
var ef_timer;
var animRequest = null;
var zoomMask;
var canvas;
var zoomClose = $(".imgzoom_pack >.imgzoom_x");
zoomClose.click(function(){
    zoomMask.css('display','none');
    window.cancelAnimationFrame(tick);
    window.cancelAnimationFrame(animRequest);
} );

function close(){
    return false;
}
window.onload=function(){
    $('#owl-demo').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        startDragging: startDragging
    });

    function startDragging(){
        isPause=true;
    }

    canvas = document.getElementById("canvas");
    gl = canvas.getContext("experimental-webgl");
    if (!gl) {
        alert("不支持webgl请升级或更换其他浏览器");
        canvas.style.cssText = "display:none";
        ImagesZoom.init({
            "elem": ".owl-carousel"
        });
        return false;
    }

    if ((navigator.userAgent.indexOf('MSIE') >= 0) ){
        $('.imgzoom_pack').css('display','none');
    }else{

        var imgList = document.querySelectorAll(".owl-carousel img");
        type = parseInt(getParameter('fisheyetype'));
        if(type == 0){
            ImagesZoom.init({
                "elem": ".owl-carousel"
            });
            canvas.style.cssText = "display:none";
        }else{
            for(var len=imgList.length,i=0; i<len; i++){
                imgList[i].addEventListener("mousedown", function(event){
                    mouseButtonDown = true;
                });
                imgList[i].addEventListener("mousemove", function(event){
                    mouseButtonDown = false;
                });
                imgList[i].addEventListener("mouseup", function(event){
                    //判断是否有拖拽动作
                    if (mouseButtonDown) {
                        c_offsetWidth=this.offsetWidth;
                        c_offsetHeight=this.offsetHeight;
                        //c_offsetWidth=this.naturalWidth;
                        // c_offsetHeight=this.naturalHeight;

                            webGLStart(this.src,c_offsetWidth,c_offsetHeight,this.naturalWidth,this.naturalHeight);


                    }
                    else {

                    }
                });
            }
        }
    }
};
var sUserAgent = navigator.userAgent.toLowerCase();
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
function getImageUrl(){
    var objs = document.getElementsByTagName("img");
    // console.log($("div[class='owl-page active']")[0])
    for(var j=0;j<$('.owl-page').length;j++){
        var class_index=$('.owl-page')[j].className;
        if(class_index!="owl-page"){
            for(var i=0;i<objs.length;i++){
                if(i==j){
                    // console.log(objs[i].src);
                    if(( bIsIphoneOs  || bIsIpad )) {
                        console.log('ios');
                        return getImageUrl_ios(objs[i].src,i+1);
                    }else if((bIsAndroid)){
                        console.log('android');
                        //alert(objs[i].src);
                        return window.imagelistner.getImageUrl(objs[i].src,i+1)
                    }else{
                        console.log('else');
                        //console.log(objs[i].src,i+1);
                        var Param={
                            Url:objs[i].src,
                            Index:i+1
                        };
                        console.log(Param);
                        return  objs[i].src;
                    }
                }
            }
        }
    }

}
function initGL(canvas,c_offsetWidth,c_offsetHeight) {
    zoomMask  = $(".imgzoom_pack");
    flag = true;
    try {
        zoomMask.css("display",'block');
        gl = canvas.getContext("experimental-webgl");
        canvas.width =c_offsetWidth;
//          canvas.height =c_offsetHeight;
        canvas.height =c_offsetWidth;
        gl.viewportWidth = c_offsetWidth;
        gl.viewportHeight = c_offsetWidth;
    } catch (e) {
    }

    if (!gl) {
        // alert("不支持webgl请升级或更换其他浏览器");
        canvas.style.cssText = "display:none";
        ImagesZoom.init({
            "elem": ".owl-carousel"
        });
    }
}
function progressBar(elem){
    $elem = elem;
    //start();
}
function getParameter(param)
{
    var query = window.location.search;
    var iLen = param.length;
    var iStart = query.indexOf(param);

    if (iStart == -1)
        return "";

    iStart += iLen + 1;

    var iEnd = query.indexOf("&", iStart);

    if (iEnd == -1)
        return query.substring(iStart);
    return query.substring(iStart, iEnd);
}
//</script>
