import {createRouter} from 'vue-router'
import {createWebHistory} from 'vue-router'

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            name: 'catalog',
            component: vCatalog 
        },
        { 
            path: '/cart', 
            name: 'cart',
            component: vCart,
            props: true
        },
    ], 
})

export default router;