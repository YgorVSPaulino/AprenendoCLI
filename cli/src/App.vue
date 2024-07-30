<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      question: undefined,
      chosenAnswer: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      sumbitCorrectAnswer: false
    };
  },
  computed: {
    answers() {
      let answers = [...this.incorrectAnswers];
      answers.splice(
        Math.round(Math.random() * answers.length),
        0,
        this.correctAnswer
      );
      return answers;
    },
  },
  methods: {
    submitAnswer() {
      if (!this.chosenAnswer) {
        alert('Escolha uma opcão!!')
      } else {
        this.sumbitCorrectAnswer = true
        if (this.chosenAnswer === this.correctAnswer) {
          alert ('You got it right')
        } else {
          alert ('You got it wrong')
        }
      }
    }
  },
  created() {
    axios.get("https://opentdb.com/api.php?amount=10").then((response) => {
      this.question = response.data.results[0].question;
      this.incorrectAnswers = response.data.results[0].incorrect_answers;
      this.correctAnswer = response.data.results[0].correct_answer;
    });
  },
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="max-w-[700px] mx-auto p-4 bg-white shadow-md rounded text-center">
      <h1 v-html="question"></h1>

      <div
        class="flex flex-col items-center space-y-4 mt-4">
        <div  v-for="(answer, index) in answers"
        :key="index" class="flex items-center space-x-2">
          <input
            :disabled="sumbitCorrectAnswer"
            type="radio"
            :value="answer"
            v-model="this.chosenAnswer"
            :id="'answer-' + index"
            name="answer" />
          <label :for="'answer-' + index" v-html="answer"></label>
        </div>
        <button
        @click="submitAnswer"
        class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        Send
      </button>
      </div>
      
    </div>
  </div>
</template>

<style scoped></style>
