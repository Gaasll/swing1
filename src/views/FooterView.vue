<template>
        <footer>
            <p>Copyright &copy; 2022</p>
        </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
footer{
  position: fixed;
  background-color: white;
  bottom: 0;
  width: 100%;
  height: 2.0rem; 
  padding: 0;
}

p{
  margin: 5px;
}
@media screen and (max-width: 480px) {
    p {
        font-size: 10px;
    }
  }
</style>