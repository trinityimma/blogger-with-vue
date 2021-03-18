<template>
<Navbar />
  <div class="auth-content">
    <form action="register.html" method="post">
      <h2 class="form-title">Login</h2>
      <div>
        <label>Username</label>
        <input type="text" name="username" class="text-input" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" class="text-input" />
      </div>
      <button type="submit" name="register-btn" class="btn btn-big auth-btn">
        Login
      </button>
      <p>Or <a href="register.html"> Sign Up</a></p>
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  components: { Navbar },
};
</script>

