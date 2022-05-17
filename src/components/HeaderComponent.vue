<template>
  <header class="header">
      <!-- <font-awesome-icon :icon="['fas', 'phone']" /> -->

  <!-- implicit style (fas is assumed) -->
      <div class="logo">
          Orange Store
      </div>
      <div class="navbar">
        <a @click="showCart()" href="#"> 
         <i class="fa fa-2x fa-shopping-basket" aria-hidden="true"></i>
        <span>{{selectedProducts.length}}</span></a>
      </div>
  </header>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"HeaderComponent",
    computed:{
        ...mapState(['selectedProducts'])
    },
    methods: {
        ...mapActions(['setShowCart']),
        showCart: function(){
            this.setShowCart(true)
        }
    }
}
</script>

<style lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        .logo{
            font-size: 2rem;
            color:orange;
            text-shadow: 1px 1px 1px #ababab;
        }
        i{
            color:#000;
            text-shadow: 1px 1px 1px #ababab;
        }
        .navbar{
            margin-top: 15px;
        a{
            text-decoration: none;
            margin: 0 10px;
        }
        span{
            display: inline-block;
            background-color: red;
            color:#fff;
            border-radius: 10px;
            padding:2px;
            width: 20px;
            height:20px;
            text-align: center;
            box-shadow: 1px 1px 1px 2px #ddd;
            
        }
        }
        
    }
</style>