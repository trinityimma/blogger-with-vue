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
            <a @click.prevent="deleteArticle(article)" class="delete">
              delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters["articlesModule/getAllArticles"];
    },
  },
  created() {
    this.$store.dispatch("articlesModule/fetchArticles");
  },
  methods: {
    deleteArticle(article) {
      this.$store.dispatch("articlesModule/deleteArticle", article);
    },
  },
};
</script>

<style></style>
