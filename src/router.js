import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import TopicsList from "./pages/admin/topics/TopicsList";
import CreateTopic from "./pages/admin/topics/Create";
import UpdateTopic from "./pages/admin/topics/Update";
import Messages from "./pages/admin/Messages";

const routes = [
  { path: "/", component: Home },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */ "./pages/About"),
  },
  {
    path: "/contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "./pages/Contact"),
  },
  {
    path: "/articles/:id",
    name: "BlogPost",
    component: () =>
      import(/* webpackChunkName: "BlogPost" */ "./pages/BlogPost"),
  },
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "login" */ "./pages/Login"),
  },
  {
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "signup" */ "./pages/Register"),
  },
  {
    path: "/admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "./pages/admin/Home"),
    redirect: "/admin/articles",
    children: [
      {
        path: "articles",
        component: () =>
          import(
            /* webpackChunkName: "articles" */ "./pages/admin/articles/Article"
          ),
        children: [
          {
            path: "",
            component: () =>
              import(
                /* webpackChunkName: "articles" */ "./pages/admin/articles/List"
              ),
          },
          {
            path: "create",
            component: () =>
              import(
                /* webpackChunkName: "articles" */ "./pages/admin/articles/Create"
              ),
          },
          {
            path: "/update/:id",
            name: "UpdateArticle",
            component: () =>
              import(
                /* webpackChunkName: "articles" */ "./pages/admin/articles/Update"
              ),
          },
        ],
      },
      {
        path: "users",
        component: () => import("./pages/admin/users/Users"),
        children: [
          {
            path: "",
            component: () =>
              import(
                /* webpackChunkName: "users" */ "./pages/admin/users/UsersList"
              ),
          },
          {
            path: "create",
            component: () =>
              import(
                /* webpackChunkName: "users" */ "./pages/admin/users/Create"
              ),
          },
          {
            path: "update",
            component: () =>
              import(
                /* webpackChunkName: "users" */ "./pages/admin/users/Update"
              ),
          },
        ],
      },
      {
        path: "topics",
        component: () =>
          import(
            /* webpackChunkName: "topics" */ "./pages/admin/topics/Topics"
          ),
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
