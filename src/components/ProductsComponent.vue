<template>
      <div class="items">
          <div v-for="(product,index) in products" :key="index" class="item">
              <img :src="product.image">
              <div class="item__info">
                  <h2 class="item__title">{{product.title.substr(0,10)}}</h2>
                  <div class="item__price">{{product.price}}$</div>
                  <button @click="addToCart(product)" type="button">Buy</button>
              </div>
          </div>
      </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
export default {
    name:"ProductsComponent",
    computed : {
        ...mapState(['products'])
    },
    methods  : {
        ...mapActions(['getProducts','addToCart']),

    },
    mounted: function(){
        this.getProducts();
        console.log(this.products)
    }
}
</script>

<style lang="scss" scoped>
    .items{
        display: flex;
        max-width: 100%;
        flex-wrap: wrap;
        img{
            width:100%;
            height: 130px;
            display: block;
            margin: auto;
            padding:5px
        }
        .item{
            width: 150px;
            margin:10px;
            background: #fff;
            padding: 5px;
            box-shadow:  0px 0px 3px 1px #eee;
            &__info{
               margin-top:15px
            }

             &__title{
            font-size: 13px;
            margin-bottom: 10px;
            }

            &__price{
            font-size: 13px;
            margin-bottom: 10px;
            }

            button{
                width:100%;
                background-color: orangered;
                border:none;
                color:#fff;
                padding:8px;
                cursor: pointer;
                border-radius: 5px;
                
                &:hover{
                    background-color: rgb(144, 82, 5);
                }
            }
        }
       
    }
</style>