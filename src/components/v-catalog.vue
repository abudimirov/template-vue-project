<template>
    <div class="v-catalog">     
            <vCatalogItem
            v-for="product in PRODUCTS"
            :key="product.article"
            v-bind:product_data="product" 
            @sendArticle="showConsoleChildArticle"
            />
        </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item.vue';
    import {mapActions, mapGetters} from 'vuex'
    
    export default {
        name: 'v-catalog',
        components: {
            vCatalogItem
        },
        props: {},
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ]),
        },
        methods: {
            ...mapActions(['GET_PRODUCTS_FROM_API']),
            showConsoleChildArticle(data) {
                console.log(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        }
    }
</script>

<style>
    .v-catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>