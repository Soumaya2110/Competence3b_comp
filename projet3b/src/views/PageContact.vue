<template>
    <navbar></navbar>
    <br>
    <br>
    <h1>Nous contacter</h1>
    <br>
<br>
     <div id="formvue">
         <section id="form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Votre prénom : </label>
                <input type="email" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Votre adresse e-mail : </label>
                <input type="email" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Votre message : </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12">
                <button id="subbuttons" class="btn btn-primary" type="submit">Envoyer</button>
            </div>
            </section>

            <section id="seccontact">
                <p id="textcontact">Une question ? Des livres qui prennent la poussière dans votre bibliothèque ? 
                    N’hésitez pas à nous contacter, nous serons heureux de répondre à toutes vos questions? </p>
            </section>
        </div>
        <br>
        <br>
    <button @click="goHome()">Retour à l'accueil</button>
    <br>
    <br>
    <footerv></footerv>
</template>

<script>

import NavBar from './Navbar.vue'
import FootEr from './FootEr.vue'
 
  export default {
   
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

#h1contact {
            text-align: center;
        }
        #form {
            margin: 10px;
            width: 600px;
            height: 360px;
            background-color: rgba(0, 194, 203, 0.1);
            padding: 15px;
            border-radius: 15px;
        }
        
        #contact {
            display: flex;
            flex-direction: row;
            justify-content: center;  
            margin: 30px;
            
           
        }   

        #formvue {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

</style>