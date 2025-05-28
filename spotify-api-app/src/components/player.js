class Player {
  constructor() {
    this.currentTrack = null;
    this.isPlaying = false;
    this.trackInfoElement = document.getElementById("track-info");
    this.playButton = document.getElementById("play-button");
    this.pauseButton = document.getElementById("pause-button");
    this.nextButton = document.getElementById("next-button");

    if (this.playButton)
      this.playButton.addEventListener("click", () => this.play());
    if (this.pauseButton)
      this.pauseButton.addEventListener("click", () => this.pause());
    if (this.nextButton)
      this.nextButton.addEventListener("click", () => this.nextTrack());
  }

  updateUI() {
    if (this.currentTrack) {
      this.trackInfoElement.textContent = `${
        this.currentTrack.name
      } by ${this.currentTrack.artists
        .map((artist) => artist.name)
        .join(", ")}`;
    } else {
      this.trackInfoElement.textContent = "No track selected";
    }
  }

  play() {
    if (this.currentTrack) {
      // Llamada a la API para reproducir (p. ej., playTrack(this.currentTrack.id))
      this.isPlaying = true;
      this.updateUI();
    }
  }

  pause() {
    // Llamada a la API para pausar
    this.isPlaying = false;
    this.updateUI();
  }

  nextTrack() {
    // Lógica para cambiar al siguiente track
    this.updateUI();
  }

  setCurrentTrack(track) {
    this.currentTrack = track;
    this.updateUI();
  }
}

export default Player;
