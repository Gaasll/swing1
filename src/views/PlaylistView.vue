<script>
import Sidebar from "../components/Sidebar.vue";

export default{
    name: "PlaylistView",
    components: {
      Sidebar
    },
    props: ["model"],
}
</script>

<template>
    <div class="playing">
      <div class="sidebar">
        <Sidebar/>
      </div>
      <div class="header">
        <h2>PLAYING MUSIC FOR BEING
          <span v-for="emotion in model.selectedEmotions" :key="emotion">
            <span v-if="emotion != model.selectedEmotions[0]">
              &
            </span>
            {{ emotion }}
          </span>
        </h2>
        <h2>THE WEATHER IS {{ model.weather }} </h2>
      </div>
    </div>
    <div class="card">
      <div class="box box1"><img src="../assets/song.jpg" alt="a balloon"></div>
      <br>
        <div  class="box desc" > Say What You Say</div>
        <div  class="box desc" > issa-e</div>
        <button> <span class="material-icons">favorite </span></button>
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
</style>
