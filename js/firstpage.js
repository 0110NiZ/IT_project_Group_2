function redirectTo(pageUrl) {
    window.location.href = pageUrl;// Redirects the user to the specified page URL
}

window.onload=function(){
    var items=document.getElementsByClassName("item");
    var circles=document.getElementsByClassName("circle");
    var leftBtn=document.getElementById("btn-left");
    var rightBtn=document.getElementById("btn-right");
    var content=document.querySelector('.content');
    var index=0;
    var timer=null;

    var clearclass=function(){   // Clears the active classes from items and circles
        for(let i=0;i<items.length;i++){
            items[i].className="item";
            circles[i].className="circle";
            circles[i].setAttribute("num",i);
        }
    }
    
    function move(){ // Moves to the next item and updates the active classes
        clearclass();
        items[index].className="item active";
        circles[index].className="circle white";
    }
    
    rightBtn.onclick=function(){ // Event handler for right button click
        if(index<items.length-1){
            index++;
        }
        else{
            index=0;
        }
        move();
    }
    
    leftBtn.onclick=function(){ // Event handler for left button click
        if(index<items.length){
            index--;
        }
        else{
            index=items.length-1;
        }
        move();
    }
    
    timer=setInterval(function(){ // Automatically move to the next item at a set interval
        rightBtn.onclick();
    },1500)
    
    for(var i=0;i<circles.length;i++){ // Event handlers for circle clicks
        circles[i].addEventListener("click",function(){
            var point_index=this.getAttribute("num");
            index=point_index;
            move();
        })
    
    }
    
    content.onmouseover=function(){ // Pause the auto movement on content hover
        clearInterval(timer);
            timer=setInterval(function(){
                rightBtn.onclick();
            },3000)
    }
    
    content.onmouseleave=function(){ // Resume the auto movement on content mouse leave
        clearInterval(timer);
        timer=setInterval(function(){
            rightBtn.onclick();
        },1500)
    }
    }
    