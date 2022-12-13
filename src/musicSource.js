import {BASE_URL, CONSUMER_KEY, CONSUMER_SECRET} from "./discogsApiConfig.js";

function search(searchParams){
    let url = BASE_URL + "database/search?" + new URLSearchParams(searchParams);
    let auth = "Discogs key=" + CONSUMER_KEY + ", secret=" + CONSUMER_SECRET;
    console.log(url);
    console.log(auth);
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