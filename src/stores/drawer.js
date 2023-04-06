import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawerStore', {
    state: ()=>{
        return {
            showDrawer: false
        }
    },
    actions:{
        changeShowDrawer(status){
            console.log('store', status);
            this.$state.showDrawer = status
        }
    }
})