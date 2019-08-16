import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('@/components/Home')
const Detail=()=>import('@/components/Detail')
const List=()=>import('@/components/List')
const Single=()=>import('@/components/Single')
const Login=()=>import('@/components/Login')
const User=()=>import('@/components/detail/User')
const Tab=()=>import('@/components/detail/Tab')
const Todolist=()=>import('@/components/detail/Todolist')
const Eachers=()=>import('@/components/detail/Eachers')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      beforeEnter: (to, from, next) => {
        let tokey = sessionStorage.getItem('user');
        if(tokey==='freeless'){
          next()
        }else{
          setTimeout(function(){
            next('/login')
          },1000)
        }
      },
      children:[
        {path:'/',name:'User',component:User},
        {path:'todolist',name:'Todolist',component:Todolist},
        {path:'tab',name:'Tab',component:Tab},
        {path:'eachers',name:'Eachers',component:Eachers},
      ]
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      beforeEnter: (to, from, next) => {
        let tokey = sessionStorage.getItem('user');
        if(tokey==='freeless'){
          next()
        }else{
          setTimeout(function(){
            next('/login')
          },1000)
        }
      },
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single,
      beforeEnter: (to, from, next) => {
        let tokey = sessionStorage.getItem('user');
        if(tokey==='freeless'){
          next()
        }else{
          setTimeout(function(){
            next('/login')
          },1000)
        }
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
