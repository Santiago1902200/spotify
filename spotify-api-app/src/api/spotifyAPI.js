const API_BASE_URL = "https://api.spotify.com/v1";

// Define tus funciones sin duplicados
const TOKEN =
  "BQBBIQqk9AWoulmAjW-MfkYegE1WVt6dd90VcCy4i18_tWkYS1zh8a4g8CLKGrHpqU5ua0HUpnz2T1opM06DY3Ebf1KC0XwKHBBGesGBxvWeyMLZ92mr_DrQiGwlGtzpJbn5GrkPPjpgfdLhmdzKDTS6mY5JDw6bHxvOFCqt0-skbfSElcVNpgVNvGkVBHv7hUuppEI-ade665GHp80vRoGmjhMlZya_Vf12Z-l5m6w4Oj_P9RlBEe0NqgU-9GJoOL8X6OCttXnxCpkkw-MVCuTCqYVwvAesa3soki81i7O6lSu3mLo_TlfOgtehGMe0";

export async function getTopTracks() {
  const response = await fetch(
    `${API_BASE_URL}/me/top/tracks?time_range=long_term&limit=5`,
    {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("spotify_access_token") || "default_token"
        }`,
      },
    }
  );
  const data = await response.json();
  return data.items;
}

export async function fetchTracks(query = "pop") {
  const response = await fetch(`${API_BASE_URL}/search?q=${query}&type=track`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("spotify_access_token") || "default_token"
      }`,
    },
  });
  return response.json();
}

export async function getUserPlaylists() {
  const response = await fetch(`${API_BASE_URL}/me/playlists`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("spotify_access_token") || "default_token"
      }`,
    },
  });
  return response.json();
}

export async function createPlaylist(tracksUri) {
  // Lógica para crear una playlist
  // Ejemplo:
  const userData = await fetch(`${API_BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("spotify_access_token") || "default_token"
      }`,
    },
  }).then((r) => r.json());

  const playlist = await fetch(
    `${API_BASE_URL}/users/${userData.id}/playlists`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("spotify_access_token") || "default_token"
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "My Top Tracks Playlist",
        public: false,
      }),
    }
  ).then((r) => r.json());

  await fetch(
    `${API_BASE_URL}/playlists/${playlist.id}/tracks?uris=${tracksUri.join(
      ","
    )}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("spotify_access_token") || "default_token"
        }`,
        "Content-Type": "application/json",
      },
    }
  );

  return playlist;
}

export async function playTrack(trackId) {
  const response = await fetch(`${API_BASE_URL}/me/player/play`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("spotify_access_token") || "default_token"
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uris: [`spotify:track:${trackId}`] }),
  });
  return response.json();
}

export async function pauseTrack() {
  const response = await fetch(`${API_BASE_URL}/me/player/pause`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("spotify_access_token") || "default_token"
      }`,
    },
  });
  return response.json();
}
