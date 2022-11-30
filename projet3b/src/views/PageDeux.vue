<template>
    <navbar></navbar>
    <section id="fond">
        <br>
        <br>
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
    <button id="buttretour" @click="goHome()">Retour à l'accueil</button>
    <br>
    <br>
<footerv></footerv>
    
</section>
</template>

<script>
import FootEr from './FootEr.vue'
import NavBar from './Navbar.vue'
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
    },
    components: {
        'navbar': NavBar,
        'footerv': FootEr,
    }
  };

</script>

<style scoped>
#buttretour {
    border: 0px;
    color: #ff5757;
    background-color: rgb(10, 65, 68);
    padding: 5px;
    border-radius: 10px;
}
#buttretour:hover {
    background-color: rgba(0, 194, 203)
}
#fond {
    background-color: rgba(0, 194, 203, 0.1);
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