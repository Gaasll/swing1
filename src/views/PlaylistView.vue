<script>

export default{
    name: "PlaylistView",
    components: {
    },
    props: ["selectedEmotions",
            "username",
            "weather",
            "iconURL",
            "trackURL",
            "refreshTrackURL",
          ],
    created() {
      this.refreshTrackURL();
    }
}
</script>

<template>
 
    <div class="playing">
      <div class="header">
        <h1>Playing now</h1>
        <h3>Playing music for feeling
          <span v-for="emotion in selectedEmotions" :key="emotion">
            <span v-if="emotion != selectedEmotions[0]">
              &
            </span>
            {{ emotion }}
          </span>
       
          . <br>The weather is {{ weather }}.
          <br><img :src="iconURL" alt="" class="icon" />
        </h3>
      </div>
    </div>
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

h1 {
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  opacity: 0;
  animation: fadeUp 1s ease-in-out forwards;
}

h3 {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  opacity: 0;
  animation: fadeUp 2s ease-in-out forwards;
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

@media (max-width: 512px) {
  .greetings h3 {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 14px;
  }

  h1{
    font-size: 20px;
  }
   h3{
    font-size: 14px;
  }

  .card{
    max-width: 200px;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
