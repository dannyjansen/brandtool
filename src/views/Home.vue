<template>
  <div class="wrapper">
    <div class="tool">
      <span class="question"> Selecteer het oppervlakte<br />van jouw pand <span>in m2</span></span>
      <div class="optionsWrapper">
        <div :class="{ selected: userChoices.area === o }" @click="(step = 2), (userChoices = { waarde: o, key: 'area' })" class="option" v-for="(o, i) in areaOptions" :key="i">{{ o }}+</div>
      </div>
    </div>

    <div class="tool">
      <span class="question">
        Hoe hoog staat de hoogste vloer gemeten boven het meetniveau?
      </span>
      <div class="optionsWrapper">
        <div :class="{ selected: userChoices.height === o }" @click="userChoices = { waarde: o, key: 'height' }" class="option" v-for="(o, i) in heightOptions" :key="i">{{ o }}+</div>
      </div>
    </div>

    <div v-if="userChoices.height !== null && userChoices.area !== null">
      <select :class="{ filledIn: activeIndex || activeIndex === 0 }" v-model="activeIndex">
        <option value="" disabled selected>Maak een keuze</option>
        <option :value="i" :key="i" v-for="(item, i) in functions">{{ item.name }}</option>
      </select>
      <Verdieping v-if="activeIndex === 0 || activeIndex" :item="functions[activeIndex]" />
    </div>
  </div>
</template>

<script>
import Verdieping from "@/components/Verdieping";
export default {
  components: { Verdieping },
  data() {
    return {
      step: 1,
      areaOptions: [0, 500, 750, 1000, 1500, 2000, 2500, 5000],
      heightOptions: [0, 5, 20, 50],
      activeIndex: "",
      functions: [
        {
          name: "Bijeenkomstfunctie",
          options: [
            {
              name: "Andere bijeenkomstfunctie",
              answers: [
                {
                  minHeight: 5,
                  omvang: 2,
                  doormelding: false,
                  certificaat: true,
                },
                {
                  minHeight: 50,
                  omvang: 3,
                  doormelding: false,
                  certificaat: true,
                },
                {
                  minArea: 500,
                  omvang: 1,
                  doormelding: false,
                  certificaat: false,
                },
                {
                  minArea: 1000,
                  omvang: 2,
                  doormelding: false,
                  certificaat: true,
                },
                {
                  minArea: 5000,
                  omvang: 3,
                  doormelding: false,
                  certificaat: true,
                },
                {
                  omvang: 0,
                  doormelding: false,
                  certificaat: false,
                },
              ],
            },
          ],
        },
        {
          name: "Industriefunctie",
          options: [
            {
              name: "Lichte industriefunctie",
              answers: [
                {
                  omvang: 0,
                  doormelding: false,
                  certificaat: false,
                },
              ],
            },
            {
              name: "Andere industriefunctie",
              answers: [
                {
                  omvang: 1,
                  doormelding: false,
                  certificaat: false,
                },
              ],
            },
          ],
        },
        {
          name: "Kantoorfunctie",
          answers: [
            {
              minHeight: 50,
              omvang: 2,
              doormelding: false,
              certificaat: true,
            },
            {
              omvang: 1,
              doormelding: false,
              certificaat: false,
            },
          ],
        },
      ],
    };
  },
  computed: {
    userChoices: {
      get() {
        return this.$store.state.userChoices;
      },
      set(e) {
        this.$store.commit("setUserChoices", e);
      },
    },
  },
  methods: {},
};
</script>

<style lang="sass">
@import '@/tools/variables.sass'

select
  border: none
  outline: none
  height: 3.5em
  border-radius: 4px
  font-size: 1em
  background-color: #e5e5e5
  background-color: rgba(0,0 ,0 ,0.04 )
  min-width: 350px
  padding-left: 10px
  -webkit-appearance: none
  cursor: pointer
  margin-bottom: 2em
</style>

<style lang="sass" scoped>

.question
  font-size: 28px
  font-weight: 500
  max-width: 30ch
  display: inline-block

  > span
    font-size: 14px
    background-color: rgba(0, 0, 0, 0.05)
    padding: 6px
    border-radius: 4px
    color: rgba(0,0,0,0.5)
    transform: translateY(-3px)
    display: inline-block



.wrapper
  display: flex
  flex-direction: column
  align-items: center

  .optionsWrapper
    padding-top: 1em
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 10px
    .option
      cursor: pointer
      width: 20%
      display: flex
      align-items: center
      justify-content: center
      padding: 12px 16px
      border-radius: 5px
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.04)
      background-color: rgba(0,0,0,0.04)
      transition: .1s
      font-weight: 700
    .selected
      box-shadow: inset 0 0 0 2px hsl(0, 90%, 60% )
      color: hsl(0, 90%, 60% )
</style>
