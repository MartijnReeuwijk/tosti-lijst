
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

  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          document.getElementsByClassName('bottomButtonHolder')[0].classList.add('fadeOut')
      }else {
        document.getElementsByClassName('bottomButtonHolder')[0].classList.remove('fadeOut')
      }
  };

  function removeVis() {
    var vis = document.getElementsByClassName('check-with-label')
    var visArray = Array.from(vis);

    visArray.forEach(function(elem){
        elem.classList.add('notVisable')
    });
  }

  function horizonView() {

  }


  removeVis();
  buttonPlace();

function overlay(a , b) {
    var overlay = document.getElementsByClassName(a)
    var htmlObject = document.getElementsByClassName(b)
    var selectedArray = Array.from(htmlObject);
    selectedArray.forEach(function(overlay){
      overlay.classList.remove('fadeOut')
    });
    overlay[0].classList.add('fadeOut')
}

const opties = document.getElementsByClassName('opties');
const optiesArray = Array.from(opties);

optiesArray.forEach(elem => {
  elem.addEventListener("click", overlay(elem.dataset.value, elem.dataset.type))
});
