<template>
   <div class="container">
       <header-component></header-component>
       <products-component></products-component>
       <cart-component></cart-component>
   </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent"
import CartComponent from "@/components/CartComponent"
import ProductsComponent from "@/components/ProductsComponent";

export default {
    name:"HomeComponent",
    components:{HeaderComponent,ProductsComponent,CartComponent},
}
</script>

<style>

</style>