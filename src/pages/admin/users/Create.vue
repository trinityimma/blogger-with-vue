<template>
  <div class="contents">
    <h2 class="page-title">Add User</h2>
    <form action="#" method="post">
      <div>
        <label>Username</label>
        <input type="text" name="username" class="text-input" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" class="text-input" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" class="text-input" />
      </div>
      <div>
        <label>Password Confirmation</label>
        <input type="password" name="passwordConf" class="text-input" />
      </div>
      <div>
        <label for="topic">Role</label>
        <select name="role" class="text-input">
          <option value="Author">Author</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn btn-big">Add User</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
