import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      jwt.verify(token, authConfig.secret);
      return true;
    } catch (err) {
      console.error(err);

      return false;
    }
  } else {
    return false;
  }
};

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/inicial",
    name: "inicial",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/inicial.vue"),
    
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cadastro.vue"),
  },
  {
    path: "/perfil",
    name: "Perfil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Perfil.vue"),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === "Perfil" || to.name === "inicial") && !isAuthenticated)
    next({ name: "login" });
  else next();
});

export default router
