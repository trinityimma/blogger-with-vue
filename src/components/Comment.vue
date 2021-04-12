<template>
  <div class="comment">
    <h2 class>Leave a comment</h2>
    <form action="#">
      <input
        type="text"
        required
        name="name"
        class="text-input"
        placeholder="Name"
      />
      <textarea
        name="comment"
        class="text-input"
        rows="3"
        placeholder="Comment..."
        required
      />
      <button type="submit" class="btn btn-big">Submit</button>
    </form>
    <div>
      <h2 class>Comments on this article</h2>

      <div class="comment-container">
        <p>"<strong>Immaculata</strong>" <span>Mar 24, 2021</span></p>
        <div class="comment-text">Lorem ipsum dolor sit amet.</div>
      </div>
      <!-- <div class="reply-container">
        <p>"<strong>Somto</strong>" <span>Mar 25, 2021</span></p>
        <div class="comment-text">
          Lorem ipsum dolor sit amet, orem ipsum dolor sit amet.
        </div>
      </div> -->
    </div>
    <div class="comment-container">
      <p>"<strong>Mmesoma</strong>" <span>Mar 25, 2021</span></p>
      <div class="comment-text">
        Lorem ipsum dolor sit amet, orem ipsum dolor sit amet.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.comment {
  margin: 50px 0;
  background: lightgray;
  border: 1px solid rgba(39, 36, 36,0.4 );
  padding: 20px;
}
.comment h2 {
  margin: 20px 0;
}

.comment :is(input, textarea) {
  margin-bottom: 10px;
}
.comment :is(.comment-container, .reply-container) {
  margin: 20px 0;
  background: white;
  padding: 10px;
  border-radius: 8px;
}
.comment .reply-container {
  margin: 5px 0;
  margin-left: 100px;
  background: white;
}
</style>
