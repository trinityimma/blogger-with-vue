<template>
  <div class="button-group">
    <router-link to="/admin/articles/create" class="btn btn-big"
      >Add Article</router-link
    >
    <router-link to="/admin/articles" class="btn btn-big"
      >Manage Articles</router-link
    >

    <router-view/>
  </div>
</template>

<script>
export default {

};
</script>

<style></style>
