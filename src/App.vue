<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>

      <div class="container">
        <div class="survey-container">
          <form action="">
            <div>
              <h2 class="heading">
                How was your Vue.js learning experience?
              </h2>
              <label class="label" for="name">Your Name</label>
              <input class="input" id="name" type="text" />
            </div>

            <div class="text-xl bg-laxury-bluedark">
              <h2 class="heading">My learning experience was ...</h2>

              <div>
                <input type="radio" name="rating" id="rating-poor" />
                <label class="label" for="rating-poor">I'm died</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-poor" />
                <label class="label" for="rating-poor">My nightmare</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-poor" />
                <label class="label" for="rating-poor">Poor</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-avg" />
                <label class="label" for="rating-avg">Average</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-great" />
                <label class="label" for="rating-great">Great</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-great" />
                <label class="label" for="rating-great">Mastered</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-great" />
                <label class="label" for="rating-great">Ascended</label>
              </div>

              <div>
                <input type="radio" name="rating" id="rating-great" />
                <label class="label" for="rating-great">I'm the god!</label>
              </div>

            </div>
            <button class="btn">
              Submit
            </button>
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
      getUserRating: null,
      isNameInvalid: false,
      isUserRatingInvalid: false
    }
  },
  methods:{

  }
}
</script>
