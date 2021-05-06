<template>
  <div class="contents">
    <h2 class="page-title">Manage Users</h2>
    <table>
      <thead>
        <th>SN</th>
        <th>Username</th>
        <th>Role</th>
        <th colspan="2">Action</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
          <td><a href="#" class="edit">edit </a></td>
          <td>
            <a @click.prevent="deleteUser(user)" class="delete">delete </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  computed: {
    users() {
      return this.$store.getters["userModule/getAllUsers"];
    },
  },
  created() {
    this.$store.dispatch("userModule/fetchUsers");
  },
  methods: {
    deleteUser(user) {
      this.$store.dispatch("userModule/deleteUser", user);
    },
  },
};
</script>
