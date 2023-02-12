<template>
    <div
      class="min-h-screen py-40"
      style="background-image: linear-gradient(115deg, #9f7aea, #fee2fe)"
    >
      <div class="container mx-auto">
        <div
          class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
        >
          <div
            class="w-full lg:w-1/2 flex flex-col items-center justify-center p-32 bg-no-repeat bg-cover"
            style="background-image: url('src/assets/serve.jpg ')"
          ></div>
          <div class="w-full lg:w-1/2 py-16 px-12">
            <h1 class="text-blue-900 font-bold uppercase text-center text-3xl mb-3">
              Welcome
            </h1>
            <h2 class="text-center text-3xl mb-4">Login For A Meal</h2>
            <form @submit.prevent="onSubmit">
              <div class="mt-5">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  v-model="Email"
                  class="appearance-none bg-transparent border-t-0 border-x-0 border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-none focus:outline-0"
                />
              </div>
              <div class="mt-5">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  v-model="Password"
                  class="appearance-none bg-transparent border-t-0 border-x-0 border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-none focus:outline-0"
                />
              </div>
              <div class="mt-5">
                <button
                 @click="login"
                  class="w-full text-blue-900 border py-3 border-blue-500 hover:border-transparent hover:text-white font-semibold text-center bg-transparent hover:bg-blue-700 hover:font-bold"
                >
                  Login
                </button>
              </div>
              <p class="text-blue-900">Don't have an Account? <router-link to="/signup" class="text-blue-500 font-bold underline cursor-pointer" >Signup</router-link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  // import { Form, Field, ErrorMessage } from 'vee-validate';
  import axios from 'axios'
  export default {
    name: "Login",
    // components: {
    //   Form,
    //   Field,
    //   ErrorMessage,
    // },
    data() {
      return {
        Email:"",
        Password: "",
      };
    },
    methods: {
    async login() {
        
        let result =await axios.get('http://localhost:3000/user?email=${this.Email}&password=${this.Password}')
        if(result.status == 200 && result.data.length>0){
          localStorage.setItem("user-info",JSON.stringify(result.data[0]))
          this.$router.push({name:"home"})
        }
        console.warn(result)
      },
      // validateEmail(value) {
      //   // if the field is empty
      //   if (!value) {
      //     return 'This field is required';
      //   }
      //   // if the field is not a valid email
      //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      //   if (!regex.test(value)) {
      //     return 'This field must be a valid email';
      //   }
      //   // All is good
      //   return true;
      // },
    },
    mounted(){
    let user = localStorage.getItem('user-info')
    if(user){
      this.$router.push({name:"home"})
    }
  }
  };
  </script>
  