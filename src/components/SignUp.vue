<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="fname-input">First name</label> <input type="text" id="fname-input" required="required" placeholder="First name" class="form-control" v-model="FName"></div> 
            
            <div class="form-group"><label for="lname-input">Last name</label> <input type="text" id="lname-input" required="required" placeholder="Last name" class="form-control" v-model="LName"></div> 

            <div class="form-group"><label for="company-input">Company Name</label> <input type="text" id="company-input" required="required" placeholder="CompanyName" class="form-control" v-model="CompanyName"></div>
            
            <div class="form-group"><label for="email-input">Email address</label> <input type="email" id="email-input" required="required" placeholder="Enter email" class="form-control" v-model="Email"> 
            <small v-if="dupEmail" class="from-text text-danger">Please chose a different email.</small>
            </div> 
       
            
            <div class="form-group"><label for="password-input">Password</label> <input type="password" id="password-input" placeholder="Password" required="required" value="asdfasdf" class="form-control" v-model="password">
            
            </div> <button type="submit" class="btn btn-primary">Submit</button> <p id="error-signup" class="text-danger">{{errorMessage}}</p>
            
            </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            FName:'',
            LName:'',
            CompanyName:'',
            Email:'',
            password:'',
            errorMessage:'',
            dupEmail: false       
        }
    },
    methods:{
        onSubmit(){

            const myFormData = {
                FName: this.FName,
                LName: this.LName,
                ComapnyName: this.CompanyName,
                Email: this.email,
                password: this.password
            }
            // console.log(myFormData)

            axios.post("/reviewer", myFormData)
                .then((myResponse)=>{
                    this.$router.replace("/signin?signupsuccess=true")
                    })
                    .catch((myError)=>{
                        if(myError.response.status === 409){
                            this.dupEmail = true
                        }else{
                            this.errorMessage = "Cannot sign you up, please try again later."
                        }
                    })
        }
    }
}
</script>

<style scoped>

</style>