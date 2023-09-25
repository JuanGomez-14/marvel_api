const marvel = {
  render: () => {
    const urlAPI =
      "https://gateway.marvel.com:443/v1/public/characters/1009368?ts=1&apikey=9b18d1517056474e8a8bf052d4945580&hash=2f5cf10b13a0810f305a2e86cf39da3d";
    const container = document.querySelector("#marvel-ironman");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "RES.JSON");
      });
  },
};

marvel.render();

// https://gateway.marvel.com:443/v1/public/characters/1009368?apikey=9b18d1517056474e8a8bf052d4945580

// 12107a24c6198d094793549d9b902317fe91043ba9b18d1517056474e8a8bf052d4945580

// 2F5CF10B13A0810F305A2E86CF39DA3D
