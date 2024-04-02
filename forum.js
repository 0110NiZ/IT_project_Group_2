      var dataArr1 = {imgSrc: "picture/ren.png" };// Declare and initialize variables
      var dataArr2 = localStorage.getItem('username1');
      var text = document.querySelector('#area');
      var btn_send = document.querySelector('#send'); 
      var count = document.querySelector('#useCount');
      var uls = document.querySelector('#list');
      text.oninput = function(){ // Event handler for input event on the 'text' element
        count.innerHTML = this.value.trim().length;
      }
      btn_send.onclick = function(){  // Event handler for click event on the 'btn_send' element
        if(text.value.length == 0){
          alert('Please enter the content first and then click the publish button');
        }
        let new_li = document.createElement('li');// Create a new list item element and populate it with content
        new_li.innerHTML = `
          <div class="info">
            <img class="userpic" src=${dataArr1.imgSrc} />
            <span class="username">${dataArr2}</span>
            <p class="send-time">${new Date().toLocaleString()}</p>
          </div>
          <div class="content">${text.value + '\n'}</div>
        `;
        console.log(new_li);
        uls.appendChild(new_li);

        text.value = '';
        count.innerHTML = 0;
      }
      window.onload = function(){  // Event handler for window's load event
            var ulclass = document.querySelector(".ulclass");
            var lis = ulclass.getElementsByTagName("li");
            for(var i=0;i<lis.length;i++){  // Loop through the list items and apply classes and event handlers
                if(i%2==0){
                    lis[i].className = "liclass1";
                } else {
                    lis[i].className = "liclass2";
                }
                lis[i].onmouseover = function(){
                    for(var j=0;j<=Number(this.id);j++){  // Event handler for mouseover event on list items
                        if(j%2==0){
                            lis[j].className="liclass3";
                        } else {
                            lis[j].className="liclass4";
                        }
                    }
                }
                lis[i].onmouseout = function(){  // Event handler for mouseout event on list items
                    for(var j=0;j<lis.length;j++){
                        if(j%2==0){
                            lis[j].className="liclass1";
                        } else {
                            lis[j].className="liclass2";
                        }
                    }
                }
                lis[i].onclick = function(){   // Event handler for click event on list items
                    for(var j=0;j<lis.length;j++){
                        lis[j].onmouseover = null;
                        lis[j].onmouseout = null;
                        lis[j].onclick = null;
                    }
                    alert("Total score:"+(Number(this.id)+1)/2 +" point");// Pop-up window to show overall score
                }
            }
        }  