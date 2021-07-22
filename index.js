const api_key = 'c4b01846'
const form = document.getElementById("button");
const wrapper = document.querySelector(".parent");

const getTitle = () =>{
let title = document.getElementById("title").value
Request(title)
}
// function to fetch the api and get the json data
function apikeyToFetch(allFilms) {
  var search = document.getElementById("title").value;
  wrapper.innerHTML= ""
  fetch(`https://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      return movies;
    })
    .then((movies) => showMovie(movies))
    .catch((error) =>{ console.log(error)});
}
// from the fetch, collect the elements from the array
const showMovie = (movies) => {
  movies.map((searchedmovie) => {
    console.log(searchedmovie);
    showAllMovies(
      wrapper,
      searchedmovie.Title,
      searchedmovie.Year,
      searchedmovie.Poster,
      searchedmovie.imdbID
    );
  });
};
//then we inject all this elements in the innerHTML for the display
const showAllMovies = (container, name, year, poster, id) => {
  
  container.innerHTML += `
  <div>
    <div class="div1"><p>Titre du film : ${name}</p></div>
    <div class="div2"><p>Année : ${year}</p> </div>
    <div class="div3"><img src="${poster}"></img>   
    <div><p>Id:${id}</p></div>
    <button>read more</button>
    </div>
  </div>
`;
};

form.addEventListener("click", apikeyToFetch);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}