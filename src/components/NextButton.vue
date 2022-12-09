<script>
export default{
    props: ['path'],
}
</script>


<template>
    <router-link :to={path} class="button">
        <button>
            <span class="material-icons">chevron_right</span>
        </button>
      </router-link>
</template>

