// Step 1: Grab toggle button with query selector

// Step 2: Add event listener to that button from Step 1 and listen for click

// Step 3: Inside of event listener add and remove (or simply toggle) "dark-theme" CSS class

function check() {
  var checkBox = document.getElementById("Box");
  var price1 = document.getElementsByClassName("price__1");
  var price2 = document.getElementsByClassName("price__2");
  for (var i = 0; i < price1.length; i++) {
    if (checkBox.checked == true) {
      price1[i].style.display = "block";
      price2[i].style.display = "none";
    } else if (checkBox.checked == false) {
      price1[i].style.display = "none";
      price2[i].style.display = "block";
    }
  }
}
check();
