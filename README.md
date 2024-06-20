# SwingMood
The web-app SwingMood aims to create a tailored listening experience for the lazy or 
uninspired music listener. A simple scaled down interface, devoid of distractions lets the user input their 
current mood from a checkbox style list of hardcoded moods/feelings/emotions. This data – along with 
the current weather where the user is situated – is used to generate a custom playlist perfectly suited for 
the listener's mood at any given time.
To achieve this, the app uses two seperate API:s. Mainly, the Soundcloud API is used to search for- and 
playback music. The OpenWeather API is used to retrieve weather data.


<table style="width:100%; border: 0;">
  <tr>
    <td style="text-align:center;">
      <img src="https://github.com/Gaasll/swing1/blob/main/happy.png?raw=true" alt="alt text" />
    </td>
  </tr>
</table>

## Features
So far, the app includes the following features and functionality:
* A front end user interface.
* The ability to retrieve data from both API:s. Multiple calls are used to access data from the Soundcloud API, 
a single call is used to get weather data about the users location.
* Retrival of a single track based on emotion and weather. Playlist generation and custom media player together with other features will be implemented further down the line.
Features that are essential:
* Weather data retrieval
* Music playback
Features that may be necessary for functionality (or just nice to have):
* Playlist generation
* Soundcloud login
* Firebase persistance for user settings and generated playlist history

## Interface 
The website is made in a way to create a modern and guided user experience where every step is very clear.
The user starts of on the first page which gives a brief desciption of what the app is about followed by login/registration.
Via the submit button the user moves on to select their emotions. Next step shows the weather in the users locationa and from
the user clicks the next button to reveal the curated track from Soundcloud. From this page onwards there is always a sidebar
visible to be able to see the weather again, select new emotions, see an about page and see user history.

## Setup

URL: https://swingmood-d93cb.web.app/
