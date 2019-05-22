console.log("werkt");

// window.addEventListener("load", function(){
//   document.getElementById("bonHolder").classList.add('fadeOut')
// });
//
// onclick="overlay(this.dataset.value, this.dataset.type)

function buttonPlace() {
  var body = document.getElementById("body");
  if (body) {
    body.innerHTML += `
    <div class="pushButton"></div>
      <div class="bottomButtonHolder transition">
        <a href="#Next" class="buttonGo borderRadius hoverShadow transition" type="button" name="button">
          Topping #
        </a>
      </div>
      `;
  }
}

if (document.getElementsByClassName("bottomButtonHolder")[0]) {
  window.onscroll = function(ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document
        .getElementsByClassName("bottomButtonHolder")[0]
        .classList.add("fadeOut");
    } else {
      document
        .getElementsByClassName("bottomButtonHolder")[0]
        .classList.remove("fadeOut");
    }
  };
}

function removeVis() {
  var vis = document.getElementsByClassName("check-with-label");
  var visArray = Array.from(vis);
  visArray.forEach(function(elem) {
    elem.classList.add("notVisable");
  });
}

function horizonView() {}

// overlay(this.dataset.value, this.dataset.type)

// onclick="overlay(this.dataset.value, this.dataset.type)

function overlay(a) {
  var overlay = document.getElementsByClassName(a.dataset.value);
  var htmlObject = document.getElementsByClassName(a.dataset.type);
  var selectedArray = Array.from(htmlObject);
  selectedArray.forEach(function(overlay) {
    overlay.classList.remove("fadeOut");
  });
  overlay[0].classList.add("fadeOut");
}

function addEvents() {
  var opties = document.getElementsByClassName("opties");
  var optiesArray = Array.from(opties);
  for (let i = 0; i < optiesArray.length; i++) {
    optiesArray[i].addEventListener("click", function() {
      overlay(this)
    });
  }
}


removeVis();
buttonPlace();
addEvents();
