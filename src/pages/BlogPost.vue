<template>
  <Navbar />
  <div class="body-wrapper">
    <div class="page-wrapper">
      <div class="content">
        <div class="main-content single">
          <h1 class="post-title">{{ article.title }}</h1>
          <!-- <div class="post-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est
              consectetur provident aspernatur, voluptatem laborum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sapiente nisi eligendi quaerat numquam consequuntur
              qui repellendus ipsum nam ab. Voluptatem distinctio illo sint
              provident accusantium architecto similique, assumenda maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              eaque facere quaerat in deleniti? Numquam corrupti earum illo eos
              eum quidem obcaecati tempora eius. Alias, eos! Dolor aut
              voluptatem ipsum mollitia accusamus iste nisi adipisci, illum
              necessitatibus provident ex possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, odit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est
              consectetur provident aspernatur, voluptatem laborum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sapiente nisi eligendi quaerat numquam consequuntur
              qui repellendus ipsum nam ab. Voluptatem distinctio illo sint
              provident accusantium architecto similique, assumenda maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              eaque facere quaerat in deleniti? Numquam corrupti earum illo eos
              eum quidem obcaecati tempora eius. Alias, eos! Dolor aut
              voluptatem ipsum mollitia accusamus iste nisi adipisci, illum
              necessitatibus provident ex possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, odit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est
              consectetur provident aspernatur, voluptatem laborum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sapiente nisi eligendi quaerat numquam consequuntur
              qui repellendus ipsum nam ab. Voluptatem distinctio illo sint
              provident accusantium architecto similique, assumenda maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              eaque facere quaerat in deleniti? Numquam corrupti earum illo eos
              eum quidem obcaecati tempora eius. Alias, eos! Dolor aut
              voluptatem ipsum mollitia accusamus iste nisi adipisci, illum
              necessitatibus provident ex possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, odit.
            </p>
          </div> -->
          <div class="post-content">{{ article.content }}</div>
          <Comment />
        </div>
        <aside class="sidebar single">
          <FacebookPlugin />
          <SidebarPost />
          <Topics />
        </aside>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarPost from "../components/SidebarPost";
import Topics from "../components/Topics";
import FacebookPlugin from "../components/FacebookPlugin";
import Comment from "../components/Comment";
import axios from "../plugins/axios";

export default {
  components: { Navbar, Footer, SidebarPost, Topics, Comment, FacebookPlugin },
  data() {
    return {
      article: {},
    };
  },
  computed: {
    postId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    axios.get(`articles/${this.postId}`).then((response) => {
      this.article = response.data;
    });
  },
};
</script>

<style></style>
