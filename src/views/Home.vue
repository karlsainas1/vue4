<template>
  <div class="home">
    <Navbar />

    <hero />


  <!--  <section class="contact content">

   <h2> Kontakt </h2>


        <iframe width="700" height="700" id="gmap_canvas" src="https://maps.google.com/maps?q=tartu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

        </iframe>
    </section>

-->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Hero from '@/components/Hero.vue';


export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
    Hero,
  },
};
</script>
