<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3>{{FName}}'s Reviews </h3>
         <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later</p>

         <table v-if="reviewsByUser" class="table">
            <thead>
                <th>Title</th>
                <th>Snopsis</th>
                <th>Score</th>
            </thead>
            <tbody>
                <tr v-for="thisReview in reviewsByUser" :key="thisReview.PostPK">
                    <th><router-link :to="`/videogame/${thisReview.VideoGamePK}`">{{thisReview.Title}}</router-link></th>
                    <th>{{thisReview.Synopsis}}</th>
                    <th>{{thisReview.Score}}</th>
                </tr>
            </tbody>   
        </table>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            reviewsByUser: null,
            accountError: false
        }
    },
    computed:{
    FName(){
        console.log(this.$store.state)
        return this.$store.state.user.FName}
    },
    created(){
        axios.get("/posts/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{ 
            console.log("here is the reviews/me response:", response)
            this.reviewsByUser = response.data})
        .catch(()=>{
            this.accountError = true
        })
    }
}
</script>

<style scoped>

</style>