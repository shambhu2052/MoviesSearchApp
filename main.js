const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const ImgPath = "https://image.tmdb.org/t/p/w1280";
const SearchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moviesbox = document.querySelector("#movie-box");
const getmovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showmovies(data);
};
getmovies(APIURL);
const showmovies = (data) => {
  moviesbox.innerHTML = "";
  data.results.forEach((result) => {
    const imgpath =
      result.poster_path === null ? "" : ImgPath + result.poster_path;
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <img src="${imgpath}" alt="image of movies"/>
        <div class="overlay">
        <div class="title">
        <h2>${result.original_title}</h2>
        <span>${result.vote_average}</span>
        </div>
        <h3>Overview:</h3>
        <p>${result.overview}</p>
        </div>`;
    moviesbox.appendChild(box);
  });
};
document.querySelector("#search").addEventListener("keyup", function (event) {
  if (event.target.value != "") {
    getmovies(SearchAPI + event.target.value);
  } else {
    getmovies(APIURL);
  }
});
