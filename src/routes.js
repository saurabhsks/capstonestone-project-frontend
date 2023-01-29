import {createWebHistory,createRouter} from 'vue-router'
//import App from './App.vue'
import ListBar from './ListBar.vue'
import SearchItem from './components/SearchItem.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import HomePage from './HomePage.vue'
import HotelPage from './HotelPage.vue'
import RoomPage from './components/RoomPage.vue'
const routes=[
    // {
    //     name:'App',
    //     component:App,
    //     // path:'/'
    // },
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'ListBar',
          component:ListBar,
        path:'/listbar',
        
    },
    {
        name:'SearchItem',
        component:SearchItem,
        path:'/searchitem'
       
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'Login',
        component:LogIn,
        path:'/login'
    },
    {
        name:'HotelPage',
        component:HotelPage,
        path:'/hotelpage'
    },
    {
        name:'RoomPage',
        component:RoomPage,
        path:'/roompage'
    }
        
];


const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router;