<template>
<div class="mt-3">
        
            <!-- the first column -->
            
                <!-- the first row with major picture and thumbnails -->
                <div class="row">
                    <div class="col-md-4">
                            <div class="" style="width: 15rem;">
                                    <img class="img responsive" :src="retivedProduct.imageLink" width='320' alt="">    
                                    <div class="">
                                        <div class="hold-small-pics border-bottom">
                                            <img :src="pic" height="100" width="80" class="rounded" alt="" v-for="pic in retivedProduct.thumbnails" :key='pic.index'>
                                            
                                        </div>
                                        <div class="">
                                            <p class="text-left lead "> SHARE THIS PRODUCT</p>
                                            <div class="text-left lead mb-2"><i class="rounded-circle cir border fab fa-facebook-f "></i><i class=" rounded-circle border ml-3 cir fab fa-twitter"></i>
                                            </div>
                                        
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <div class="col-md-4 text-left">
                        <div class="card-title  lead display-4">{{retivedProduct.name}}</div>
                        <div class="card-body"><p class="card-text lead font-weight-bolder">{{retivedProduct.price}} </p>
                        </div>
                        <div class="border-bottom btn btn-primary  shadow p-3 mb-5 rounded Smallshadow  "><i class="fas fa-shopping-cart"></i> <p>ADD TO CART</p></div>
                    </div>
                
                                
                    <div class="col-md-3 text-left offset-1">
                        <div class="head-left-pane border-bottom ml-3">DELIVERY & RETURNS</div>
                                    <div class="media mt-1">
                                         <i class="cir border rounded-circle align-self-start mr-3 fas fa-truck"></i>
                                        <div class="media-body">
                                            <h5 class="mt-0">Delivery information</h5>
                                            <p class="lead">Normally delivered between Friday 27 Mar and Monday 30 Mar. Please check exact dates in the Checkout page.See more</p>
                                            
                                        </div>
                                    </div>

                                    <div class="media">
                                        
                                        <i class="cir border rounded-circle align-self-start mr-3 fas fa-undo"></i>
                                        <div class="media-body">
                                            <h5 class="mt-0">Return Policy </h5>
                                            <p class="lead">Free return within 15 days for Jumia Mall items and 7 days for other eligible items.See more.</p>
                                            
                                        </div>
                                    </div>
                                    <div class="media">
                                            <i class="cir border rounded-circle align-self-start mr-3 fas fa-stamp"></i>
                                        <div class="media-body">
                                            <h5 class="mt-0">Waranty</h5>
                                            <p class="lead">N/A.</p>
                                            
                                        </div>
                                    </div>
                    </div>

            </div>
            
        
        <div class="mb-3">
            <div class="row mt-1">
            <div class="col-md text-left">
                <div class="card border-light">
                     <!-- <div class="card-body"> -->
                            <!-- This card for product details. -->
                            <div class="">
                                <h5 class="card-header">PRODUCT DETAIL</h5>
                                <div class="card-body">
                                    
                                    <p class="card-text lead">{{retivedProduct.detail}}</p>
                                    
                                </div>
                            </div>
                    <!-- </div> -->
                </div>
            </div>
            <!-- </div> -->
            <!-- <div class="row mt-3"> -->
            <div class="col-md text-left">
                <div class="card border-light">
                     <!-- <div class="card-body"> -->
                            <!-- This card for specification. -->
                            <div class="">
                                <h5 class="card-header">SPECIFICATION</h5>
                                <div class="card-body">
                                    
                                    <p class="card-text lead">{{retivedProduct.spec}}</p>
                                    
                                </div>
                            </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
        </div>
</div>
</template>
<script>
export default {
    name: 'ProductDetail',
    computed:{
        retivedProduct(){
            return this.$store.state.selectedProduct
        }
    }
    
}
</script>

<style scoped>
.hold-small-pics{
    display :flex;
}
.hold-txt-icons{
font-weight: bold;
}
.icon{
    display :flex;
    flex-direction :row;
    width: 70px;
}
.Smallshadow{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
}
.head-left-pane{
    font-weight:bold;
    padding-left: 2px;
}
.cir{
    height: 50px;
    width: 50px;
    color:cornflowerblue;
    padding: 5px;
}

</style>