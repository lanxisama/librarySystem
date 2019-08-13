import Borrow from '../components/Borrow/Borrow'    //借书
import Recommend from '../components/Recommend/Recommend'  //推荐
import Donation from '../components/Donation/Donation'  //捐赠
import BookList from '../components/bookAdmin/BookList'
import AllBook from '../components/bookAdmin/Admin/AllBook'
import BorrowMessage from '../components/bookAdmin/Admin/BorrowMessage'
import VueRouter from 'vue-router'
import Vue from 'vue'
 
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:'/',
            component:BookList,
            redirect:"/bookAdmin/all",
            children:[
                {
                    path:"/bookAdmin/all",
                    component:AllBook
                },
                {
                    path:"/bookAdmin/borrowmessage",
                    component:BorrowMessage
                }
            ]
        },
        {
            path:'/borrow',
            component:Borrow
        },
        {
            path:'/Recommend',
            component:Recommend
        },
        {
            path:'/donation',
            component:Donation
        },
        {
            path:"*",
            redirect:"/"
          }
    ],
    mode:'history'
})