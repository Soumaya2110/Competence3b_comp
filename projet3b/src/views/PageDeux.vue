<template>
    <section id="fond">
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
</section>
</template>

<script>
 import axios from "axios";
  export default {
    name: "App",
    data() {
      return {
        items: [],
      };
    },
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/items`);
        this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
        goHome () {
             
             this.$router.push({ name: 'MaHome'})

            
        }
    }
  };

</script>

<style scoped>
#fond {
    background-color: #ff5757;
}

h2 {
  text-align: center;
}
#app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
  padding: 30px;
}
.card {
  margin: 20px;
  padding: 10px;
  background-color: rgba(0, 194, 203, 0.1);
}
</style>