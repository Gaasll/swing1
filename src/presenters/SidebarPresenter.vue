<template>
    <SidebarView :signOut="signOut"/>
</template>

<script>
import SidebarView from '../views/SidebarView.vue'
import {signOut, } from "../firebaseModel.js";

export default {
    props: ['model'],
    components: {
        SidebarView,
    },
    methods: {
        isSignedIn(){
            return this.model.username == true;
        },
        signOut(){
            console.log("Signing out");
            signOut();
        }
    }
}
</script>