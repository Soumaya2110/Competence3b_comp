<template>
   <navbar></navbar>
   <br>
   <carousel></carousel>
   <br>
   <expli></expli>
   <br>
   <footerv></footerv>

</template>

<script>
import CarrouselBibli from './CarrouselBibli.vue';
import NavBar from './Navbar.vue'
import ExpSite from './ExpSite.vue'
import FootEr from './FootEr.vue'
export default {
    components: {
        'navbar': NavBar,
        'carousel': CarrouselBibli,
        'expli': ExpSite,
        'footerv': FootEr,
    }

}

</script>