<script>

export default{
    name: "PlaylistView",
    components: {
    },
<<<<<<< HEAD
<<<<<<< HEAD
    props: ["model"],
=======
    props: ["model", ],
>>>>>>> 48f7d6f (now uses location and weather data from the model, plus weatherWidget loading text added)
=======
    props: ["selectedEmotions",
            "username",
            "weather",
            "iconURL",
            "trackURL",
            "refreshTrackURL",
          ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c73262a (SoundCloud working! (kinda))
=======
    methods: {
      changeSoundCloudButtonColor(){
        console.log(document.getElementsByClassName("teaser__button").style.background)
        document.getElementsByClassName("teaser__button").style.background = "#5D3F7F";
      },
    },
    created() {
      window.onload = this.changeSoundCloudButtonColor;
=======
    mounted() {
>>>>>>> c56d858 (minor fixes)
=======
    created() {
      this.refreshTrackURL();
>>>>>>> 7517b70 (implemented promiseNoData loading view)
    }
>>>>>>> 60f0223 (tar helg nu)
}
</script>

<template>
    <div class="playing">
      <Sidebar />
      <div class="header">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <h1> {{ this.model.username }} </h1>
>>>>>>> 48f7d6f (now uses location and weather data from the model, plus weatherWidget loading text added)
        <h2>PLAYING MUSIC FOR BEING
          <span v-for="emotion in model.selectedEmotions" :key="emotion">
            <span v-if="emotion != model.selectedEmotions[0]">
=======
        <h1> {{ username }} </h1>
=======
>>>>>>> 7517b70 (implemented promiseNoData loading view)
        <h2>PLAYING MUSIC FOR FEELING
          <span v-for="emotion in selectedEmotions" :key="emotion">
            <span v-if="emotion != selectedEmotions[0]">
>>>>>>> c73262a (SoundCloud working! (kinda))
              &
            </span>
            {{ emotion }}
          </span>
        </h2>
        <h2>
          THE WEATHER IS {{ weather }}
          <img :src="iconURL" alt="" class="icon" />
        </h2>
      </div>
    </div>
    <!--div class="card">
      <div class="box box1"><img src="../assets/song.jpg" alt="a balloon"></div>
      <br>
        <div  class="box desc" > Say What You Say</div>
        <div  class="box desc" > issa-e</div>
        <button> <span class="material-icons">favorite </span></button>
    </div-->
    <div class="musicPlayer">
      <div class="border-top-overlay">
      </div>
      <iframe width="60%" 
              height="300"
              scrolling="no" 
              frameborder="no"
              allow="autoplay"
              :src="trackURL">
      </iframe>
    </div>
    <div class="scrolling">
	</div>
</template>
  
<style>
.header{
  display: block;
  margin-left: 25%;
  margin-right: 25%;
}

.card {
  justify-content: center;
  background: #000000d0;
  color: white;
  margin-left: 25%;
  margin-right: 25%;
  padding: 2em;
  border-radius: 30px;
  /* max-width: 50%; */
  /* max-width: 420px; */
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box img {
    width: 100%;
    height: 100%;
}

.box1 img {
    object-fit: cover;
}

button {
  margin: 0.5em;
  border-radius: 50%;
  border: none;
  height: 44px;
  width: 44px;
  outline: none;
  background: #7c7c7c2b;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.box desc {
  border: none;
  outline: none;
  padding: 0.4em 1em;
  border-radius: 24px;
  background: #7c7c7c2b;
  color: white;
  font-family: inherit;
  font-size: 105%;
  width: calc(100% - 100px);
}

button:hover {
  background: #7c7c7c6b;
}

h1.temp {
  margin: 0;
  margin-bottom: 0.4em;
}

.description {
  text-transform: capitalize;
  margin-left: 8px;
}

.border-top-overlay{
  display: block;
  position: relative;
  top: 4px;
  background-color: #5D3F7F;
  min-height: 4px;
  width: 60%;
  margin: auto;
}
</style>
