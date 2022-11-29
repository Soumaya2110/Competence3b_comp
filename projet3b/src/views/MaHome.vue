<template>
   <navbar></navbar>
   <br>
   <carousel></carousel>
</template>

<script>
import CarrouselBibli from './CarrouselBibli.vue';
import NavBar from './Navbar.vue'
export default {
    components: {
        'navbar': NavBar,
        'carousel': CarrouselBibli,
    }

}

</script>