<template>
  <div class="contents">
    <h2 class="page-title">Add Topic</h2>
        <h4>{{ success }}</h4>

    <form @submit.prevent="createTopic()">
      <div>
        <label for="title">Name</label>
        <input type="text" name="name" class="text-input" v-model="name" />
      </div>
      <div>
        <label for="body">Description</label>
        <textarea
          type="text"
          name="description"
          class="text-input"
          v-model="description"
          id="body"
        ></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-big">Add Topic</button>
      </div>
    </form>
  </div>
</template>
<script>
import { uuid } from "@/utils";

export default {
  data() {
    return {
      name: "",
      description: "",
      success: "",
    };
  },

  methods: {
    createTopic() {
      const topic = {
        name: this.name,
        description: this.description,
        id: uuid()
      };
      this.$store.dispatch("topicModule/createTopic", topic)
      .then(() => {
        this.success = "Topic successfully added";
        this.clearInputs();
      })
      .catch((error) => {
        this.success = error;
      });
    },
    clearInputs() {
      this.name = "";
      this.description = "";
    },
  },
};
</script>
