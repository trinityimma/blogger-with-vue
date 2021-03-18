<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h1 class="logo-text">Blooger</h1>
        <p>
          Blooger is a fictional blog for the purpose of mastering vuejs by
          transitioning from vanilla javascript to vuejs. See me in two months
          time as a vuejs master by God's grace.
        </p>
        <div class="contact">
          <span><i class="fas fa-phone"></i>&nbsp; 123-456-789</span>
          <span><i class="fas fa-envelope"></i>&nbsp; info@blooger.com</span>
        </div>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-section links">
        <h2>Quick Links</h2>
        <br />
        <ul>
          <a href="#">
            <li>Events</li>
          </a>
          <a href="#">
            <li>Team</li>
          </a>
          <a href="#">
            <li>Mentors</li>
          </a>
          <a href="#">
            <li>Gallery</li>
          </a>
          <a href="#">
            <li>Terms and Condition</li>
          </a>
        </ul>
      </div>
      <div class="footer-section contact-form">
        <h2>Contact us</h2>
        <br />
        <form action="index.html" method="post">
          <input
            type="email"
            name="email"
            placeholder="Your email address..."
            class="text-input contact-input"
          />
          <textarea
            name="message"
            rows="4"
            class="text-input contact-input"
            placeholder="Your message..."
          ></textarea>
          <button type="submit" class="btn btn-big contact-btn">
            <i class="fas fa-envelope"></i> &nbsp;Send
          </button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; blooger.com | Designed by Immaculata
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background: #303036;
  color: #d3d3d3;
  height: 400px;
  position: relative;
}
.footer .footer-content {
  height: 350px;
  display: flex;
}
.footer .footer-content .footer-section {
  flex: 1;
  padding: 25px;
}
.footer .footer-content :is(h1, h2) {
  color: white;
}
.footer .footer-content .about p {
  margin: 10px 0;
}
.footer .footer-content .about .contact span {
  display: block;
  font-size: 1.1em;
  margin-bottom: 8px;
}
.footer .footer-content .about .socials a {
  border: 1px solid gray;
  width: 45px;
  height: 40px;
  padding-top: 5px;
  margin-right: 5px;
  text-align: center;
  display: inline-block;
  font-size: 1.3em;
  border-radius: 5px;
  transition: all 0.3s;
}
.footer .footer-content .about .socials a:hover {
  border: 1px solid white;
  color: white;
  transition: all 0.3s;
}
.footer .footer-content .links ul a {
  display: block;
  margin-bottom: 10px;
  padding-left: 30px;
  font-size: 1.2em;
  transition: all 0.3s;
}
.footer .footer-content .links ul a:hover {
  color: white;
  margin-left: 15px;
  transition: all 0.3s;
}
.footer .footer-content .contact-form .contact-input {
  background: #272727;
  color: #bebdbd;
  margin-bottom: 10px;
  line-height: 1.5em;
  padding: 0.9rem 1.4rem;
  border: none;
}
.footer .footer-content .contact-form .contact-input:focus {
  background: #1a1a1a;
}
.footer .footer-content .contact-form .contact-btn {
  width: 100%;
  font-size: 1.1em;
  font-family: "Lora", serif;
  transition: .25s;
}
.footer .footer-bottom {
  background: #272727;
  color: #ccc;
  height: 50px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-top: 20px;
}
@media only screen and (max-width: 950px) {
  .footer {
    height: auto;
  }
  .footer .footer-content {
    height: auto;
    flex-direction: column;
  }
  .footer .footer-content .contact-form {
    padding-bottom: 90px;
  }
  .footer .footer-content .contact-form .contact-btn {
    width: 100%;
  }
}
</style>
