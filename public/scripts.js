const app = Vue.createApp({
  data() {
    return {
      index: 0,
      selectedAnswer: "",
      correctAnswer: 0,
      wrongAnswer: 0,
      count: 6,
      questions: [
        {
          question: "Comment s'appelle Quentin ?",
          answers: { a: "Loan", b: "Quentin", c: "Yoann", d: "Benoit" },
          correctAnswer: "d",
        },
        {
          question: "Quel est le nom du village où se situe Ugo ?",
          answers: { a: "Ugo Village", b: "Ugo City", c: "Cherier" },
          correctAnswer: "b",
        },
        {
          question: "Que fait on entre midi et deux chez Ugo?",
          answers: {
            a: "Casser toute sorte d'objets",
            b: "Dormir",
            c: "La fête",
            d: "Jouer au ballon",
            e: "préparer un couscous",
          },
          correctAnswer: "a",
        },
        {
          question: "Cherier est elle la capitale de la France ?",
          answers: {
            a: "Oui",
            b: "Non",
            c: "Le Pas de Calais",
            d: "La réponse d",
          },
          correctAnswer: "c",
        },
        {
          question: "Quelle réponse est vraie ? ",
          answers: {
            a: "Tu connais les coordonnées gps de Cherier par coeur",
            b: "Tu sais faire tes propres steaks végan à base de plantes de ton jardin",
            c: "Tu sais compter jusqu'a 4",
            d: "Tu ne sais pas faire tes lacets",
            e: "Tu viens de l'infini et au delà",
          },
          correctAnswer: "e",
        },
        {
          question: "Tu penses pouvoir trouver la bonne réponse ? ",
          answers: {
            a: "peut être celle là",
            b: "où celle ci ?",
            c: "ce n'est pas celle la",
            d: "celle la non plus",
            e: "ca doit donc etre celle la",
            f: "non je blague, c'est ici !",
          },
          correctAnswer: "f",
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"])
        this.correctAnswer++;
      else this.wrongAnswer++;
    },
    nextQuestion() {
      this.index++;
      this.selectedAnswer = "";
    },
    showResults() {
      this.index++;
    },
    resetQuiz() {
      if(this.wrongAnswer > 3 && this.wrongAnswer < 6) {
          alert('pas ouf comme score, peut mieux faire 😴');
      }
      if(this.wrongAnswer === 6){
          alert("t'es serieux ? 🤣");
      }
      if(this.wrongAnswer === 0){
          alert("T'as recommencé ou quoi ? 🤯 Bon t'as gagné un peu de détente..")
          window.open("https://www.bouncingdvdlogo.com/");
      }
      this.index = 0;
      this.selectedAnswer = "";
      this.correctAnswer = 0;
      this.wrongAnswer = 0;
    },
  },
});

app.mount("#app");