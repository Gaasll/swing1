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
