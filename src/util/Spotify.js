const clientId = '221191b429194bccb50d64986a518586';
// const redirectUri = 'http://jammmdersen.surge.sh';
const redirectUri = 'http://localhost:3000/';
let accessToken = '';
let expiresIn;

const Spotify = {
  getAccessToken() {
    if (accessToken !== '') {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      const Url = window.location.href;
      const tokenArray = Url.match(/access_token=([^&]*)/);
      const expiresInArray = Url.match(/expires_in=([^&]*)/);
      accessToken = tokenArray[1];
      expiresIn = expiresInArray[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  },

  search(searchTerm) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, { headers: headers })
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

  eximine(artistId) {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch(`https://api.spotify.com/v1/artists/${artistId}`, { headers: headers })
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
            popularity: jsonResponse.popularity
          }
        } else {
          return null; // ???
        }
      });
  }
};

export default Spotify;