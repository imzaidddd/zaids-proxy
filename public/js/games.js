if (!getObj("favoritedGames")) setObj("favoritedGames", []);

games.forEach(game => {
  var card = document.createElement("div");
  var image = document.createElement("img");
  var text = document.createElement("h4");
  var descrip = document.createElement("p");
  descrip.classList.add("description");
  card.classList.add("card");

  if (game.image) image.src = game.image;
  else image.src = "https://www.pngkey.com/png/full/167-1670247_white-globe-icon-png-holy-bible-new-international.png";

  if (game.description) descrip.innerHTML = game.description;
  image.loading = "lazy";
  text.innerHTML = game.title;

  card.appendChild(image);
  card.appendChild(text);

  if (getObj("favoritedGames").includes(game.id)) {
    document.querySelector("#favoritedgames").appendChild(card);
  } else {
    document.querySelector("#gamecards").appendChild(card);
  }

  card.classList.add("hvr-bob");

  card.addEventListener("click", () => {
    if (game.id === "customgame") return loadcustomgame();

    if (game.originalUrl) {
      window.open(game.originalUrl, "_blank");
      return;
    }

    window.location.href = `/load.html?game=${game.id}`;
  });
});
