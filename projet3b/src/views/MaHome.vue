<template>
   <navbar></navbar>
   <br>
   <carousel></carousel>
   <br>
   <formcont></formcont>
   <br>
   <footerv></footerv>

</template>

<script>
import CarrouselBibli from './CarrouselBibli.vue';
import NavBar from './Navbar.vue'
import PageContact from './PageContact.vue'
import FootEr from './FootEr.vue'
export default {
    components: {
        'navbar': NavBar,
        'carousel': CarrouselBibli,
        'formcont': PageContact,
        'footerv': FootEr,
    }

}

</script>