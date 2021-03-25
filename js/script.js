// document.getElementById("facebook-button").onclick = function () {
//   location.href = "index.html";
// };

// document.getElementById("twitter-button").onclick = function () {
//   location.href = "index.html";
// };



var slider = document.querySelector(".slide-wr");

document.getElementById("back").onclick = () => {
  const c = 33.33;
  let left = slider.style.transform.split("%")[0].split("(")[1];
  if (left) {
    var num = Number(left) + Number(c);
  } else {
    var num = Number(c);
  }
  slider.style.transform = `translateX(${num}%)`;

  if (left == -166.65) {
    slider.addEventListener("transitionend", myfunc);
    function myfunc() {
      this.style.transition = "none";
      this.style.transform = `translateX(-299.97%)`;
      slider.removeEventListener("transitionend", myfunc);
    }
  } else {
    slider.style.transition = "all 0.5s";
  }
};

document.getElementById("forward").onclick = () => {
  const c = -33.33;
  let left = slider.style.transform.split("%")[0].split("(")[1];
  if (left) {
    var num = Number(left) + Number(c);
  } else {
    var num = Number(c);
  }

  slider.style.transform = `translateX(${num}%)`;

  if (left == -299.97) {
    console.log("reached the border");
    slider.addEventListener("transitionend", myfunc);
    function myfunc() {
      this.style.transition = "none";
      this.style.transform = `translateX(-166.65%)`;
      slider.removeEventListener("transitionend", myfunc);
    }
  } else {
    slider.style.transition = "all 0.5s";
  }
};

const sliderChildren = document.getElementsByClassName("slide-wr")[0].children;
slider.style.transform = `translateX(${sliderChildren.length * -33.33}%)`;
Array.from(sliderChildren)
  .slice()
  .reverse()
  .forEach((child) => {
    let cln = child.cloneNode(true);
    cln.classList += " cloned before";
    slider.insertBefore(cln, sliderChildren[0]);
  });

Array.from(sliderChildren).forEach((child) => {
  let cln = child.cloneNode(true);
  if (child.classList.contains("cloned") === false) {
    cln.classList += " cloned after";
    slider.appendChild(cln);
  }
});




(function($) {
  // target element for scroll
  var $link = $("a[href='#top']");
  var settings = {
    offset: 50 // hide position
  };
  var state = {
    isVisible: false,
    shouldVisible: false
  };
  // Handle toggle icon base on window.scrolltop
  function toggleControl () {
    var scrolltop = $(window).scrollTop();
    state.shouldVisible = (scrolltop >= settings.offset) ? true : false;
    if (state.shouldVisible && !state.isVisible){
      $link.slideDown('fast');
      state.isVisible = true;

    } else if (state.shouldVisible == false && state.isVisible){
      $link.slideUp('fast');
      state.isVisible = false;
    }
  }
  // Handle click event
  $link.click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  // Attach function to toggle scroll icon
  $(window).bind('scroll resize', function(e){
    toggleControl();
  });
})(window.jQuery);



const btn = document.querySelector('#li-generate');
const inpt = document.querySelector('#inputValue');
const ul = document.querySelector('.ulList');

//const deleteLi = document.querySelector('.remove');

btn.addEventListener('click', liGenerate);
document.addEventListener('click', liDelete);

function liGenerate(e) {
  const li = document.createElement('li');
  
  if(inpt.value !== "") {
    li.className = "collection-item red-text lighten-2"; 
    //const liContent = document.createTextNode(`${inpt.value}`);
    li.innerHTML = ` 
    <hr>
    <h4 class="John-comments">John Doe</h4><br> 
    <div class="time-two time">
    <img class="icon" src="img/Time_50px.png">
    <p>1 min ago</p><br>
    </div> 
  ${inpt.value} 
  <div class="reply">
    <img class="icon" src="img/Reply All Arrow_52px_1.png">
     <p>Reply</p>
     </div>`;

    //li.appendChild(liContent);
    ul.appendChild(li);

    inpt.value = "";
  }
  e.preventDefault();
}

function liDelete(e) {
  if(e.target.className === 'remove') {
    e.target.parentElement.remove();
  }
}


apearBtn = document.getElementById("preview");

function clickBtn() {
  apearBtn.style.display = "block";
};


$(document).ready(function() {
  $("#add").click(function() {
      var intId = $("#buildyourform div").length + 1;
      var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/> ");
      var fName = $("<input type=\"text\" class=\"fieldname\" />");
      var fType = $("");
      var removeButton = $("");
      removeButton.click(function() {
          $(this).parent().remove();
      });
      fieldWrapper.append(fName);
      fieldWrapper.append(fType);
      fieldWrapper.append(removeButton);
      $("#buildyourform").append(fieldWrapper);
  });
  $("#preview").click(function() {
      $("#yourform").remove();
      var fieldSet = $("<fieldset id=\"yourform\"> <div class=\"div-center-two container-center-two div-post-new\"><img class=\"john-image\" src=\"img/John.jpg\"> <h4>John Doe</h4><br> <a href=\"#\"><img class=\"icon-ellipsis\" src=\"img/Menu Vertical_48px.png\"></a> <div  class=\"time\"><img class=\"icon\" src=\"img/Time_50px.png\"><p>3 min ago</p><br></div> <img src=\"img/epic-coder.jpg\"><p style=\"display: inline-block;margin-right: 15px;\">Epic Coder</p><div style=\"background-color: #53d690;display: inline-block; border-radius: 50%;padding: 0px 3px 3px 3px;\"><img class=\"icon\" src=\"img/Paper Plane_50px.png\"></div><p>India</p>  <div class=\"icon-letter\"><img src=\"img/Secured Letter_64px.png\"></div><div class=\"icon-bookmark\"><img class=\"icon\" src=\"img/Bookmark_64px.png\"></div>  <h5>Senior Wordpress Developer</h5><button class=\"btn btn-primary\" type=\"button\">Full Time</button><h5 style=\"display: inline-block;\">$ 30 / hr</h5><p class=\"post-project\" style=\"color: #666666;margin-top: 17px;\"><br><br><span>HTML</span><span>PHP</span><span>CSS</span><span>Javascript</span><span>Wordpress</span><hr style=\"margin-top: 2rem;margin-bottom: 2rem;\"><img class=\"icon\" src=\"img/Love_52px.png\"><p><a href=\"#\" class=\"like-comment\">Like</a></p><img src=\"img/25.png\"><img class=\"icon\" src=\"img/Comments_50px.png\"><p><a href=\"#\" class=\"like-comment\">Comment 15</a></p><div class=\"view\"><img class=\"icon\" src=\"img/Eye_48px.png\"><p><a href=\"#\" class=\"like-comment eye\">Views 50</a></p></div></div><br> </div> </fieldset>");
      $("#buildyourform div").each(function() {
          var id = "input" + $(this).attr("id").replace("field","");
          var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
          var input;
          switch ($(this).find("select.fieldtype").first().val()) {
              case "checkbox":
                  input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
                  break;
              case "textbox":
                  input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
                  break;
              case "textarea":
                  input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
                  break;    
          }
          fieldSet.append(label);
          fieldSet.append(input);
      });
      $(".post-project").append(fieldSet);
  });
});


function clickBtnJop() {
  document.getElementById("share").style.display = "block";
};


$(document).ready(function() {
  $("#addjop").click(function() {
      var intId = $("#buildyourjop div").length + 1;
      var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/> ");
      var fName = $("<input type=\"text\" class=\"fieldname experience\" /><input type=\"text\" class=\"fieldnameTwo price \" /><input type=\"text\" class=\"fieldnameThree description\" />");
      var fType = $("");
      var removeButton = $("");
      removeButton.click(function() {
          $(this).parent().remove();
      });
      fieldWrapper.append(fName);
      fieldWrapper.append(fType);
      fieldWrapper.append(removeButton);
      $("#buildyourjop").append(fieldWrapper);
  });
  $("#share").click(function() {
      $("#yourform").remove();
      var fieldSet = $("<fieldset id=\"yourform\"></fieldset>");
      $("#buildyourjop div").each(function() {
          var id = "input" + $(this).attr("id").replace("field","");
          var label = $("<label class = \"experience-label\" id=\"myInput\" for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
          var label1 = $("<label class = \"price-label\" for=\"" + id + "\">" + $(this).find("input.fieldnameTwo").first().val() + "</label>" + "<br>");
          var label11 = $("<label class = \"description-label\" for=\"" + id + "\">" + $(this).find("input.fieldnameThree").first().val() + "</label>");
          var input;
          switch ($(this).find("select.fieldtype").first().val()) {
              case "checkbox":
                  input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
                  break;
              case "textbox":
                  input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
                  break;
              case "textarea":
                  input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
                  break;    
          }
          fieldSet.append(label);
          fieldSet.append(label1);
          fieldSet.append(label11);
          fieldSet.append(input);


      });
      $("#jops").append(fieldSet);
  });
});

function resetJop() {
  document.getElementById("buildyourjop").style.display = "none";
  document.getElementById("share").style.display = "none";
}

function likeColor() {
  document.getElementById("like").style.color = "#e44d3a";
};



apearBtnJop = document.getElementById("reply");

function addReply() {
  apearBtnJop.style.display = "block";
};

$(document).ready(function() {
  $("#addReply").click(function() {
      var intId = $("#buildyourReply div").length + 1;
      var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/> ");
      var fName = $("<input type=\"text\" class=\"fieldname  inpRep \" />");
      var fType = $("");
      var removeButton = $("");
      removeButton.click(function() {
          $(this).parent().remove();
      });
      fieldWrapper.append(fName);
      fieldWrapper.append(fType);
      fieldWrapper.append(removeButton);
      $("#buildyourReply").append(fieldWrapper);
  });
  $("#reply").click(function() {
      $("#yourform").remove();
      var fieldSet = $("<fieldset id=\"yourform\"><div class=\"div-reply\"><h4>John Doe</h4><br><br><div  class=\"time-two\"><img class=\"icon\" src=\"img/Time_50px.png\"><p>1 min ago</p><br></div></div></fieldset>");
      $("#buildyourReply div").each(function() {
          var id = "input" + $(this).attr("id").replace("field","");
          var label = $("<label class=\"theReply\" for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
          var input;
          switch ($(this).find("select.fieldtype").first().val()) {
              case "checkbox":
                  input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
                  break;
              case "textbox":
                  input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
                  break;
              case "textarea":
                  input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
                  break;    
          }
          fieldSet.append(label);
          fieldSet.append(input);


      });
      $("#AddReply").append(fieldSet);
  });
});

function resetReply() {
  document.getElementById("reply").style.display = "none";
  document.getElementById("buildyourReply").style.display = "none";
}

function morePeople() {
  document.getElementById("morePeople").style.display = "block";
}

function morePragragh() {
  document.getElementById("morePragragh").style.display = "block";
}