(function() {
  "use strict";
  function buttonPlace() {
    const body = document.getElementById("body");
    body.innerHTML += `
    <div class="pushButton"></div>
      <div class="bottomButtonHolder transition">
        <a href="#Next" class="buttonGo borderRadius hoverShadow transition" type="button" name="button">
          Topping #
        </a>
      </div>
      `;
  }

  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          document.getElementsByClassName('bottomButtonHolder')[0].classList.add('fadeOut')
      }else {
        document.getElementsByClassName('bottomButtonHolder')[0].classList.remove('fadeOut')
      }
  };


  function removeVis() {
    const vis = document.getElementsByClassName('check-with-label')
    const visArray = Array.from(vis);
    visArray.forEach(elem => {
        elem.classList.add('notVisable')
    });
  }

  function horizonView() {

  }


  removeVis();
  buttonPlace();
})();
function overlay(a , b) {
    const overlay = document.getElementsByClassName(a)
    const htmlObject = document.getElementsByClassName(b)
    const selectedArray = Array.from(htmlObject);
    selectedArray.forEach(overlay => {
      overlay.classList.remove('fadeOut')
    });
    overlay[0].classList.add('fadeOut')
}
