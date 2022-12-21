<script>
export default{
    props: ['path', 'event'],
    methods: {
        click(){
            this.event();
            window.location.hash="{{path}}";
        }
    },
}
</script>


<template>
    <div class="wrapper">
        <router-link :to={path} v-on:keyup.enter="click" id="nextPage">
            <button type="submit" id="btn" @click="click">
                <span class="material-icons">chevron_right</span>
            </button>
        </router-link>
    </div>
    <!-- v-on:keyup.enter="click()" 
    :event="['click', 'keydown.enter']"
    v-on:keyup.enter="click"-->
</template>

<style>
#btn {
  background-image: url('~@/assets/button.jpg');
  margin: 0.5em;
  margin-top: 2em;
  margin-bottom: 2.5em;
  border-radius: 50%;
  border: none;
  height: 44px;
  width: 44px;
  outline: none;
  color: rgb(248, 246, 246);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: -2px -2px 7px -3px #794F87,
               2px -2px 7px -3px #99648C,
               2px  2px 7px -3px #D8A1BC,
              -2px  2px 7px -3px #936090;
}
</style>