<template>
  <div class="hello">

    <footer>

    <div class="footer-flex" >
       <div class="footer-text">
        <h1>varjupaik</h1>
           <h2>kontakt</h2>
           <p>&#8962 miski tänav 42, tartu</p>
           <p>&#x260E 55512345</p>
            <p>&#9993 varjupaik@varjupaik.eu</p>
           <p>Avatud: E-R 9.00-18.00</p>
          
           
        </div>

<iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=tartu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            
        </iframe>
    </div>

        <p class="copy">&copy   Varjupaik 2018</p>
    </footer>

    </div>


</template>

<script>
export default {
  name: 'HelloWorld',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer{
        height:auto;
        background-color: #f85d72;
    }
    
    .footer-text{
       margin-top:50px;margin-bottom:50px;
       color: #223843;
        
    }
    p,h1,h2 { color: #223843;}
    .footer-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
    }
    iframe{margin-top:50px;margin-bottom:50px;}
    .copy {text-align: center}
</style>
