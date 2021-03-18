<template>
  <div class="contents">
    <h2 class="page-title">Update Article</h2>
    <form action="#" method="post">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" class="text-input" />
      </div>
      <div>
        <label for="body">Body</label>
        <textarea
          type="text"
          name="body"
          id="body"
          class="text-input"
        ></textarea>
      </div>
      <div class="">
        <label>Image</label>
        <input type="file" name="image" class="text-input" />
      </div>
      <div>
        <label for="topic">Topic</label>
        <select name="topic" class="text-input">
          <option value="Travel">Travel</option>
          <option value="Coding">Coding</option>
          <option value="Poetty">Poetry</option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn btn-big">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
