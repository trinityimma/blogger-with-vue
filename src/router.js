import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Single from "./pages/BlogPost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/admin/Home";
import Article from "./pages/admin/articles/Article";
import List from "./pages/admin/articles/List";
import CreateArticle from "./pages/admin/articles/Create";
import UpdateArticle from "./pages/admin/articles/Update";
import Users from "./pages/admin/users/Users";
import UsersList from "./pages/admin/users/UsersList";
import CreateUser from "./pages/admin/users/Create";
import UpdateUser from "./pages/admin/users/Update";
import Topics from "./pages/admin/topics/Topics";
import TopicsList from "./pages/admin/topics/TopicsList";
import CreateTopic from "./pages/admin/topics/Create";
import UpdateTopic from "./pages/admin/topics/Update";
import Messages from "./pages/admin/Messages";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/single", component: Single },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/admin",
    component: Admin,
    redirect: "/admin/articles",
    children: [
      {
        path: "articles",
        component: Article,
        children: [
          { path: "", component: List },
          { path: "create", component: CreateArticle },
          { path: "update", component: UpdateArticle },
        ],
      },
      {
        path: "users",
        component: Users,
        children: [
          { path: "", component: UsersList },
          { path: "create", component: CreateUser },
          { path: "update", component: UpdateUser },
        ],
      },
      {
        path: "topics",
        component: Topics,
        children: [
          { path: "", component: TopicsList },
          { path: "create", component: CreateTopic },
          { path: "update", component: UpdateTopic },
        ],
      },

      { path: "messages", component: Messages },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
