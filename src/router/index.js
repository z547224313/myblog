import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const TagPage = () => import('@/views/TagPage/TagPage.vue')
const TipPage = ()=> import('@/views/TipPage/TipPage.vue')
const DemoPage = ()=> import('@/views/DemoPage/DemoPage.vue')
const Board = ()=>import('@/views/Board/Board.vue')
const About = ()=>import('@/views/About/About.vue')
const AddArticle = ()=>import('@/views/AddArticle/AddArticle.vue')
const Article = ()=>import('@/views/Article/Article.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/addArticle'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tagPage',
    component: TagPage
  },
  {
    path:'/tipPage',
    component: TipPage
  },
  {
    path:'/demoPage',
    component: DemoPage
  },
  {
    path:'/Board',
    component: Board
  },
  {
  path:'/about',
    component:About
  },
  {
    path:'/addArticle',
    component: AddArticle
  },
  {
    path:'/article',
    component: Article
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
