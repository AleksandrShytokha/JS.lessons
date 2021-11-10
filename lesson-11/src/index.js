$(document).ready(function () {
  $('#submit-btn').on('click', (e) => {
    let movie = $('#movie').val();
    let type = $('#type').val();
    getMovies(movie, type);
    e.preventDefault();
  });
});

function getMovies(movie, type) {

  const API_KEY = '945578ed';
  let URL = 'http://www.omdbapi.com/?apikey=' + API_KEY + `&s=${movie}&type=${type}`;
  let movieID = '';

  $.ajax({
    method: 'GET',
    url: URL,
    success: function (data) {
      console.log(data);

      pagination(Number(data.totalResults));

    }
  });

  function pagination(movieCount) {

    const lenght = movieCount / 10;
    let container = $('.page-pagination');

    for (let i = 1; i <= lenght; i++) {
      let button = $('<button class="pagination-btn"></button>');
      button.text(`${i}`);
      container.append(button);
    }

    $('.page-pagination').on('click', function (e) {

      const pageIsClicked = +e.target.innerText;

      URL = 'http://www.omdbapi.com/?apikey=' + API_KEY + `&s=${movie}&type=${type}&page=${pageIsClicked}`;

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
                <button onclick="getMovieDetails('${movie.imdbID}')" class="movie-more-details">More Details</button>
              </div>
            `;
          });

          $('.movie-container').html(output);
        }
      });
    });
  }
}


function getMovieDetails(id) {
  let selectedMovieId = id;
  console.log(selectedMovieId);

  const API_KEY = '945578ed';
  const URLid = 'http://www.omdbapi.com/?apikey=' + API_KEY + `&i=${selectedMovieId}`;

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
      })
    }
  });

}
