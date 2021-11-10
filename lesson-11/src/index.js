$(document).ready(function () {
  $('#submit-btn').on('click', (e) => {
    const movie = $('#movie').val();
    const type = $('#type').val();
    getMovies(movie, type);
    e.preventDefault();
  });
});

function getMovies(movie, type) {

  const API_KEY = '945578ed';
  let URL = 'https://www.omdbapi.com/?apikey=' + API_KEY + `&s=${movie}&type=${type}`;

  $.ajax({
    method: 'GET',
    url: URL,
    success: function (data) {
      console.log(data);

      pagination(Number(data.totalResults));

    },
  });

  function pagination(movieCount) {

    const length = movieCount / 10;
    let container = $('.page-pagination');

    for (let i = 1; i <= length; i++) {
      let button = $('<button class="pagination-btn"></button>');
      button.text(`${i}`);
      container.append(button);
    };

    $('.page-pagination').on('click', function (e) {

      const pageIsClicked = +e.target.innerText;

      URL = 'https://www.omdbapi.com/?apikey=' + API_KEY + `&s=${movie}&type=${type}&page=${pageIsClicked}`;

      $.ajax({
        method: 'GET',
        url: URL,
        success: function (data) {
          console.log(data);

          const movies = data.Search;
          let output = '';

          $.each(movies, (index, movie) => {
            output += `
              <div class="movie-item">
                <img class="movie-image" src="${movie.Poster}" alt="Sorry, no poster here :(">
                <h4 class="movie-title">${movie.Title}</h4>
                <div class="bottuns-under-movie">
                  <button onclick="getMovieDetails('${movie.imdbID}')" class="movie-more-details">More Details</button>
                  <button onclick="addMovieToFavorites('${movie.Title}')" class="add-movie-favorites" value="${movie.Title}">Add to favorites</button>
                </div>
              </div>
            `;
          });

          $('.movie-container').html(output);
        }
      });
    });
  };
};


function getMovieDetails(id) {
  let selectedMovieId = id;
  console.log(selectedMovieId);

  const API_KEY = '945578ed';
  const URLid = 'https://www.omdbapi.com/?apikey=' + API_KEY + `&i=${selectedMovieId}`;

  $.ajax({
    method: 'GET',
    url: URLid,
    success: function (data) {
      console.log(data);

      let moreDetails = `
        <ul class="movie-more-details-list">
          <li><b>Movie title:</b> ${data.Title}</li>
          <li><b>Actors:</b> ${data.Actors}</li>
          <li><b>Country:</b> ${data.Country}</li>
          <li><b>Runtime:</b> ${data.Runtime}</li>
          <li><b>Released:</b> ${data.Released}</li>
          <li><b>Rating:</b> ${data.imdbRating}</li>
        </ul>
        <button class="more-details-close-btn">Close</button>
      `;

      $('.more-details-of-movie').css('display', 'block').html(moreDetails);
      $('.more-details-close-btn').on('click', () => {
        $('.more-details-of-movie').css('display', 'none');
      });
    }
  });

};

function showFavoritesList() {

  const showfavorites = JSON.parse(localStorage.getItem('favoritesMovies'));
  let outputFavoritesList = '';

  $.each(showfavorites, (index, titles) => {
    outputFavoritesList += `
    <ul class="movie-more-details-list">
    <li><b>Movie title:</b> ${titles}</li>
    </ul>
    `;
  });

  $('.favrites-list-modal-window').css('display', 'block');
  $('.close-div').html(outputFavoritesList);
  $('.favorites-list-close-btn').on('click', () => {
    $('.favrites-list-modal-window').css('display', 'none');
  });
};

const favoritesMovies = [];
console.log(favoritesMovies);
console.log(favoritesMovies.length);

function addMovieToFavorites(name) {

  // Так добавляет и выводит список фильмов из локалсториджа, но так же добавляет уже находящийся в массиве фильм
  const favoriteMovieName = name;

  favoritesMovies.push(favoriteMovieName);
  console.log(favoritesMovies);
  localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));


  //  Так не работает
  // const movieList = favoritesMovies;

  // $.each(movieList, (index, title) => {
  //   if (favoriteMovieName === title) {
  //     movieList.splice(index, 1);
  //     console.log(movieList);
  //     localStorage.setItem('favoritesMovies', JSON.stringify(movieList));
  //     console.log(`Array from localStorage after delete ${JSON.parse(localStorage.getItem('favoritesMovies'))}`);
  //   } else {
  //     movieList.push(favoriteMovieName);
  //     console.log(movieList);
  //     localStorage.setItem('favoritesMovies', JSON.stringify(movieList));
  //     console.log(`Array from localStorage after adding ${JSON.parse(localStorage.getItem('favoritesMovie'))}`);
  //   }
  // });

  // И так тоже не работает
  // for (let i = -1;; i <= favoritesMovies.length; i++) {
  //   if (favoritesMovies[i] !== name) {
  //     favoritesMovies.push(favoriteMovieName);
  //     console.log(favoritesMovies);
  //     localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
  //   } 
  //   // Если закомментить елс иф то браузер зависнет, лучше не надо
  //   else if (favoritesMovies[i] === name) {
  //     favoritesMovies.splice(i, 1);
  //     console.log(favoritesMovies);
  //     localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
  //   }
  // };
};