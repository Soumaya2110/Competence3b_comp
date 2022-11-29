<template>
    <div v-if="showItem" @click="hideItem()" class="item">{{name}}</div>
</template>

<script>
export default {
    props: {
        name: {
            default:'Valeur par defaut'
        }
    },
    data: () => {
        return{
            showItem: true
        }
        
    },
    methods: {
        hideItem(){
            console.log(('hideItem'));
            this.showItem = false;
            }
    }
}
</script>

<style>
.item {
    background-color: #fff;
    margin-top: 10px;
    padding: 15px 0; 
    transition: 0.2s;
    cursor: pointer;

}

</style>