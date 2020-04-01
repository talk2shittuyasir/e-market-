<template>
  <div id="app">
      <Header />
      
    <div  class="container-fluid">
  
      <div class="row mt-2 mb-3">
        <div class="col-md-3">
         
          <Category />
               
        </div>
                
        <div class="col-md-7">
          <Mycarousel/>
           
        </div>
             
      </div>
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
          <!-- <Product/> -->
        </div>
        
      </div>
      
     </div>
   <Footer/> 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Category from './components/Category.vue';
// import Product from  './components/Product';
import Footer from './components/Footer'
import Mycarousel from './components/carousel/Mycarousel'


export default {
  name: 'App',
  components: {
    Header,
    Category,
    // Product,
    Mycarousel,
    Footer,
    
  },
  
}
</script>

<style>
#app {
  
  
  /* text-align: center; */
  /* box-sizing:inherit; */
  color: #2c3e50;
  
}


</style>
