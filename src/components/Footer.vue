<template>
    <div class=" text-left myWidth bg-light">
    <div class="row ml-2">
      <div class="col">
        <h5>QUICK  LINKS</h5>
        <ul class="footer-links">
          <li><a href="#.">Help Center</a></li>
          <li><a href="#.">Contact Us</a></li>
          <li><a href="#.">How to shop on LEEPs</a></li>
          <li><a href="#.">Delivery options and timelines</a></li>
          <li><a href="#.">How to return a product LEEPs</a></li>
          <li><a href="#.">Corporate and bulk purchases </a></li>
        </ul>
      </div>
      <div class="col">
        <h5>ABOUT LEEPs</h5>
        <ul class="footer-links">
          <li><a href="#.">About Us</a></li>
          <li><a href="#.">Terms and Conditions</a></li>
          <li><a href="#.">Privacy Policy</a></li>
          <li><a href="#.">Stay Safe</a></li>
          <li><a href="#.">LEEPs career</a></li>
        </ul>
      </div>
      <div class="col">
        <h5>MAKE MONEY WITH LEEPs</h5>
        <ul class="footer-links">
          <li><a href="#.">Sell on LEEPs</a></li>
          <li><a href="#.">Become an Affiliate Partner</a></li>
          <li><a href="#.">Become a Sales Consultant</a></li>
          <li><a href="#.">Become a LEEPs Service Provider</a></li>
          <li><a href="#.">Become a Logistic Service Partner</a></li>
          
        </ul>
      </div>
      <div class="col-md-2">
        <h5>LEEPs BRANCHES</h5>
        <ul class="footer-link">
          <li><a href="#.">Kaduna</a></li>
          <li><a href="#.">Lagos</a></li>
          <li><a href="#.">Abuja</a></li>
          <li><a href="#.">Akwa-Ibom</a></li>
          <li><a href="#.">Enugu</a></li>
          <li><a href="#.">Calaba </a></li>
          <li><a href="#.">Kano</a></li>
          <li><a href="#.">Ibadan</a></li>
          <li><a href="#.">PH</a></li>
          
        </ul>
      </div>
    </div>
      <div class="row ml-2 mb-2">
        <div class="col-md-4">
          <h5>JOIN US ON</h5>
          <div class="foot-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fas fa-map-marker-alt"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fas fa-shopping-cart"></i>
            <i class="fab fa-instagram"></i>

          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <h5>PAYMENT METHODS AND DELIVERY PARTNERS</h5>
          <div class="foot-icons">
             <i class="fab fa-google-wallet"></i>
              <i class="fab fa-cc-mastercard"></i>
              <i class="fab fa-cc-visa"></i>
              <i class="fab fa-cc-amazon-pay"></i>
              <i class="fab fa-dhl "></i>
              <i class="fab fa-amazon "></i>
              <i class="fab fa-maxcdn"></i>
              <i class="fab fa-intercom "></i>
              
          </div>

        </div>
        
      </div>
  </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
div >ul{
      margin-left: 0px;
      padding-left:0px;
       list-style-type: none;


    }
    .foot-icons{
      font-size: 20px;
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      color:cornflowerblue;
    }
    .footer-link{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;
      height: 120px;
      width: 200px;

    }
    .myWidth{
      overflow: hidden;
    }

</style>