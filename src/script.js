
const btns = document.querySelectorAll('button');

const tabLinks = document.getElementsByClassName("tabLinks");

tabLinks[0].click();

function openContent(event, tabName) {

  // Get all elements with class="tabLinks" and remove the class "active"
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  hideTabs();

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function hideTabs() {
  // Get all elements with class="tabContent" and hide them
  const tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
}
