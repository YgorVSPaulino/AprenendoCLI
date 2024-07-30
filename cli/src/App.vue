<script >
import axios from 'axios';


export default {
  name: 'App',
  data() {
    return {
      question: undefined,
      userAnswer: undefined
    }
  },
  created() {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then((response) => {
      this.question = response.data.results[0].question;
    })
   
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-[700px] mx-auto p-4 bg-white shadow-md rounded text-center">
      <h1 v-html="this.question"></h1>

      <div class="flex flex-col items-center space-y-4 mt-4">
        <div class="flex items-center space-x-2">
          <input type="radio" value="true" v-model="userAnswer" name="answer" id="true">
          <label for="true">True</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="radio" value="false" v-model="userAnswer" name="answer" id="false">
          <label for="false">False</label>
        </div>
      </div>

      <button class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Send</button>
    </div>
  </div>
</template>

<style scoped>
</style>
