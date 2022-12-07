export default function searchPlaylist(weatherName: string) {
    return fetch(
    "/getPlaylist?weatherName=" + weatherName
    ).then(response => response.json());
  }