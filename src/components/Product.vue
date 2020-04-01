<template>
    <div class="myStyle">
        <div v-for="pro in myProduct" :key="pro.proId" class="card proStyle" style="width: 15rem;">
            <img class="card-img-top " width="200" height="200" :src="pro.imageLink" alt="Card image cap" >
            <div class="card-body">
                <h6 class="card-title"> {{pro.name}}</h6>
                <p class="card-text">{{pro.price}}</p>
                <a href="#" @click="gotoPro(pro)" class="btn btn-primary"> Buy Now</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'Product',
    //  props: ['prop']
    computed:{
        myProduct(){
            return this.$store.state.products;
        }
    },
    methods:{
        gotoPro(product){
            this.$store.commit("setSelectedProduct", product);
            this.$router.push({path: '/views/ProductDetail'})
        }
    }

}
</script>

<style scoped>
       .myStyle{
  display:flex;
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: space-around;
  
  
}
.proStyle{
    margin-right:20px;
    box-shadow:whitesmoke 2px 1px 10px 1px;
    margin-bottom:20px ;
    border-radius: 4px;
}

</style>