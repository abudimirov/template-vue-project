import axios from 'axios';

const apiUrl = 'http://localhost:3000/products';

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios(apiUrl, {
          method: "GET"
        })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    }
}