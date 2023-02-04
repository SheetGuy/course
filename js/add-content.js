const addedRecently = document.querySelector('.added-recently-content');

const trending = document.querySelector('.trending-content');

const popularMovies = document.querySelector('.popular-movies-content');

const popularSeries = document.querySelector('.popular-series-content');

const addWatch = async () => {

   document.querySelector('.content-list').style.opacity = "0";

   

   const dataApi = await fetch(`https://raw.githubusercontent.com/SheetGuy/none/main/assets/movies.json`);

   const dataJson = await dataApi.json();

   

   for (var i = 0; i < dataJson.length; i++) {

      addedRecently.innerHTML += `<div class="watch-box"><img src="https://image.tmdb.org/t/p/w342/${dataJson[i].image}" class="watch-box-img" alt="Assistir ${dataJson[i].title}"><div class="watch-box-text"><h2 class="watch-title">${dataJson[i].title}</h2><span class="watch-date">${dataJson[i].releaseYear}</span><span class="play-icon"></span></div></div>`;

      trending.innerHTML += `<div class="watch-box"><img src="https://image.tmdb.org/t/p/w342/${dataJson[i].image}" class="watch-box-img" alt="Assistir ${dataJson[i].title}"><div class="watch-box-text"><h2 class="watch-title">${dataJson[i].title}</h2><span class="watch-date">${dataJson[i].releaseYear}</span><span class="play-icon"></span></div></div>`;

      popularMovies.innerHTML += `<div class="watch-box"><img src="https://image.tmdb.org/t/p/w342/${dataJson[i].image}" class="watch-box-img" alt="Assistir ${dataJson[i].title}"><div class="watch-box-text"><h2 class="watch-title">${dataJson[i].title}</h2><span class="watch-date">${dataJson[i].releaseYear}</span><span class="play-icon"></span></div></div>`;

      popularSeries.innerHTML += `<div class="watch-box"><img src="https://image.tmdb.org/t/p/w342/${dataJson[i].image}" class="watch-box-img" alt="Assistir ${dataJson[i].title}"><div class="watch-box-text"><h2 class="watch-title">${dataJson[i].title}</h2><span class="watch-date">${dataJson[i].releaseYear}</span><span class="play-icon"></span></div></div>`;

   }

   document.querySelector('.loading-screen').style.display = "none";

   document.querySelector('.content-list').style.opacity = "1";

   console.log(dataJson)

}

addWatch();
