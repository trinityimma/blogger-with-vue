<template>
  <div class="button-group">
    <router-link to="/admin/topics/create" class="btn btn-big"
      >Add Topic</router-link
    >
    <router-link to="/admin/topics" class="btn btn-big"
      >Manage Topics</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style></style>
