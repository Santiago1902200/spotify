export function renderTrackList(tracks) {
  const trackListContainer = document.getElementById("track-list");
  trackListContainer.innerHTML = "";

  tracks.forEach((track) => {
    const trackItem = document.createElement("div");
    trackItem.className = "track-item";
    trackItem.innerHTML = `
      <img src="${track.album.images[0].url}" alt="${track.name}" />
      <div class="track-info">
          <h3>${track.name}</h3>
          <p>${track.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
      <button class="play-button" data-track-id="${track.id}">Play</button>
    `;
    trackListContainer.appendChild(trackItem);
  });
}

export function updatePlayerUI(track) {
  const playerTrackName = document.getElementById("current-track-name");
  const playerTrackArtist = document.getElementById("current-track-artist");
  const playerTrackImage = document.getElementById("current-track-image");

  playerTrackName.textContent = track.name;
  playerTrackArtist.textContent = track.artists
    .map((artist) => artist.name)
    .join(", ");
  playerTrackImage.src = track.album.images[0].url;
}
