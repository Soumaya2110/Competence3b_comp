<template>
    <h2>Articles</h2>
    <div id="app">
<div id="carte" v-for="item of items" :key="item.id">
    <div class="card" style="width: 18rem;">
  <img src="images/beaulivre.jpg" class="card-img-top" alt="livre">
  <div class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
    <p class="card-text">{{item.texte}}</p>
    <a href="#" class="btn btn-primary">Lire</a>
  </div>
</div>
</div>
</div>
    <button @click="goHome()">Go home</button>
</template>

<script>
export default {

    methods: {
        goHome () {
             
             this.$router.push({ name: 'dd', params: { id: 99}})

            
        }
    }
}

</script>