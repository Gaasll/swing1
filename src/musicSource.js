import {BASE_URL_MUSIC, CONSUMER_KEY, CONSUMER_SECRET, BASE_URL_SC, AUTH_TOKEN} from "./apiConfig.js";

function search(searchParams){
    let url = BASE_URL_MUSIC + "database/search?" + new URLSearchParams(searchParams);
    let auth = "Discogs key=" + CONSUMER_KEY + ", secret=" + CONSUMER_SECRET;
    return fetch(url, {
        method: "GET",
        headers: {
            "Authorization": auth,
        }
    })
    .then(response => response.json())
    .then(data => data)
}

function soundCloudSearch(searchParams){
    //
    let url = BASE_URL_SC + "tracks?" + new URLSearchParams(searchParams);
    searchParams.access = "playable";
    return fetch(url, {
        method: "GET",
        headers: {
            accept: "application/json; charset=utf-8",
            Authorization: "OAuth " + AUTH_TOKEN,
        },
    })
    .then(response => response.json())
    .then(data => data)
}

export {search, soundCloudSearch};