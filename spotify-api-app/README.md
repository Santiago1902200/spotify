# Spotify API App

## Overview
This project is a web application that integrates with the Spotify API to enable music playback and other functionalities. It is structured to handle user interactions and playback events efficiently.

## Project Structure
```
spotify-api-app
├── src
│   ├── main.js               # Entry point of the application
│   ├── api
│   │   └── spotifyAPI.js     # Functions to interact with the Spotify API
│   ├── events
│   │   ├── userEvents.js     # User-related event handlers
│   │   └── playbackEvents.js  # Playback-related event handlers
│   └── components
│       ├── player.js         # Player component managing playback UI
│       └── ui.js             # UI-related functions
├── index.html                # Main HTML file
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd spotify-api-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Obtain Spotify API credentials**:
   - Create a Spotify Developer account and set up an application to get your Client ID and Client Secret.

4. **Configure environment variables**:
   - Create a `.env` file in the root directory and add your Spotify API credentials:
     ```
     SPOTIFY_CLIENT_ID=<your-client-id>
     SPOTIFY_CLIENT_SECRET=<your-client-secret>
     ```

5. **Run the application**:
   ```
   npm start
   ```

## Usage
- Open `index.html` in your web browser.
- Log in using your Spotify account to access your playlists and control playback.
- Use the UI to play, pause, and skip tracks.

## Spotify API Integration
This application utilizes the Spotify Web API to fetch tracks, control playback, and retrieve user playlists. The API calls are handled in the `src/api/spotifyAPI.js` file, which exports functions for various interactions with the Spotify service.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.