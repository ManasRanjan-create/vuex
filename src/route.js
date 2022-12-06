import ProductS from "./pages/ProductS.vue";
import Home from "./pages/HomeP.vue";
export default [
    {
        path: '/',
        components : Home,
        name: 'home'
    
    },
    {
        path: '/product/:id',
        components: ProductS,
        name: 'product',
        props: true
    }
]