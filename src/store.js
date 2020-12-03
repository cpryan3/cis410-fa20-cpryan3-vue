import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        videogames: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeVideoGames(state, myVideoGames){
            state.videogames = myVideoGames
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions:{
        getVideoGames({commit}){
            axios.get('/videogame')
            .then((myResponse)=>{
                console.log("response from get videogame action", myResponse);
                commit('storeVideoGames', myResponse.data)
            })
            .catch(()=>{console.log("error in getVideoGames action")})
        },
        logout({commit, state}){
            axios.post('/reviewer/logout', null,{
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");
        }
    }

})