<template>
  <div class="loomad">
    <Navbar />
<div class="space"> </div>
      
      <div class="content">
        <section class="sorting-buttons">
          <button> Koerad</button>
          <button> Kassid</button>
          <button> Muud  </button>
          <button> Kõik  </button>
      
      
      </section>
      
      
</div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';



export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
    
  },

};
</script>