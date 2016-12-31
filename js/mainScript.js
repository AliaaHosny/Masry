
$(document).ready(function(){
$(".verticalCarousel").verticalCarousel({
  // current item to display on start
  currentItem: 1,
  // number of items to display at a time
  showItems: 2,
  showItems: 3,
  showItems: 4,

});
$(".verticalCarousel-2").verticalCarousel({
  // current item to display on start
  currentItem: 1,
  // number of items to display at a time
  showItems: 2,
  showItems: 3,
  showItems: 4,

});
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}