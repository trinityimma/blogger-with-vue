<template>
  <div class="post">
    <img :src="getImage(article.image)" class="post-image" alt="post image" />
    <div class="post-review">
      <h2>
        <router-link
          :to="{
            name: 'BlogPost',
            params: { id: article.id },
          }"
          >{{ article.title }}</router-link
        >
      </h2>
      <i class="far fa-user"> {{ ` ${article.author}` }}</i
      >&nbsp;
      <i class="far fa-calendar"> {{ ` ${article.createdAt}` }}</i>
      <p class="preview-text">
        {{ article.caption }}
      </p>
      <router-link
        class="btn read-more"
        :to="{
          name: 'BlogPost',
          params: { id: article.id },
        }"
        >Read More</router-link
      >
      <!-- <a @click.prevent="openArticle" class="btn read-more">Read More</a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: "",
          date: "",
          caption: "",
        };
      },
    },
  },
  methods: {
    getImage(name) {
      return require("@/assets/img/" + name);
    },
  },
};
</script>

<style></style>
