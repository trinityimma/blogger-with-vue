<template>
  <div class="button-group">
    <router-link to="/admin/articles/create" class="btn btn-big"
      >Add Article</router-link
    >
    <router-link to="/admin/articles/update" class="btn btn-big"
      >Manage Posts</router-link
    >

    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
