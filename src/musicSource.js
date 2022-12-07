import {CLIENT_ID, CLIENT_SECRET} from "./spotifyApiConfig.js"; //BASE_URL, REDIRECT_URI

function getToken(){
    return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
        },
        body: 'grant_type=client_credentials',
    })
    .then((response) => response.json())
    .then((data) => data.access_token)
}

function getGenres(token){
    return fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token},
    })
    .then((response) => response.json())
    .then((data) => data.categories.items)
}

function searchPlaylist(searchParameters, token){
    // const moodTags = "sad";
    // const weather = "rain";

    // let params = {client_id: CLIENT_ID,
    //           response_type: "code",
    //           redirect_uri: REDIRECT_URI,
    //           code_challenge_method: "s256",
    //           code_challenge: generateHash(),
    //         }

    return fetch("https://api.spotify.com/v1/search?q=sunshine&type=playlist&limit=20", {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token,
        }
    })
    .then((response) => response.json())
}

// async function generateHash(){
//     function dec2hex(dec) {
//         return ('0' + dec.toString(16)).substr(-2)
//       }
      
//       function generateRandomString() {
//         var array = new Uint32Array(56/2);
//         window.crypto.getRandomValues(array);
//         return Array.from(array, dec2hex).join('');
//       }
      
//       var verifier = generateRandomString();

//       function sha256(plain) { // returns promise ArrayBuffer
//         const encoder = new TextEncoder();
//         const data = encoder.encode(plain);
//         return window.crypto.subtle.digest('SHA-256', data);
//       }
      
//       function base64urlencode(a) {
//             var str = "";
//             var bytes = new Uint8Array(a);
//             var len = bytes.byteLength;
//             for (var i = 0; i < len; i++) {
//               str += String.fromCharCode(bytes[i]);
//             }
//             return btoa(str)
//               .replace(/\+/g, "-")
//               .replace(/\//g, "_")
//               .replace(/=+$/, "");
//           }
      
//       async function challenge_from_verifier(v) {
//         let hashed = await sha256(v);
//         let base64encoded = base64urlencode(hashed);
//         return base64encoded;
//       }
      
//       var challenge = await challenge_from_verifier(verifier);
//       return challenge;
// }

export {getToken, getGenres, searchPlaylist}