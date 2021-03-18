import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Single from "./pages/BlogPost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/admin/Home";
import Articles from "./pages/admin/articles/Articles";
import Create from "./pages/admin/articles/Create";
import Update from "./pages/admin/articles/Update";
import Users from "./pages/admin/users/Users";
import Topics from "./pages/admin/topics/Topics";
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
    children: [
      {
        path: "articles",
        // component: Articles,
        children: [
          { path: "create", component: Create },
          { path: "/", component: Articles },
          { path: "update", component: Update },
        ],
      },
      { path: "users", component: Users },
      { path: "topics", component: Topics },
      { path: "messages", component: Messages },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
