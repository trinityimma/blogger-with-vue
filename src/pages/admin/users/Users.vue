<template>
  <div class="button-group">
    <router-link to="/admin/users/create" class="btn btn-big"
      >Add User</router-link
    >
    <router-link to="/admin/users" class="btn btn-big">Manage Users</router-link>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style></style>
