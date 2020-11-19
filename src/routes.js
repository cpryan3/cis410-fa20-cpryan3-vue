import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Login from './components/Login.vue'
import VideoGame from './components/VideoGame.vue'
import VideoGameDetail from './components/VideoGameDetail.vue'
import ReviewCreate from './components/ReviewCreate.vue'
import SignUp from './components/SignUp.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/videogames', component: VideoGame},
    {path: '/videogames/:pk', component: VideoGameDetail,
        children: [
            {path: 'review', component: ReviewCreate}
        ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound},
]

export default new VueRouter({mode: 'history', routes})
