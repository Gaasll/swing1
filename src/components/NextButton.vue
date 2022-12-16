<script>
export default{
    props: ['path'],
    methods: {
        click(){
            window.location.hash="{{path}}"
        }
    },
}
</script>


<template>
    <div class="wrapper">
        <router-link :to={path} v-on:keyup.enter="click" id="nextPage">
            <button type="submit" id="btn" >
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
  margin-bottom: 2.5em;
  border-radius: 50%;
  border: none;
  height: 44px;
  width: 44px;
  outline: none;
  color: rgb(248, 246, 246);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
</style>