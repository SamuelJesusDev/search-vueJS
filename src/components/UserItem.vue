<template >
  <div>
    <!-- <div class="search" >
      <label for="search-people" class="material-icons">search</label>
      <input  v-model="search" id="search-people" type="text" placeholder="Search people">
    </div> -->
    <div class="result" v-for="(user, index) in filteredUsers" :key="index">
      <div class="circle">
        <img class="result__avatar" :src="user.avatar" />
      </div>
      <div class="result__info">
        <h4 class="result__name">{{ user.first_name }}</h4>
        <p class="result__description">{{ user.employment.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api.js";

export default {
  props: {
    search: String,
  },
  data: function () {
    return {
      users: [],
    };
  },
  mounted() {
    api.get("/users/random_user").then((response) => {
      this.users = response.data;
    });
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        return (
          user.first_name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>

<style>
</style>