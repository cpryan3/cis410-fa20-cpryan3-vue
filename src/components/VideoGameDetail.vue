<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{videogame.Title}}</h2>
                <br/>
                <p>Platform: <br/> <strong>{{videogame.Platfrom}}</strong></p>
                <p>Genre: <br/> <strong>{{videogame.GenreName}}</strong></p>
            </div>
        </div>
        <br/>
        <router-link v-if="auth" :to="`/videogame/${this.$route.params.pk}/review`">
            <button type="button" class="btn btn-success">Add a Review</button>
        </router-link>
        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Sign In to Add a Review</button>
        </router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed:{
        videogame(){
            var videogames = this.$store.state.videogames;
            var thisVideoGame = videogames.find((aVideoGame)=> aVideoGame.VideoGamePK == this.$route.params.pk)

            console.log("here is the videogame you want", thisVideoGame);
            return thisVideoGame;
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>