<template>
    <SidebarView :signOut="signOut" :isSignedIn="isSignedIn"/>
</template>

<script>
import SidebarView from '../views/SidebarView.vue'
import {signOut, getUser} from "../firebaseModel.js";

export default {
    props: ['model'],
    components: {
        SidebarView,
    },
    methods: {
        isSignedIn(){
            return getUser();
        },
        signOut(){
            console.log("Signing out");
            signOut();
        },
        logInState(){
            this.isSignedIn();
        }
    }
}
</script>