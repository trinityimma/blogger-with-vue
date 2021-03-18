<template>
  <Navbar />
  <div class="auth-content">
    <form action="register.html" method="post">
      <h2 class="form-title">Register</h2>
      <!-- <div class="msg success error">
          <li>Username required</li>
        </div> -->
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
      <button type="submit" name="register-btn" class="btn btn-big auth-btn">
        Register
      </button>
      <p>Or <a href="login.html"> Sign in</a></p>
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  components: { Navbar },
};
</script>
