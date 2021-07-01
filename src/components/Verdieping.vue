<template>
  <div class="verdieping" v-if="item">
    <div v-if="item.options">
      <select :class="{ filledIn: activeIndex || activeIndex === 0 }" v-model="activeIndex">
        <option value="" disabled selected>Maak een keuze</option>
        <option :value="i" :key="i" v-for="(item, i) in item.options">{{ item.name }}</option>
      </select>
      <Verdieping :item="item.options[activeIndex]" v-if="activeIndex === 0 || activeIndex" />
    </div>
    <div v-else>
      <!-- {{ answer }} -->
      <br />
      <br />
      <div class="answer">
        <h2>
          Voor jouw pand heb je
          {{ bewaking }} bewaking nodig
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Verdieping",
  props: ["item"],
  data() {
    return {
      activeIndex: "",
    };
  },
  computed: {
    answer() {
      if (this.item.options) return null; // no answer needed, there are more options to be filled in.
      const userChoices = this.$store.state.userChoices; // is een {} met hoogte en m2 erin verwerkt
      let finalAnswer = "";

      for (let i = 0; i < this.item.answers.length; i++) {
        const array = this.item.answers;
        const answer = array[i];

        if (array.length === 1) finalAnswer = answer;

        if (userChoices.height + 1 > answer.minHeight) finalAnswer = answer;
        if (!finalAnswer.minHeight && userChoices.area + 1 > answer.minArea) finalAnswer = answer;

        if (i + 1 === array.length && !finalAnswer) finalAnswer = answer;
      }

      return finalAnswer;
    },
    bewaking() {
      const answer = this.answer;
      if (!answer) return null;
      if (answer.omvang === 0) return "geen bewaking";
      if (answer.omvang === 1) return "niet-automatisch";
      if (answer.omvang === 2) return "gedeeltelijk";
      if (answer.omvang === 3) return "volledig";
      return null;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/tools/variables.sass'


.answer
  // text-transform: capitalize
  padding: 20px 20px
  box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.1)
  border-radius: 4px
</style>
