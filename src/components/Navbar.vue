<template>
  <input type="checkbox" id="menu" />
  <header class="navbar">
    <div class="logo">
      <h1 class="logo-text">Blogger</h1>
    </div>
    <label for="menu" class="menu-toggle">
      <i class="fas fa-bars"></i>
    </label>
    <nav>
      <ul class="nav">
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            Contact
          </router-link>
        </li>
        <!-- <li><a href="#">Sign Up</a></li>
        <li><a href="#">Login</a></li> -->
        <li>
          <a href="#">
            <i class="fa fa-user"></i>
            Immaculata
            <i class="fa fa-chevron-down" style="font-size: 0.8em"></i>
          </a>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#" class="logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

</script>

<style>
.navbar {
  background: var(--main-color);
  height: 66px;
}
.navbar * {
  color: white;
}
.navbar .logo {
  float: left;
  height: inherit;
  margin-left: 2em;
  display: flex;
  align-items: center;
}

.navbar .logo-text {
  font-family: "Candal", sans-serif;
}
.navbar ul {
  float: right;
  list-style: none;
}
.navbar ul li {
  float: left;
  position: relative;
}
.navbar ul li ul {
  position: absolute;
  top: 66px;
  right: 0;
  width: 180px;
  display: none;
}
.navbar ul li:hover ul {
  display: block;
}
.navbar ul li ul li {
  width: 100%;
}
.navbar ul li ul li a {
  padding: 10px;
  background: white;
  color: #444;
}
.navbar ul li ul li a.logout {
  color: red;
}
.navbar ul li ul li a:hover {
  background: #d5d6d6;
}
.navbar ul li a {
  display: block;
  padding: 21px;
  font-size: 1.1em;
  text-decoration: none;
}
.navbar ul li a:hover {
  background: #006669;
  transition: 0.5s;
}

.navbar .menu-toggle,
#menu {
  display: none;
}

@media only screen and (max-width: 780px) {
  .navbar {
    position: relative;
  }
  .navbar ul {
    width: 100%;
    background: #0e9aa0;
    max-height: 0px;
    overflow: hidden;
  }
  .showing {
    max-height: 100em;
  }
  .navbar ul li {
    width: 100%;
  }
  .navbar ul li ul {
    position: static;
    display: block;
    width: 100%;
  }
  .navbar ul li ul li a:hover {
    background: #006669;
  }
  .navbar ul li ul li a {
    padding: 10px;
    background: #0e9aa0;
    color: white;
    padding-left: 50px;
  }
  .navbar .menu-toggle {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 1.9em;
  }
  .navbar .logo {
    margin-left: 0.5em;
  }
  #menu:checked ~ .navbar ul {
    max-height: 100em;
  }
}
</style>
