const marvel = {
  render: () => {
    const urlAPI1 =
      "https://gateway.marvel.com:443/v1/public/characters/1009368?ts=1&apikey=9b18d1517056474e8a8bf052d4945580&hash=2f5cf10b13a0810f305a2e86cf39da3d";
    const urlAPI2 =
      "https://gateway.marvel.com:443/v1/public/characters/1009368/comics?ts=1&apikey=9b18d1517056474e8a8bf052d4945580&hash=2f5cf10b13a0810f305a2e86cf39da3d";
    const urlAPI3 =
      "https://gateway.marvel.com:443/v1/public/characters/1009368/events?ts=1&apikey=9b18d1517056474e8a8bf052d4945580&hash=2f5cf10b13a0810f305a2e86cf39da3d";
    const urlAPI4 =
      "https://gateway.marvel.com:443/v1/public/characters/1009368/series?ts=1&apikey=9b18d1517056474e8a8bf052d4945580&hash=2f5cf10b13a0810f305a2e86cf39da3d";
    const urlAPI5 =
      "https://gateway.marvel.com:443/v1/public/characters/1009368/stories?ts=1&apikey=9b18d1517056474e8a8bf052d4945580&hash=2f5cf10b13a0810f305a2e86cf39da3d";

    const container = document.querySelector("#marvel-ironman");
    let contentHTML = "";
    Promise.all([
      fetch(urlAPI1).then((res) => res.json()),
      fetch(urlAPI2).then((res) => res.json()),
      fetch(urlAPI3).then((res) => res.json()),
      fetch(urlAPI4).then((res) => res.json()),
      fetch(urlAPI5).then((res) => res.json()),
    ]).then(([json1, json2, json3, json4, json5]) => {
      // Procesar los resultados de json1
      for (const hero of json1.data.results) {
        let urlHero = hero.urls[0].url;
        contentHTML += `
        <div class="container">
          <center>
            <div class="img-ironman">
              <h3 class="tittle">${hero.name}</h3>
              <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-ironman">
              </a>  
              <p class="description">${hero.description}</p>
            </div>
          </center>
        </div>
      `;
      }

      const comicsCount = json2.data.total;

      contentHTML += `
        <div class="container">
          <center>
            <div class="img-ironman">
              <p class="totalcomics">Número de cómics: ${comicsCount}</p>
            </div>
          </center>
        </div>
      `;

      const eventsCount = json3.data.total;

      contentHTML += `
        <div class="container">
          <center>
            <div class="img-ironman">
              <p class="totalevents">Número de eventos: ${eventsCount}</p>
            </div>
          </center>
        </div>
      `;

      const seriesCount = json4.data.total;

      contentHTML += `
        <div class="container">
          <center>
            <div class="img-ironman">
              <p class="totalseries">Número de series: ${seriesCount}</p>
            </div>
          </center>
        </div>
      `;

      const storiesCount = json5.data.total;

      contentHTML += `
        <div class="container">
          <center>
            <div class="img-ironman">
              <p class="totalstories">Número de historias: ${storiesCount}</p>
            </div>
          </center>
        </div>
      `;
      container.innerHTML = contentHTML;
    });
  },
};

marvel.render();
