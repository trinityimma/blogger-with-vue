<template>
  <Navbar />
  <div class="contact-container">
    <h1>Connect With Us</h1>
    <p>
      I would love your feedback and also love to respond to your queries.
      <br />
      Feel free to get in touch with me.
    </p>
    <div class="contact-box">
      <div class="contact-left">
        <h3>Send your request/feedback</h3>
        <form action="/contact" method="POST">
          <div class="input-row">
            <div class="input-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Smith"
              />
            </div>
            <div class="input-group">
              <label for="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phoneNumber"
                placeholder="+234 810 067 1990"
              />
            </div>
          </div>
          <div class="input-row">
            <div class="input-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnsmith@gmail.com"
              />
            </div>
            <div class="input-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subjext"
                name="subject"
                placeholder="Subject"
              />
            </div>
          </div>

          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" class="button">Send</button>
        </form>
      </div>
      <div class="contact-right">
        <h3>Reach Me</h3>
        <table>
          <tr>
            <td>Email</td>
            <td>contact@blogger.com</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>+234 907 751 0027</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>Abuja, Nigeria</td>
          </tr>
        </table>

        <h3 class="title-social">OR &nbsp; Connect with me</h3>
        <ul class="social-link">
          <li>
            <a href="http://linkedin.com/in/ekeomaisaac"
              ><i class="fab fa-linkedin"></i
            ></a>
          </li>
          <li>
            <a href="https://www.facebook.com/ekeoma.isaac.1"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://instagram.com/kingekeoms?r=nametag"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components: { Navbar, Footer },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
}

.contact-container {
  width: 80%;
  margin: 50px auto;
  padding-top: 40px;
  font-size: 1.1rem;
}

.contact-box {
  background: #fff;
  display: flex;
}

.contact-left {
  flex-basis: 60%;
  padding: 40px 60px;
  border: 2px solid var(--main-color);
}
.contact-right {
  flex-basis: 40%;
  padding: 40px;
  background: var(--main-color-dark);
  color: white;
  border: 2px solid #fff;
}
.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.input-row .input-group {
  flex-basis: 45%;
}
input {
  width: 100%;
  border: none;
  border: 1px solid #ccc;
  outline: none;
  padding: 5px;
}
h1 {
  margin-bottom: 10px;
}
.contact-container p {
  margin-bottom: 40px;
}

textarea {
  width: 100%;
  border: 1px solid #ccc;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
}

label {
  margin-bottom: 6px;
  display: block;
}

.button {
  background: white;
  width: 100px;
  border: none;
  outline: none;
  color: var(--main-color);
  height: 35px;
  border: 1px solid var(--main-color);
  cursor: pointer;
  border-radius: 30px;
  margin-top: 20px;
  transition: 0.25s;
}
button:hover {
  background: var(--main-color);
  color: white;
  border: 1px solid white;
  transition: 0.25s;
}
.contact-left h3 {
  font-weight: 600;
  margin-bottom: 30px;
}
.contact-right h3 {
  font-weight: 600;
  color: white;
}

tr td:first-child {
  padding-right: 20px;
}
tr td {
  padding-top: 20px;
}
.contact-right .title-social {
  padding: 30px 0;
}

.contact-right .social-link {
  padding-left: 0;
}
.contact-right .social-link li {
  display: inline-block;
}
.contact-right .social-link li a i {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  line-height: 3rem;
  text-align: center;
  border: 1px solid white;
  margin-right: 10px;
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s;
}
.contact-right .social-link li a i:hover {
  color: var(--main-color-dark);
  background: white;
  transition: 0.25s;
}

@media only screen and (max-width: 1000px) {
  .contact-box {
    display: block;
  }

  label {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 500px) {
  .contact-container {
    margin: 10px auto !important;
    padding-top: 80px;
  }
  .contact-container h1 {
    font-size: 1.5rem;
  }
  .contact-left,
  .contact-right {
    padding: 20px;
  }
  .input-row {
    display: block;
  }
  td {
    display: block;
  }
}
</style>
