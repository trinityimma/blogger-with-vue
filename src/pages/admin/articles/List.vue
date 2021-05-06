<template>
  <div class="contents">
    <h2 class="page-title">Manage Articles</h2>
    <table>
      <thead>
        <th>SN</th>
        <th>Title</th>
        <th>Author</th>
        <th colspan="3">Action</th>
      </thead>
      <tbody>
        <tr v-for="(article, $articleIndex) in articles" :key="article.id">
          <td>{{ $articleIndex + 1 }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>
            <router-link
              :to="{
                name: 'UpdateArticle',
                params: { id: article.id },
              }"
              class="edit"
              >edit
            </router-link>
          </td>
          <td>
            <a @click.prevent="deleteArticle($articleIndex)" class="delete">
              delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  computed: {
    // ...mapState(['articles'])
    articles() {
      return this.$store.getters["articlesModule/getAllArticles"];
    },
  },
  created() {
    // this.$store.dispatch("fetchArticles");
    this.$store.dispatch("articlesModule/fetchArticles");
  },
};
</script>

<style></style>
