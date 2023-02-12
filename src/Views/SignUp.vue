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
          class="w-full lg:w-1/2 flex flex-col items-center justify-center p-32"
          style="background-image: url('src/assets/photo.jpg ')"
        ></div>
        <div class="w-full lg:w-1/2 py-16 px-12">
          <h1 class="text-blue-900 font-bold uppercase text-center text-3xl mb-3">
            Welcome
          </h1>
          <h2 class="text-center text-3xl mb-4">Register For A Meal</h2>
          <p class="mb-4">Create your account. It’s free and only takes a second</p>
          <form @submit.prevent="onSubmit">
            <div class="mt-5">
              <input
                class="appearance-none bg-transparent border-t-0 border-x-0 border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-none focus:outline-0"
                type="text"
                name="Username"
                placeholder="Username"
                v-model="Username"
              />
            </div>
            <div class="mt-5">
              <input
                type="text"
                name="email"
                placeholder="Email"
                v-model="Email"
                class="appearance-none bg-transparent border-t-0 border-x-0 border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-none focus:outline-0"
              />
              <!-- <span class="bg-orange-100 text-orange-700" ><icon
                icon="clarity:warning-standard-solid"
                
                class="inline-block text-orange-700 mb-1 mx-1"          
            /><ErrorMessage name="email" /></span> -->
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
              <input
                type="text"
                name="Food Types"
                placeholder="Favourite food types"
                v-model="foodTypes"
                @keyup="addFoodType"
                class="appearance-none bg-transparent border-t-0 border-x-0 border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-none focus:outline-0"
              />
            </div>
            <div v-for="food in foods" :key="food" class="inline-block mt-1 px-1">
              <span
                class="bg-gray-300 pl-2 pr-1 rounded-full inline-block font-semibold text-lg tracking-normal text-gray-700"
                >{{ food
                }}<icon
                  icon="clarity:times-circle-line"
                  class="inline-block cursor-pointer mb-1"
                  @click="deleteFood(food)"
              /></span>
            </div>
            <!-- <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
              <p class="font-bold">Be Warned</p>
              <p>Something not ideal might be happening.</p>
            </div> -->
            <div class="mt-5">
              <input type="checkbox" v-model="terms" class="border border-gray-400" />
              <span>
                I accept the
                <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> &
                <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a>
              </span>
            </div>
            <div class="mt-5">
              <button
                class="w-full text-blue-900 border py-3 border-blue-500 hover:border-transparent hover:text-white font-semibold text-center bg-transparent hover:bg-blue-700 hover:font-bold"
              >
                Register Now
              </button>
            </div>
            <p class="text-blue-900">Already Registered? <router-link to="/login" class="text-blue-500 font-bold underline cursor-pointer" >Login</router-link></p>
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
  name: "SignUp",
  // components: {
  //   Form,
  //   Field,
  //   ErrorMessage,
  // },
  data() {
    return {
      Username:"",
      Email: "",
      Password: "",
      terms: "false",
      foodTypes: "",
      foods: []
    };
  },
  methods: {
    addFoodType(e) {
      if (e.key === " " && this.foodTypes) {
        if (!this.foods.includes(this.foodTypes)) {
          this.foods.push(this.foodTypes);
        }
        this.foodTypes = "";
      }
    },
    deleteFood(food) {
      this.foods = this.foods.filter((item) => {
        return food != item;
      });
    },
    async onSubmit() {
      let result =await axios.post('http://localhost:3000/user',{
        Username:this.Username,
        Email:this.Email,
        Password:this.Password,
        Food_Types:this.foods,
        Terms:this.terms
      })
      console.log(result)
      if(result.status == 201){
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:"home"})

      }
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
