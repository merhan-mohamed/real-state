document.getElementById('uncomplete-number').onclick = function(){
    document.getElementById('uncomplete-number').style.display = "none"
    document.getElementById('complete-number').style.display = "inline-block"
};

document.getElementById('uncall').onclick = function(){
  document.getElementById('uncall').style.display = "none"
  document.getElementById('call').style.display = "inline-block"
};

document.getElementById('undial').onclick = function(){
  document.getElementById('undial').style.display = "none"
  document.getElementById('dial').style.display = "inline-block"
};

document.getElementById('press').onclick = function(){
    document.getElementById('press').style.display = "none"
    document.querySelectorAll('.hide-row').forEach(function(val){
        val.style.display = "revert"
    }) ;

};

$(document).ready(function(){
    $(".map-link").magnificPopup({
        type:"inline",
    })
})

//Sticky for Navbar
window.onscroll = function() {
  NavBar();
  SideBar();

};

var navbar = document.getElementById("subheader");
var Ratings = document.getElementById("Ratings");
var sticky = navbar.offsetTop;
var end = Ratings.offsetTop

function NavBar() {
  if ((window.pageYOffset >= sticky) && (window.pageYOffset <= end) ){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Sticky for Sidebar


var sidebar = document.getElementById("calling");
var Ratings = document.getElementById("Ratings");
var list = document.getElementById('footer');
var start = Ratings.offsetTop
var finish = list.offsetTop

function SideBar() {
  if (window.pageYOffset >= start) {
    sidebar.classList.add("stic")
  } else {
    sidebar.classList.remove("stic");
  }
}

//stop sticky for sidebar
function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var footer_top = $("#products").offset().top;
  var div_top = $('#sticky-anchor').offset().top;
  var div_height = $("#calling").height();

  var padding = 20;  // tweak here or get from margins etc

  if (window_top + div_height > footer_top - padding)
      $('#calling').css({top: (window_top + div_height - footer_top + padding) * -1})
  else if (window_top > div_top) {
      $('#calling').addClass('stic');
      $('#calling').css({top: 0})
  } else {
      $('#calling').removeClass('stic');
  }
}

$(function () {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});


//lightgallery

lightGallery(document.getElementById('lightgallery'));
lightGallery(document.getElementById('Gallery'));
lightGallery(document.getElementById('Lastlightgallery'))
    
//Ratings
const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});





  