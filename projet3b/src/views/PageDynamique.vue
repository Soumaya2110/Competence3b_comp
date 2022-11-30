<template>
    <navbar></navbar>
    <h2>Informations</h2>
    <p id="texte">What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<br><br>
    <button id="buttretour" @click="goHome()">Retour à l'accueil</button>
<br><br>
    <footerv></footerv>
   
</template>

<script>

import NavBar from './Navbar.vue'
import FootEr from './FootEr.vue'
export default {
    components: {
        'navbar': NavBar,
        'footerv': FootEr,
    },

     methods: {
        goHome () {
             
             this.$router.push({ name: 'MaHome'})

            
        }
    },
   


}

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

h2 {
    margin: 100px;
}
#texte {
    margin: 100px;
}

</style>