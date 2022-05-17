import { createStore } from "vuex"


const URI = 'https://fakestoreapi.com/products';
const MAX_PRODUCT = 14;
const store =  createStore({
    state:{
        products:[],
        selectedProducts:[],
        showCart:false
    },
    mutations: {
        addProduct : ({products},product) => {
            product['quantity'] = 1;
            products.push(product);
        },
        setShowCart : (state,boolean) =>{
            state.showCart = boolean;
        },

        addToCart : (state,product) =>{
                const itemIndex = state.selectedProducts.findIndex(item => item.id === product.id)
            // check if product is aleady exist in cart
            if(itemIndex === -1){
                state.showCart = true;
                state.selectedProducts.push(product);
            }
        },
        deleteFromCart : (state,id) =>{
            state.selectedProducts = state.selectedProducts.filter(product => product.id != id )
        }
    },
    actions:{
        getProducts : ({commit})=>{
            fetch(URI)
            .then(res=>res.json())
            .then(data=>{
                const products = data.splice(0,MAX_PRODUCT);
                products.map(product=>{
                    commit('addProduct',product);
                })
            })
        },
        setShowCart: ({commit},boolean)=>{
            commit('setShowCart',boolean)
        },
        addToCart : ({commit},product)=>{
            commit('addToCart',product)
        },
        deleteFromCart : ({commit},id)=>{
            commit('deleteFromCart',id)
        }
    }
})

export default store;