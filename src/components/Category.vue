<template>
    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action active">
              Category
      </button>
      <!-- <div class="list-group"> -->
     
      <button v-for="cats in myCategory" :key="cats.id"  type="button" class="list-group-item list-group-item-action">{{cats.categories}}</button>
  </div>
</template>
<script>
export default {
    name: 'Category',
      // props:['cats'],
      computed:{
        myCategory(){
          return this.$store.state.cates;
        }
      }
    
}
</script>

<style scoped>


</style>