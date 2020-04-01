<template>
  <div id="app">
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
> 
      <SliderItem
        v-for="item in list"
        :key="item.imgId"
        @click="changeIndex(1);">
<img :src="item.imageLink" alt="">
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "App",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      list: [
{
    imgId:1,
    imageLink:require('@/assets/images/for_slide/lg.jpg'),
},
{
    imgId:2,
    imageLink:require('@/assets/images/for_slide/electric-oven.jpg'),

},
{
    imgId:3,
    imageLink:require('@/assets/images/for_slide/miele_kitchen.jpg'),

},
{
    imgId:4,
    imageLink:require('@/assets/images/for_slide/sam.jpg'),

},{imgId: 5,
    imageLink:require('@/assets/images/for_slide/ramadan.jpg'),},

{id: 6,
    imageLink:require('@/assets/images/for_slide/lg1.jpg'),}


      ],
      sliderValue: 2
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },

};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

p {
  margin: 0;
}
</style>
