import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        storeList:[]
    },
    mutations:{
        handleState(state,list){
           localStorage.setItem('list',JSON.stringify(list));
           state.storeList=JSON.parse(localStorage.getItem('list'));
        }
    }

})
export default store;