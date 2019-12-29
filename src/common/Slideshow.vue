<template>
  <div>
    <Swiper 
      :list="list"
      :height="'350px'"
      :loop="true"
      :duration="300"
      :interval="3000"
      :auto="true"
    />
  </div>
</template>

<script>
import { Swiper } from 'vux'
export default {
  name: 'Slideshow',
  components: {
    Swiper
  },
  data() {
    return {
      
    }
  },
  props: ['list'],
  mounted () {
    console.log('mmmmm', this)
  },
}
</script>

<style>
  .docStyle {
    color: #fff;
    background-color: #fff;
  }
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
    color: #fff;
    overflow: auto; 
    text-overflow: none;
    white-space: normal;
    bottom: 2rem;
    background-image: none;
    font-size: 1.3rem;
    font-weight: 900;
    height: auto;
    padding: 0 1rem;
    text-align: left;
  }
</style>