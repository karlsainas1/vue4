<template>
  <div class="home">
    <Navbar />

    <Hero />


   
   
    <div class="flexh">
    <div class="flexv">  
        <h2> Meist </h2>
       <p>  Oleme varjupaik, päris lahe, </p>
     </div>
         <img class="aboutimg" src="../assets/img/intro.jpeg"  alt="">
     </div>  
   
     
     <div>
        
      <img src="../assets/img/cat.png" class="smollimg" alt="">
      <section class="line">
          <p>.</p>
      </section>
      
      
      

  </div>
     
      <div class="flexh">    <!-- hetkel varjupaigas -->
      
      <p class="varjupaigas"> 23 <br> koera </p>
      <p class="varjupaigas"> 42 <br> kassi </p>
      <p class="varjupaigas"> 34 <br> muud  </p>
      
      
      
      </div>
      
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Hero from '@/components/Hero.vue';
import Line from '@/components/Line.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
    Hero,
    Line,
  },
};
</script>