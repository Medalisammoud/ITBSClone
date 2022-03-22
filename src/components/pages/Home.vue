<template>
  <div id="app">
    <Carousel/>
    <Cards/>
    <Videos/>
  </div>
</template>

<script>  
import Carousel from '../Carousel.vue'
import Cards from '../Cards.vue'
import Videos from '../Videos.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Cards,
    Videos,

  }
}
</script>

<style>

</style>
