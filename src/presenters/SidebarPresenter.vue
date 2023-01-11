<template>
    <SidebarView/>
</template>

<script>
import SidebarView from '../views/SidebarView.vue'
import {signOut, } from "../firebaseModel.js";

export default {
    components: {
        SidebarView,
    },
    methods: {
        signOut(){
            signOut();
        }
    }
}
</script>