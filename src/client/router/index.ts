import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: "仪表盘" },
      component: () => import("@/views/home.vue")
    },
    {
      path: '/article',
      name: 'article',
      meta: { title: "文章管理" },
      component: () => import("@/views/article.vue")
    },
    {
      path: '/edit',
      name: 'edit_article',
      meta: { title: "编辑" },
      component: () => import("@/edit/edit-article.vue")
    },
    {
      path: '/mumbler',
      name: 'mumbler',
      meta: { title: "动态管理" },
      component: () => import("@/views/mumbler.vue")
    },
    {
      path: '/comment',
      name: 'comment',
      meta: { title: "评论" },
      component: () => import("@/views/comment.vue")
    },
    {
      path: '/links',
      name: 'links',
      meta: { title: "友情链接" },
      component: () => import("@/views/links.vue")
    },
    {
      path: '/setting',
      name: 'setting',
      meta: { title: "设置" },
      component: () => import("@/views/setting.vue")
    },
  ]
})

export default router
