<template>
  <div class="contents">
    <h2 class="page-title">Update Article</h2>
    <form @submit.prevent="createArticle()" method="post">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" class="text-input" v-model="title" />
      </div>
      <div>
        <label for="title">Caption</label>
        <input
          type="text"
          name="caption"
          class="text-input"
          v-model="caption"
        />
      </div>
      <div>
        <label for="body">Body</label>
        <ckeditor
          class="text-input"
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
      </div>
      <div class="">
        <label>Image</label>
        <input type="file" name="image" class="text-input" />
      </div>
      <div>
        <label for="topic">Topic</label>
        <select name="topic" class="text-input" v-model="selectedTopic">
          <option value="Travel">Travel</option>
          <option value="Coding">Coding</option>
          <option value="Poetty">Poetry</option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn btn-big">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  components: { ckeditor: CKEditor.component },
  data() {
    return {
      title: "",
      image: "",
      caption: "",
      createdAt: new Date(),
      selectedTopic: "",
      success: "",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "image",
        ],
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
          ],
        },
      },
    };
  },
  computed: {
    article() {
      return this.$store.getters[
        ("articlesModule/getArticle", this.$route.params.id)
      ];
    },
    topics() {
      return this.$store.getters["topicModule/getAllTopics"];
    },
  },
  methods: {
    updateArticle() {
      this.$store.dispatch("articlesModule/updateArticle", this.article);
    },
  },
  mounted() {
    const article = this.$store.getters[
      ("articlesModule/getArticle", this.$route.params.id)
    ];
    this.title = article.title;
    this.selectedTopic = article.topic;
    this.caption = article.caption;
    this.editorData = article.content;
  },
};
</script>

<style></style>
