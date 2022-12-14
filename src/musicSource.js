import {BASE_URL_MUSIC, CONSUMER_KEY, CONSUMER_SECRET} from "./apiConfig.js";

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

export {search}