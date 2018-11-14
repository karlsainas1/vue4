<template>
  <div class=" bc">
<div class= "wide fixed">
     
    
      <nav  class= contain>
      
     <ul class="topnav">
     <img src="../assets/img/logo.png" alt="">  
  <li><router-link to="/">Avaleht</router-link></li>
  <li><router-link to="/loomad">Loomad</router-link></li>
  <li><a href="#contact">kaotatud ja leitud</a></li>
  <li><a href="#contact">Toeta meid</a></li>
 
</ul>
         
          
          
          
      </nav>
      </div>
  </div>

    </header>


    </div>


</template>

<script>
export default {
  name: 'HelloWorld',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img { width: 150px;height:150px;}
    
    nav ul li{
        text-align: center;
    }
    .contain{
        width:80vw;
        
    }
    .fixed{
        position:fixed;
        text-align:center;
        top:0;
        border-bottom: 10px solid #f85d72 ;
        
        display: flex;
        justify-content: center;

    }
    
    .wide {
        width: 100%;
        background-color:#EFF1F3;
        box-shadow: -14px -30px 64px 44px rgba(0,0,0,0.3);
    }
    body {margin: 0;}
    ul{
        display: flex;
        justify-content: center;
        
    }
ul.topnav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #EFF1F3;
}



ul.topnav li a {
    margin-top:101px;   
    display: block;
    color: #223843;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    padding-left:3vw;
    padding-right:3vw;
    border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    font-weight: bold;
    }

ul.topnav li a:hover:not(.router-link-active) {background-color: #DBD3D8 ;}

.router-link-active {background-color: #F85F73;}

.router-link-active:hover{ background-color: #F85F73;}

@media screen and (max-width: 600px){
    ul.topnav li.right, 
    ul.topnav li {display:flex; flex-direction: column;}
}
    
</style>
