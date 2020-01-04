var searchbox = document.querySelector('input.search-box');
var searchbutton = document.querySelector('button.search-button');
var spanicon = document.querySelector('span.fa');

searchbutton.addEventListener('click', function() {
    searchbutton.classList.add('active');
    searchbox.classList.add('active', 'slide-in-right');
    searchbox.focus();
    spanicon.classList.replace('fa-search', 'fa-spinner');
    spanicon.classList.add('rotate-scale-up');
    console.log('actie');
});

var main = document.querySelector('main');

main.addEventListener('click', function() {
  spanicon.classList.replace('fa-spinner', 'fa-search');
  searchbox.classList.remove('active');
  searchbutton.classList.remove('active');
  spanicon.classList.remove('rotate-scale-up');
  console.log('klik weg');
});


function myFunction() {
  // Declare variables
  var input, filter, ul, li, h2, i, txtValue;
  input = document.querySelector('input.search-box');
  filter = input.value.toUpperCase();
  ul = document.getElementById("mySection");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h2 = li[i].getElementsByTagName("h2")[0];
    txtValue = h2.textContent || h2.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}