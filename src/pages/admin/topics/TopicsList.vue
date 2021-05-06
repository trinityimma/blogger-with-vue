<template>
  <div class="contents">
    <h2 class="page-title">Manage Topics</h2>
    <table>
      <thead>
        <th>SN</th>
        <th>Name</th>
        <th colspan="2">Action</th>
      </thead>
      <tbody>
        <tr v-for="(topic , index) in topics" :key="topic.id">
          <td>{{index + 1}}</td>
          <td>{{topic.name}}</td>
          <td><a href="#" class="edit">edit </a></td>
          <td><a href="#" class="delete">delete </a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  computed: {
    // ...mapState(['topics'])
    topics() {
      return this.$store.getters["topicModule/getAllTopics"];
    },
  },
  created() {
    this.$store.dispatch("topicModule/fetchTopics");
  },
};
</script>
