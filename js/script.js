const global = {
  currentPage: window.location.pathname
};

async function displayPopularMovies(){
  const ressults = await FetchApiData('movie/popular');
  console.log(result);
}


//Fetch data from API
async function FetchApiData(endpoint){
  const API_KEY = '35667ec48817170e0aec9f5e32758579'
  const API_URL = `https://api.themoviedb.org/3/`;

  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

  const data = await response.json();

  return data;
}


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