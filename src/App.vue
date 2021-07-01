<template>
  <div class="page">
    <!-- <div class="stepsWrapper">
      <div class="step"></div>
      <div class="step"></div>
      <div class="step"></div>
    </div> -->
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [0, 0, 0, 0],
    };
  },
};
</script>

<style lang="sass" scoped>

.page
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  min-height: 100vh

.tool
  border-radius: 12px
  border: 1px solid rgba(0, 0, 0, 0.1)
  padding: 40px 30px
  display: inline-block

.stepsWrapper
  width: 80%
  max-width: 400px
  margin: 0 auto
  display: flex
  justify-content: space-between
  .step
    $size: 10px
    width: $size
    height: $size
    background-color: hsl(0, 100%, 56%)
    border-radius: 100%
    box-shadow: 0 0 0 $size hsl(0, 70%, 90%)
</style>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap')


.tool
  border-radius: 12px
  border: 1px solid rgba(0, 0, 0, 0.1)
  padding: 40px 30px
  display: inline-block

#app
  font-family: 'Roboto Slab', Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #000

*
  padding: 0
  margin: 0
  box-sizing: border-box
</style>
