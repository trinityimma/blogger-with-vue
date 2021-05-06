<template>
  <Navbar />

  <div class="body-wrapper">
    <div class="page-wrapper">
      <div class="content">
        <div class="main-content">
          <h1 class="recent-post-title">Recent Posts</h1>
          <Post
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
        <aside class="sidebar">
          <HomeSidebar />
        </aside>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Post from "../components/Post";
import HomeSidebar from "../components/HomeSidebar";

export default {
  components: { Navbar, Footer, Post, HomeSidebar },
  data() {
    return {};
  },
  computed: {
    // ...mapState(['articles'])
    articles() {
      return this.$store.getters["articlesModule/getAllArticles"];
    },
  },
  mounted() {
    this.$store.dispatch("articlesModule/fetchArticles");
  },
};
</script>

<style>
.body-wrapper {
  min-height: 80vh;
  background: lightgray;
  font-family: "Lora", sans-serif;
}
</style>
