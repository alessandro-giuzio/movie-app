const global = {
  currentPage: window.location.pathname
};
console.log(global.currentPage);


// Highlight active link

function HighlightActiveLink(){
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if(link.getAttribute('href') === global.currentPage){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  })
}


// Init App
function init(){
  switch(global.currentPage){
    case '/':
    case '/index.html':
      console.log('Home Page');
      break;
    case '/shows.html':
      console.log('Shows Page');
      break;
    case '/movie-details.html':
      console.log('Movie Details Page');
      break;
    case '/tv-details.html':
      console.log('TV Details Page');
      break;
    case '/search.html':
      console.log('Search Page');
      break;
  }

  HighlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);