<template>
  <div class="contents">
    <h2 class="page-title">Update Topic</h2>
    <form action="#" method="post">
      <div>
        <label for="title">Name</label>
        <input type="text" name="name" class="text-input" />
      </div>
      <div>
        <label for="body">Description</label>
        <textarea
          type="text"
          name="description"
          class="text-input"
          id="body"
        ></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-big">Update Topic</button>
      </div>
    </form>
  </div>
</template>
