const api_key = 'c4b01846'

const form = document.getElementById("button");
const wrapper = document.querySelector(".parent");

const getTitle = () =>{
let title = document.getElementById("title").value
Request(title)
}
function apikeyToFetch() {
  var search = document.getElementById("title").value;
  wrapper.innerHTML= ""
  fetch(`http://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      return movies;
    })
    .then((movies) => showMovie(movies))
    .catch((error) =>{ console.log(error)});
}


const showMovie = (movies) => {
  movies.map((searchedmovie) => {
    console.log(searchedmovie);
    showAllMovies(
      wrapper,
      searchedmovie.Title,
      searchedmovie.Year,
      searchedmovie.Poster,
      searchedmovie.Type
    );
  });
};

const showAllMovies = (container, name, year, poster, type) => {
  
  container.innerHTML += `
  <div>
    <div class="div1"><p>Titre du film : ${name}</p></div>
    <div class="div2"><p>Année : ${year},type:${type}</p> </div>
    <div class="div3"><img src="${poster}"></img> </div>
    <button>read more</button>
  </div>
`;
};

form.addEventListener("click", apikeyToFetch);
