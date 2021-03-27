<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>

      <div class="container">
        <div class="survey-container">

          <form @submit.prevent="submitThis">
            <base-card>
            <div>
              <h2 class="heading">
                How was your Vue.js learning experience?
              </h2>

              <label class="label" for="name">Your Name</label>

              <input class="input" id="name" type="text" v-model.trim="getNameFromForm" />
              <h1 v-show="!isNameInvalid" class="bg-red-100 text-red-800 font-bold">Come back! You forgot your name!</h1>

            </div>
            </base-card>

            <base-card>
            <div class="text-xl px-5">
              <h2 class="heading">My learning experience was ...</h2>

              <div>

                <input type="radio" name="rating" id="rating-terrible" value="terrible" v-model="getUserRating" />
                <label class="label" for="rating-poor">I'm died</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-bad" value="bad" v-model="getUserRating" />
                <label class="label" for="rating-poor">My nightmare</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-poor" value="poor" v-model="getUserRating" />
                <label class="label" for="rating-poor">Poor</label>
              </div>

              <div>

                <input type="radio" name="rating" id="rating-avg" value="average" v-model="getUserRating" />

                <label class="label" for="rating-avg">Average</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-great" value="great" v-model="getUserRating" />
                <label class="label" for="rating-great">Great</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-exellent" value="exellent" v-model="getUserRating" />
                <label class="label" for="rating-great">Mastered</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-ascended" value="ascended" v-model="getUserRating" />
                <label class="label" for="rating-great">Ascended</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-god" value="god" v-model="getUserRating" />
                <label class="label" for="rating-great">I'm the god!</label>
              </div>

              <h1 v-show="!isUserRatingInvalid" class="bg-red-100 text-red-800 font-bold">You forgot to tell me what is your feeling! TwT</h1>

            </div>
            </base-card>
            <button class="btn">
              Submit
            </button>
             <h1 v-show="isAllThere" class="bg-green-100 text-green-800 font-bold">You are good to go.</h1>
          </form>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      getNameFromForm: '',
      getUserRating: '',
      isNameInvalid: true,
      isUserRatingInvalid: true,
      isAllThere: false,
      surveyResults: []
    }
    
  },
  methods:{
    submitThis(){
        this.isNameInvalid = this.getNameFromForm === '' ? false : true;
        this.isUserRatingInvalid = this.getUserRating === '' ? false : true;

        if(this.isNameInvalid  &&  this.isUserRatingInvalid){
          this.isAllThere = true;
        } else {
          this.isAllThere = false;
        }
    },
    asyncfetchSurveyResult(){
      constres=awaitfetch('http://localhost:5000/surveyResults')
      constdata=awaitres.json()
      returndata
    },
    asynccreated(){
      this.surveyResults=awaitthis.fetchSurveyResult()
      }
  }
}
</script>
