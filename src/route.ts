import Vue from "vue"
import VueRouter from "vue-router"

import DemoPage from "./pages/DemoPage.vue"

Vue.use(VueRouter)

export const routes = [
  { path: "/", redirect: { name: "demo" } },
  { path: "/demo", name: "demo", component: DemoPage },
]

const router = new VueRouter({
  routes: routes,
})

export default router
