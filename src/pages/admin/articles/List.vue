<template>
  <div class="contents">
    <h2 class="page-title">Manage Articles</h2>
    <table>
      <thead>
        <th>SN</th>
        <th>Title</th>
        <th>Author</th>
        <th colspan="3">Action</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>This is the first post</td>
          <td>Immaculata</td>
          <td>
            <router-link to="/admin/articles/update" class="edit"
              >edit
            </router-link>
          </td>
          <td><a href="#" class="delete">delete </a></td>
          <td><a href="#" class="publish">publish </a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>This is the second post</td>
          <td>Fabian</td>
          <td><a href="#" class="edit">edit </a></td>
          <td><a href="#" class="delete">delete </a></td>
          <td><a href="#" class="publish">publish </a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
