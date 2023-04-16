// Spotify Authorization URL
const authUrl = 'https://accounts.spotify.com/authorize';

// Spotify Client ID (replace with your own)
const clientId = 'b59948969fe04222bf473204265d5d46';

// Spotify Redirect URI (replace with your own)
const redirectUri = 'http://localhost:5500/page.html';

// Spotify Authorization Scope
const scope = 'user-read-private user-read-email';

// Create login button element
const loginButton = document.getElementById('login-button');
document.getElementById("login-button").addEventListener("click", function() {
    const client_id = "b59948969fe04222bf473204265d5d46";
    const redirect_uri = "http://localhost:5500/page.html";
    const scopes = "user-read-private user-read-email";
    const url = "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" + encodeURIComponent(client_id) +
      "&scope=" + encodeURIComponent(scopes) +
      "&redirect_uri=" + encodeURIComponent(redirect_uri);
    window.location.href = url;
  });

/**
 * Generates a random string with the specified length.
 * @param {number} length - The length of the string to generate.
 * @returns {string} A random string.
 */
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

