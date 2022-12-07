<script>
import MusicModel from "../MusicModel.js";
//mm.searchPlaylists();
let hi = "HII!!";
export default {
    data() {
        return {
            hi: "HII!!",
            mm: new MusicModel(),
        }
    }
}
</script>

<template>
    <div>
        Hello, dear devs! {{mm.tokenPromiseState.data || hi}}
    </div>
</template>