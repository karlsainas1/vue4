<template>
  <div class="hello">

    <footer>

    <div class="footer-flex" >
        <p>varjupaik</p>

<iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=tartu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            
        </iframe>
    </div>
    
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
    .footer-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
    }
    iframe{margin-top:50px;margin-bottom:50px;}

</style>
