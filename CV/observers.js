window.onscroll = function () {
  scrollFunction();
  scrollFunction1();
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}

function scrollFunction1() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbarNavAltMarkup").style.display = "";
  } else {
    document.getElementById("navbarNavAltMarkup").style.display = "none";
  }
}
