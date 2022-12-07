Swing/SwingMood
===========


The web-app SwingMood/MoodMusic aims to create a tailored listening experience for the lazy or 
uninspired music listener. A simple scaled down interface, devoid of distractions lets the user input their 
current mood from a checkbox style list of hardcoded moods/feelings/emotions. This data – along with 
the current weather where the user is situated – is used to generate a custom playlist perfectly suited for 
the listener's mood at any given time.
To achieve this, the app uses two seperate API:s. Mainly, the Spotify API is used to search for- and 
playback music. The OpenWeather API is used to retrieve weather data.
#Swing/SwingMood
The web-app SwingMood/MoodMusic aims to create a tailored listening experience for the lazy or 
uninspired music listener. A simple scaled down interface, devoid of distractions lets the user input their 
current mood from a checkbox style list of hardcoded moods/feelings/emotions. This data – along with 
the current weather where the user is situated – is used to generate a custom playlist perfectly suited for 
the listener's mood at any given time.
To achieve this, the app uses two seperate API:s. Mainly, the Spotify API is used to search for- and 
playback music. The OpenWeather API is used to retrieve weather data.


Features
=======================================
So far, the app includes the following features and functionality:
* A rudimentary front end user interface (it looks nice, but is still subject to change)
* The ability to retrieve data from both API:s. Multiple calls are used to access data from the Spotify API, 
a single call is used to get weather data about the users location.
Many of the core features of the app are yet to be implemented. While some upcoming features are set 
in stone, other features may be implemented further down the line depending on time, ability and 
necessity.
Features that are essential:
* Playlist generation
* Music playback
Features that may be necessary for functionality (or just nice to have):
* Spotify login
* Firebase persistance for user settings and generated playlist history

Project
=============================================
The project partially consists of auto-generated skeleton code (technically not used, but still present for 
development purposes). 
The API:s use seperate files for accessing data (for now), namely, weatherSource.js and musicSource.js. 
They also use seperate files for the models (for now) namely, weatherModel.js and MusicModel.js. Both 
API:s use the component ApiTest.vue, and the view TestView.vue to demonstrate their functionality in 
the deployed app. They both have an API config file containing keys and endpoints (excluded from the 
repository).

The component IndexPresenter and the view IndexView are the first page that appears to the user who writes
their name and presses the "toggle" button to the next page. The user gets to another page where the Emotions 
component and the EmotionView view are used for the user to check on some emotions they are feeling right now. 
In the Emotions component another component called Checkbox is used to load the checkboxes for the different 
emotions/ feelings. After choosing emotions the user presses on the "toggle" button to get to a new page for
the current weather based on location. Here is the Weather View used to showcase the weather information.
The user gets a new page suggesting music based on emotions chosen and the current weather. The component 
called Playing and the view called playingNow are used for the suggested music.

From now on a sidebar is presented in all the views for the users to choose to go back and change emotions, 
recheck the weather and even see the history. The sidebar uses the component Sidebar under components.
