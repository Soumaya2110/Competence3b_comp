<template>
    <div class="list">
        <h3>LISTE</h3>
        <ItemTest v-for="(item, index) in items"  :name="item.name" :key="index"/>
    </div>
</template>

<script>
import ItemTest from './ItemTest.vue'
export default {
    components: {ItemTest},
    data: () => {
        return {
            items: [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'},
                {name: 'item4'},
                {name: 'item5'},
                {name: 'item6'},
            ] 
        }

    }

}

</script>

<style>
.list {
    max-width: 40%;
    margin: 0 auto;
    background-color: rgb(233, 233, 233);
    padding: 30px;
}

.item {
    background-color: #fff;
    margin-top: 10px;
    padding: 15px 0; 
    transition: 0.2s;
    cursor: pointer;

}


</style>