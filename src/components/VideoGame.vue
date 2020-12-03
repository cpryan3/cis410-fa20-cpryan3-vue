<template>
    <div>
        <h1>Video Game</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Platform</th>
                    <th>Genre</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisVideoGame in videogames" :key="thisVideoGame.VideoGamePK">
                    <th>{{thisVideoGame.Title}}</th>
                    <td>{{thisVideoGame.Platfrom}}</td>
                    <td>{{thisVideoGame.GenreName}}</td>
                    <td>
                        <router-link :to="`/videogame/${thisVideoGame.VideoGamePK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    computed:{
        videogames(){return this.$store.state.videogames}
    }
}
</script>

<style scoped>

</style>