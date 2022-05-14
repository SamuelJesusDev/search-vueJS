<template>
  <div id="app">
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue'


export default {
  
  name: 'App',
  components:{ Search,},
}
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
}

</style>
