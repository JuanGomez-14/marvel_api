const marvel = {
  render: () => {
    const urlAPI =
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9b18d1517056474e8a8bf052d4945580&hash=2f5cf10b13a0810f305a2e86cf39da3d";
    const container = document.querySelector("#marvel-row");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="tittle">${hero.name}</h3>
                
            </div>
          `;
        }
        container.innerHTML = contentHTML;
      });
  },
};

marvel.render();
