<template>
  <Navbar />
  <div class="admin-wrapper">
    <div class="left-sidebar">
      <ul>
        <li><router-link to="/admin/articles"> Articles</router-link></li>
        <li><router-link to="/admin/users">Users</router-link></li>
        <li><router-link to="/admin/topics"> Topics</router-link></li>
        <li><router-link to="/admin/messages"> Messages</router-link></li>
      </ul>
    </div>
    <div class="admin-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
export default {
  components: { Navbar },
};
</script>

<style></style>
