<template>
 <Transition name="slide">
  <div v-if="showCart" class="cart">
      
      <div @click="closeCart()" class="cart__close">&#x2715;</div>
      <table v-if="selectedProducts.length">
          <thead>
             <tr>
             <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
             </tr>
          </thead>
          <tbody>
              <tr v-for="(product,index) in selectedProducts" :key="index">
                 <td class="text-left"> {{product.title.substr(0,20)}} </td>
                 <td> <input v-model="product.quantity" type="number" min="1" max="100"> </td>
                 <td> {{ parseFloat(product.price * product.quantity).toFixed(2) }}$
                      
                </td>
                <td><span class="delete" @click="deleteFromCart(product.id)"><i class="fa fa-trash-o" aria-hidden="true"></i></span> </td>
              </tr>
              <tr>
                  <td class="text-left" colspan="2"><b>TOTAL</b></td>
                  <td><b><span>{{total}}</span>$</b></td>
              </tr>
              <tr class="checkout">
                  <td colspan="4">Checkout</td>
              </tr>
          </tbody>
      </table>
      <div class="empty"  v-else> Cart is empty</div>
  </div>
  </Transition>
</template>
<script>
import {mapState,mapActions} from "vuex";
export default {
    name:'CartComponent',
    computed:{
        ...mapState(['selectedProducts','showCart']),
        total:function(){
            const total =  this.selectedProducts
            .map(product => (parseFloat(product.price) * product.quantity))
            .reduce((s,subTotal) => s + subTotal );
            return parseFloat(total).toFixed(2);
        }
    },
    methods:{
        ...mapActions(['setShowCart','deleteFromCart']),
        closeCart:function(){
           this.setShowCart(false)
        }
    }

}
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

    .text-left {
        text-align: left;
    }
    .text-right{
        text-align: right;
    }
    .d-100{
        width:100%
    }
    .checkout{
        background-color: darkorange;
        color:#fff;
        &:hover{
            background-color: orange;
        }
    }
    .empty{
        width:100%;
        padding: 10px;
        margin: 10px 0;
        text-align: center;
        color:#b2b2b2
    }
    .cart{
        position: absolute;
        top:0;
        background: #fff;
        width: 25%;
        right: 0;
        box-shadow: 0px 0px 10px 0px #b2b2b2;
        padding: 0px 0px;
        &__close{
            margin-left: 15px;
            font-size: 22px;
            cursor: pointer;
        }
        table{
            width: 100%;
            padding: 0;
            th{
                background-color: darkorange;
                color: #fff;
                padding: 10px;
                    
            }
            tr{
                text-align: center;
                padding: 10px;
                outline : 1px solid #eee;
            }
            td{
                padding: 20px 10px;
            }
            input{
                width: 60px;
                height: 22px;
                text-align: center;
            }
        }
    }
</style>