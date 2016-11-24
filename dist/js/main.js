
glMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:
    typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;

var mat4={};

mat4.create=function(a){
    var b=new glMatrixArrayType(16);
    if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];
        b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b
};

mat4.set=function(a,b){
    b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];
    b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b
};

mat4.identity=function(a){
    a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;
    a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a
};

mat4.transpose=function(a,b){
    if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];
        a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}
    b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];
    b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b
};

mat4.multiply=function(a,b,c){
    c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],
        m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],
        w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];
    c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;
    c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;
    c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;
    c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;
    return c
};

mat4.translate=function(a,b,c){
    var d=b[0],e=b[1];b=b[2];
    if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];
        a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}
    var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];
    c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;
    c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c
};

mat4.scale=function(a,b,c){
    var d=b[0],e=b[1];b=b[2];
    if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;
        a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}
    c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;
    c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];
    c[14]=a[14];c[15]=a[15];return c
};

mat4.rotate=function(a,b,c,d){
    var e=c[0],g=c[1];c=c[2];
    var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;
    if(f!=1){f=1/f;e*=f;g*=f;c*=f}
    var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];
    var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],
        t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;
    if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;
    d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*v;
    d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;
    d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d
};

mat4.rotateX=function(a,b,c){
    var d=Math.sin(b);b=Math.cos(b);
    var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];
    if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}
    else c=a;
    c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;
    c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c
};

mat4.rotateY=function(a,b,c){
    var d=Math.sin(b);b=Math.cos(b);
    var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];
    if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}
    else c=a;
    c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;
    c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c
};

mat4.rotateZ=function(a,b,c){
    var d=Math.sin(b);b=Math.cos(b);
    var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];
    if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}
    else c=a;
    c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;
    c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c
};

mat4.frustum=function(a,b,c,d,e,g,f){
    f||(f=mat4.create());
    var h=b-a,i=d-c,j=g-e;
    f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;
    f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;
    f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f
};

mat4.perspective=function(a,b,c,d,e){
    a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)
};

mat4.ortho=function(a,b,c,d,e,g,f){
    f||(f=mat4.create());
    var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;
    f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f
};

mat4.lookAt=function(a,b,c,d){
    d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];
    if(e==b[0]&&g==c&&a==j)return mat4.identity(d);
    var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);
    c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;
    if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}
    else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;
    if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}
    else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;
    d[9]=o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d
};

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

window.cancelAnimationFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function (timer) {
            window.clearTimeout(timer);
        };
})();

var shapeVertexTextureCoordBuffer;
var shapeVertexPositionBuffer;
var Texture;
var mvMatrix = mat4.create();

var CamMatrix = mat4.create();
var pMatrix  = mat4.create();
var totalMatrix=mat4.create();
var imgElement;
var xRot = 45;
var yRot = 0;
var zRot = 0
var mouseDown = false;
var lastMouseX = null;
var lastMouseY = null;
var m_cur_yAngle=0;
var m_cur_xAngle=0;
var m_max_yAngle=60;
var m_max_xAngle=60;
var  _eyePosition_y=0;
var  _eyePosition_z=0;
var  _eyePosition_x=0;
var m_cur_eye_scale=1;
var  target_y=0;
var  target_z=-0.5;
var m_y_ratate_ratio=0;
var m_x_ratate_ratio=0;
var lastMoveTime=0;
var lastX;
var lastY;
function webGLStart(src,c_offsetWidth,c_offsetHeight,naturalWidth,naturalHeight) {
    var canvas = document.getElementById("canvas");
    initGL(canvas,c_offsetWidth,c_offsetHeight);
    m_y_ratate_ratio=90/c_offsetWidth;
    m_x_ratate_ratio=90/c_offsetHeight;

    initTexture();
    imgElement=document.createElement("img");
    imgElement.src=src;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    if(type==1){
        initShaders();
        initBuffers(naturalWidth,naturalHeight);
        tick();
    }else{
        handleLoadedData();
        initShader360();
        tickfisheye();
    }

    //滚轮事件webkit
    canvas.addEventListener("mousewheel", MouseWheelHandler, false);
    canvas.addEventListener("DOMMouseScroll", MouseWheelHandler, false);

    canvas.addEventListener('touchstart',touchStart, false);
    canvas.addEventListener('touchmove',touchMove, false);
    canvas.addEventListener('touchend',touchEnd, false);

    canvas.onmousedown = handleMouseDown;
    canvas.onmouseup = handleMouseUp;
    canvas.onmousemove = handleMouseMove;

    touch.on('#canvas', 'touchstart', function(ev){
        ev.preventDefault();

    });
    touch.on('#canvas', 'pinchout', function(ev){
        //alert(1);
        window.cancelAnimationFrame(animRequest);
        m_cur_eye_scale++;
    });
    touch.on('#canvas', 'pinchin', function(ev){
        window.cancelAnimationFrame(animRequest);
        m_cur_eye_scale--;
    });
}
function touchStart(event){
    mouseDown = true;
    window.cancelAnimationFrame(animRequest);
    lastX=lastMouseX=event.touches[0].clientX;
    lastY=lastMouseY=event.touches[0].clientY;
    lastMoveTime=event.timeStamp || new Date();
}

function touchMove(event){
    if (mouseDown) {
        event.preventDefault();
        var curTime=event.timeStamp || new Date();
        var delTime=curTime-lastMoveTime;
        if(delTime>400){
            var newX = event.touches[0].clientX;
            var newY = event.touches[0].clientY;
            var dx= newX-lastMouseX;
            var dy= newY-lastMouseY;
            domove(dx,dy);
            lastMouseX = newX;
            lastMouseY = newY;
        }

    }
}
function touchEnd(event){
    mouseDown = false;
    var vx= 0,vy=0;
    var spring=0.1;
    var friction = 0.95;
    var curTime=event.timeStamp || new Date();
    var delTime=curTime-lastMoveTime;
    if(delTime>500){
          return false;
    }else{
          (function drawFrame() {
            animRequest = window.requestAnimationFrame(drawFrame);
            var  newX = event.changedTouches[0].clientX;
            var  newY = event.changedTouches[0].clientY;

            var  dx = newX - lastX;
            var  dy = newY - lastY;

            //加速度
            var ax = dx * spring;
            var ay = dy * spring;

            // 速度
            vx += ax;
            vy += ay;

            vx *= friction;
            vy *= friction;

            domove(vx,vy);
            if(Math.abs(vx)<0.4||Math.abs(vy)<0.4){
                friction=1;
            }
           // console.log("log"+vx);
            lastX = newX;
            lastY = newY;

        })();
    }
}
//鼠标按下
function handleMouseDown(event) {
    mouseDown = true;
    window.cancelAnimationFrame(animRequest);
    lastX=lastMouseX=event.clientX;
    lastY=lastMouseY= event.clientY;
    lastMoveTime=event.timeStamp || new Date();
    //console.log(lastMouseX,lastMouseY);
}
//鼠标松开
function handleMouseUp(event) {

    mouseDown = false;
    var vx= 0,vy=0;
    var spring=0.1;
    var friction = 0.95;
    var curTime=event.timeStamp || new Date();
    var delTime=curTime-lastMoveTime;
    if(delTime>500){
        return false;
    }else{
        (function drawFrame() {

            animRequest = window.requestAnimationFrame(drawFrame);

            var  newX = event.clientX;
            var  newY = event.clientY;

            var  dx = newX - lastX;
            var  dy = newY - lastY;

            //加速度
            var ax = dx * spring;
            var ay = dy * spring;

            // 速度
            vx += ax;
            vy += ay;

            vx *= friction;
            vy *= friction;

            domove(vx,vy);
            if(Math.abs(vx)<0.4||Math.abs(vy)<0.4){
                friction=1;

            }
            // console.log("log"+vx);

            lastX = newX;
            lastY = newY;

        })();
    }

}

//鼠标拖动
function handleMouseMove(event) {
    if (mouseDown) {
        if (mouseDown) {
            event.preventDefault();
            var curTime=event.timeStamp || new Date();
            var delTime=curTime-lastMoveTime;
            if(delTime>400){
                var newX = event.clientX;
                var newY = event.clientY;
                var dx= newX-lastMouseX;
                var dy= newY-lastMouseY;
                domove(dx,dy);
                lastMouseX = newX;
                lastMouseY = newY;
            }

        };
    }
}

//鼠标滚轮放大
function MouseWheelHandler(event) {
    event.preventDefault();
    window.cancelAnimationFrame(animRequest);
    // WebKit

    if (event.wheelDeltaY ) {

        if (event.wheelDeltaY == 120) {
            // 向上滚动
            m_cur_eye_scale++;
            // _eyePosition_x++;
            // _eyePosition_y++;
        } else {
            // 向下滚动
            //console.log( "向下滚动");
            m_cur_eye_scale--;
            // _eyePosition_x--;
            // _eyePosition_y--;
        }

    } else if ( event.detail ) {

        if (event.detail == -3) {
            // 向上滚动
            m_cur_eye_scale++;;
        } else {
            // 向下滚动
            m_cur_eye_scale--;
        }

    }

    //console.log(_eyePosition_z)
}


//初始化Texture
function initTexture() {
    Texture = gl.createTexture();
}

//角度换算
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function tick() {
        window.requestAnimationFrame(tick);
        drawScene();
}
function tickfisheye(){
    window.requestAnimationFrame(tickfisheye);
    drawScenefisheye();
}
var shaderProgram;
function initShaders() {
    var fShaderStr="precision mediump float;" +
            "varying vec2 v_texCoord;" +
            "uniform sampler2D uSampler;" +
            "void main(void){" +
            "if (v_texCoord.y < 0.0 || v_texCoord.y >1.0){ "+
            "gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);"+
            "}else{"+
            "gl_FragColor = texture2D(uSampler, vec2(v_texCoord.s, v_texCoord.t));" +
            "}"+
            "}";
    var  vShaderStr = " attribute vec4 a_position;" +
        "attribute vec2 a_texCoord;" +
        "varying vec2 v_texCoord;" +
        "uniform mat4 Projection;" +
        "void main()" +
        "{gl_Position = Projection*a_position;" +
        "v_texCoord = a_texCoord;}";

    var fragmentShader = getShader(gl, fShaderStr,"fragment");
    var vertexShader = getShader(gl, vShaderStr,"vertex");

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }
    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "a_position");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "a_texCoord");
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

    shaderProgram._projectionUniform = gl.getUniformLocation(shaderProgram, "Projection");
    shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
}
function handleLoadedData() {

    shapeVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexTextureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(f_vertexTextureCoords), gl.STATIC_DRAW);
    shapeVertexTextureCoordBuffer.itemSize = 2;
    shapeVertexTextureCoordBuffer.numItems = f_vertexTextureCoords.length / 2;

    shapeVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(f_vertexPositions),gl.STATIC_DRAW);
    shapeVertexPositionBuffer.itemSize = 3;
    shapeVertexPositionBuffer.numItems = f_vertexPositions.length / 3;

    shapeVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, shapeVertexIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    shapeVertexIndexBuffer.itemSize = 1;
    shapeVertexIndexBuffer.numItems = indices.length;
}
function initShader360() {

    var fShaderStr="precision mediump float;" +
        "varying vec2 vTextureCoord;" +
        "uniform sampler2D uSampler;" +
        "void main(void){" +
        "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));" +
        "}";
    var vShaderStr="attribute vec3 aVertexPosition;" +
        "attribute vec2 aTextureCoord;" +
        "uniform mat4 uMVMatrix;" +
        "varying vec2 vTextureCoord;" +
        "void main(void){" +
        "gl_Position = uMVMatrix * vec4(aVertexPosition, 1.0);" +
        "vTextureCoord = aTextureCoord;}";
    var fragmentShader = getShader(gl,fShaderStr,"fragment");
    var vertexShader = getShader(gl,vShaderStr,"vertex");

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
    gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
}
function getShader(gl,str,type) {

    var shader;
    if (type == "fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (type == "vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}
function initBuffers(naturalWidth,naturalHeight) {

    var     _nVideoWidth=naturalWidth;
    var     _nVideoHeight=naturalHeight;
    var     fSpaceLeft=getParameter("left");
    var     fSpaceRight=getParameter("right");
    var     fSpaceTop=getParameter("top");
    var     fSpaceBottom=getParameter("bottom");
    var     m_video_space_left=fSpaceLeft;
    var     m_video_space_right=fSpaceRight;
    var     m_video_space_top=fSpaceTop;
    var     m_video_space_bottom =fSpaceBottom;


    for (var i=0; i<Vertices_cg.length; i+=5) {
        Vertices_cg[i+3] = Vertices_cg[i+3]*(_nVideoWidth - m_video_space_left - m_video_space_right) /  _nVideoWidth + m_video_space_left/_nVideoWidth;
        Vertices_cg[i+4] = Vertices_cg[i+4]*(_nVideoHeight - m_video_space_top - m_video_space_bottom) / _nVideoHeight + m_video_space_top/_nVideoHeight;
        vertexTextureCoords.push(Vertices_cg[i+3],Vertices_cg[i+4]);
        vertexPositions.push(Vertices_cg[i],Vertices_cg[i+1],Vertices_cg[i+2]);
    }

    shapeVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositions), gl.STATIC_DRAW);

    shapeVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexTextureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexTextureCoords), gl.STATIC_DRAW);
}
function getfinalMVPMatrix() {
    mat4.identity(totalMatrix);
    mat4.multiply( pMatrix,mvMatrix, totalMatrix );
}
function updateTexture() {
    gl.bindTexture(gl.TEXTURE_2D, Texture);

    //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, imgElement);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, null);
}
function domove(xx_offset,yy_offset){
    if(type==1){
        m_cur_yAngle+=(xx_offset*m_y_ratate_ratio);
        m_cur_xAngle+=(yy_offset*m_x_ratate_ratio);

        if (m_cur_xAngle>m_max_xAngle) {
            m_cur_xAngle=m_max_xAngle;
        }
        else if(m_cur_xAngle<-m_max_xAngle){
            m_cur_xAngle=-m_max_xAngle;
        }
        if (m_cur_yAngle>m_max_yAngle) {
            m_cur_yAngle=m_max_yAngle;
        }
        else if(m_cur_yAngle<-m_max_yAngle){
            m_cur_yAngle=-m_max_yAngle;
        }
    }else{

        zRot+=xx_offset / 10.0;
        xRot-=yy_offset / 10.0;
    }

}

function drawScene() {

    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    updateTexture();
    mat4.identity(pMatrix);
    mat4.perspective(60, gl.viewportWidth / gl.viewportHeight, 0.02, 5000.0, pMatrix);
    mat4.identity(mvMatrix);
    if (m_cur_eye_scale<1)
    {
        m_cur_eye_scale=1;
        var zoomMask  = document.querySelector(".imgzoom_pack");
        zoomMask.style.cssText = "display:none";
        window.cancelAnimationFrame(tick);
        window.cancelAnimationFrame(animRequest);
    }
    if (m_cur_eye_scale>17) {
        m_cur_eye_scale=17;
    }
    _eyePosition_z=0-0.2*(m_cur_eye_scale-1)/8;

    mat4.lookAt([0, _eyePosition_y, _eyePosition_z], [0,target_y,target_z], [0,1,0], mvMatrix);



    mat4.rotate(mvMatrix, degToRad(-m_cur_xAngle), [1, 0, 0]);
    mat4.rotate(mvMatrix, degToRad(-m_cur_yAngle), [0, 1, 0]);


    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

    getfinalMVPMatrix();

    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexTextureCoordBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 2, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Texture);
    gl.uniform1i(shaderProgram.samplerUniform, 0);
    gl.uniformMatrix4fv(shaderProgram._projectionUniform, false, totalMatrix);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vertexNums_0);
    gl.drawArrays(gl.TRIANGLE_STRIP, vertexNums_0, vertexNums_1);
}

function drawScenefisheye() {
    var minTilt, maxTilt, minPan, maxPan;
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    updateTexture();

    if (shapeVertexPositionBuffer == null || shapeVertexTextureCoordBuffer == null || shapeVertexIndexBuffer == null) {
        return;
    }

    mat4.identity(CamMatrix);
    mat4.perspective(60, gl.viewportWidth / gl.viewportHeight, 0.02, 5000.0, CamMatrix);

    minTilt = 0;
    if( minTilt < -90 )minTilt = -90;
    maxTilt = 180;
    if( maxTilt > 90 )maxTilt = 90;
    if( xRot > maxTilt )xRot = maxTilt;
    if( xRot < minTilt )xRot = minTilt;

//	minPan = 70;
//	if( minPan < 0 ) minPan = -minPan;
//	maxPan = 91 + minPan;
//	minPan = -91 - minPan;
    while( zRot >= 360 ) zRot -= 360;
    while( zRot < 0 ) zRot += 360;
//	if( zRot > 180 ) zRot -= 360;
//	if( zRot > maxPan )zRot = maxPan;
//	if( zRot < minPan )zRot = minPan;
    console.log(xRot);
    if (xRot<10){
        xRot=45;
        window.cancelAnimationFrame(tick);
        window.cancelAnimationFrame(animRequest);
    }
    mat4.rotate(CamMatrix, degToRad(80+xRot), [1, 0, 0]);
    mat4.rotate(CamMatrix, degToRad(zRot), [0, 0, 1]);

    mat4.identity(mvMatrix);
    mat4.rotate(mvMatrix, degToRad(0), [1, 0, 0]);
    //
    // mat4.identity(mvMatrix);
    if (m_cur_eye_scale<1)
    {
        m_cur_eye_scale=1;
        var zoomMask  = document.querySelector(".imgzoom_pack");
        zoomMask.style.cssText = "display:none";
        window.cancelAnimationFrame(tick);
        window.cancelAnimationFrame(animRequest);
    }
    if (m_cur_eye_scale>20) {
        m_cur_eye_scale=20;
    }
    _eyePosition_z=m_cur_eye_scale;

    mat4.lookAt([0, 0, _eyePosition_z], [0,0,0], [0,1,0], mvMatrix);


    mat4.identity(totalMatrix);
    mat4.multiply( CamMatrix, mvMatrix, totalMatrix );

    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, shapeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, shapeVertexTextureCoordBuffer);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, shapeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Texture);
    gl.uniform1i(shaderProgram.samplerUniform, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, shapeVertexIndexBuffer);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, totalMatrix);
    gl.drawElements(gl.TRIANGLES, shapeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}
