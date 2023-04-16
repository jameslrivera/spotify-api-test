import base64
import requests
import os

client_id = os.get('CLIENT_ID')
client_secret = os.get('CLIENT_SECRET')

# set up authorization
redirect_uri = os.get('CLIENT_URL')
# scopes = "user-read-private user-read-email playlist-read-private"

# Step 1: Get authorization code
auth_url = f"https://accounts.spotify.com/authorize?client_id={client_id}&response_type=code&redirect_uri={redirect_uri}"
print(f"Please visit this URL to authorize the app:\n{auth_url}")
auth_code = input("Enter the authorization code: ")

# Step 2: Exchange authorization code for access token
auth_header = base64.b64encode(f"{client_id}:{client_secret}".encode("utf-8")).decode("utf-8")
auth_data = {
    "grant_type": "authorization_code",
    "code": auth_code,
    "redirect_uri": redirect_uri,
}
auth_response = requests.post(
    "https://accounts.spotify.com/api/token",
    headers={"Authorization": f"Basic {auth_header}"},
    data=auth_data,
)
access_token = auth_response.json()["access_token"]

# Step 3: Use access token to make API requests
headers = {"Authorization": f"Bearer {access_token}"}
playlists_response = requests.get("https://api.spotify.com/v1/me/playlists", headers=headers)
playlists = playlists_response.json()["items"]

# Print playlist names
for playlist in playlists:
    print("Name: ", playlist["name"], " Public: ", playlist["public"])
