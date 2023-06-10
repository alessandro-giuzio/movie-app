const global = {
  currentPage: window.location.pathname
};

async function displayPopularMovies(){
  const {results }= await FetchApiData('movie/popular');
  console.log(results);

  results.forEach(movie =>{
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
            <a href="movie-details.html?${movie.id}">
            ${
              movie.poster_path
              ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />` : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>`

          document.querySelector('#popular-movies') .appendChild(div);
  })

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
      displayPopularMovies();
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