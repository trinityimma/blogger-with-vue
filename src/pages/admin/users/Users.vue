<template>
  <div class="button-group">
    <router-link to="#" class="btn btn-big">Add User</router-link>
    <router-link to="#" class="btn btn-big">Manage Users</router-link>
  </div>
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
        <tr>
          <td>1</td>
          <td>trinityima</td>
          <td>Author</td>
          <td><a href="#" class="edit">edit </a></td>
          <td><a href="#" class="delete">delete </a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Immaculata</td>
          <td>Admin</td>
          <td><a href="#" class="edit">edit </a></td>
          <td><a href="#" class="delete">delete </a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
