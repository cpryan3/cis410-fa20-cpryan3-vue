import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

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
        }
    }

})