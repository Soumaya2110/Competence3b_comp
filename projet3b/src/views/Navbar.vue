<template>
    <div class="navbar1">
       <nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <img id="logo" src="images/nvxlogo.png" alt="logo"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="lien" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
            <router-link class="lien" to="/deux">Articles</router-link>
        </li>
        <li class="nav-item">
            <router-link class="lien" to="/trois">Informations</router-link>
        </li>
        <li class="nav-item">
            <router-link class="lien" to="/quatre">Contact</router-link>
        </li>
      
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button id="buttvue" class="btn btn-outline-success" type="submit">Recherche</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  </template>
  
  <script>
  
  
  
  export default {
    name: 'NavBar'
    
    
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  @media screen and (min-width: 375px) and (max-width: 667px) {
    

    body {
        width: 375px;
        margin: 0px;
        font-family: questrial;
        
    }
    #logo {
        width: 60px;
        height: 60px;
        margin-left: 20px;
    }
  }
  @media screen and (min-width: 820px) and (max-width: 1180px) {
    
    /* body {
         width: 820px;
         margin: 0px;
         font-family: questrial;
       
     }*/
 
     #logo {
         width: 120px;
         height: 120px;
         margin-left: 20px;
     }
    }
    @media  screen and (min-width: 1440px) and (max-width: 2800px) {
    
    body {
        margin: 0px;
        font-family: questrial;
      
    }

    #logo {
        width: 120px;
        height: 120px;
        margin-left: 20px;
    }
  }
 
  .lien {
    text-decoration: none;
    color: rgba(0, 194, 203);
  }
  .lien:hover {
    color: #ff5757;
  }

  #buttvue {
    color: rgba(0, 194, 203);
    border: solid 1px rgba(0, 194, 203);
  }
  #buttvue:hover {
    background-color: #ff5757;
  }

  #logo {
    margin-top: 0px;
  }
  


  
  </style>