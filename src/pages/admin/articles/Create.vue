<template>
  <div class="contents">
    <h2 class="page-title">Add Article</h2>
    <h4>{{ success }}</h4>
    <form @submit.prevent="createArticle()">
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
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { uuid, articleImage } from "@/utils";
export default {
  components: { ckeditor: CKEditor.component },
  data() {
    return {
      title: "",
      image: "",
      topics: [],
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

  methods: {
    createArticle() {
      const article = {
        title: this.title,
        content: this.editorData,
        image: articleImage(),
        createdAt: this.createdAt,
        caption: this.caption,
        id: uuid(),
        author: "Admin",
        comment: [],
      };
      this.$store.dispatch("articlesModule/createArticle", article).then(() => {
        this.success = "Successfully uploaded";
        this.clearInputs();
      });
    },
    clearInputs() {
      this.title = "";
      this.image = "";
      this.content = "";
      this.createdAt = "";
      this.caption = "";
      this.editorData = "";
    },
  },
};
</script>

<style></style>
