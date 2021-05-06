<template>
  <div class="contents">
    <h2 class="page-title">Add User</h2>
    <h4>{{ success }}</h4>
    <form @submit.prevent="createUser()">
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          class="text-input"
          v-model="username"
        />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" class="text-input" v-model="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" class="text-input" v-model="email" />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          class="text-input"
          v-model="password"
        />
      </div>
      <div>
        <label>Password Confirmation</label>
        <input
          type="password"
          name="passwordConf"
          class="text-input"
          v-model="passwordConf"
        />
      </div>
      <div>
        <label for="topic">Role</label>
        <select name="role" class="text-input" v-model="role">
          <!-- <option :value="Author">Author</option> -->
          <!-- <option :value="Admin">Admin</option> -->
          <option v-for="role in roles" :key="role.name" :value="role.value"
            >{{ role.value }}
          </option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn btn-big">Add User</button>
      </div>
    </form>
  </div>
</template>

<script>
import { uuid } from "@/utils";

export default {
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      passwordConf: "",
      phoneNumber: "",
      success: "",
      role: "",
      roles: [
        { id: 1, value: "Admin" },
        { id: 2, value: "Author" },
        { id: 3, value: "User" },
      ],
    };
  },

  methods: {
    createUser() {
      const user = {
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        articles: [],
        role: this.role,
        id: uuid(),
      };
      console.log(user);
      this.$store
        .dispatch("userModule/createUser", user)
        .then(() => {
          this.success = "User successfully created...";
          this.clearInputs();
        })
        .catch((error) => {
          this.success = error;
        });
    },
    clearInputs() {
      this.username = "";
      this.name = "";
      this.email = "";
      this.password = "";
      this.phoneNumber = "";
      this.articles = [];
      this.role = "";
      this.passwordConf = "";
    },
  },
};
</script>

<style></style>
