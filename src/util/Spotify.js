import axios from 'axios';

const client_id = '221191b429194bccb50d64986a518586';
const client_secret = '7628a6b52ba24ce2b861b79d2cafadb0';
let accessToken = sessionStorage.getItem('accessToken');

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {
      sessionStorage.setItem('accessToken', tokenResponse.data.access_token);
      accessToken = sessionStorage.getItem('accessToken');
    });
  },

  search(searchTerm) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, { headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message))
      .then(jsonResponse => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
            artwork: track.album.images[2].url,
            sample: track.preview_url,
            artistId: track.artists[0].id
          }));
        } else {
          return [];
        }
      });
  },

  examine(artistId) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch(`https://api.spotify.com/v1/artists/${artistId}`, { headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message))
      .then(jsonResponse => {
        if (jsonResponse) {
          return {
            id: jsonResponse.id,
            name: jsonResponse.name,
            picture: jsonResponse.images[0].url,
            genres: jsonResponse.genres,
            followers: jsonResponse.followers.total,
            popularity: jsonResponse.popularity
          }
        }
      });
  }
};

export default Spotify;