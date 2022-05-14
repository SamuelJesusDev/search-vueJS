<template>
  <div>

    <div class="search" >
      <label for="search-people" class="material-icons">search</label>
      <input  v-model="search" id="search-people" type="text" placeholder="Search people">
    </div>
    <UserItem :search="search" />
  </div>
</template>

<script>
import UserItem from './UserItem.vue'
export default {
components:{ UserItem},
data() {
  return {
    search: ""
  }
}
}
</script>

<style>

</style>