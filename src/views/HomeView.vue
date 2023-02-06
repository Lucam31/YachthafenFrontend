<template>
    <p class="imgHeading">Yachthafen Schwendi</p>
    <div class="img-div">
        <img src="../../img/yachthafen_bg.jpg" alt="Couldn't load Picture">
    </div>
    <div class="about">
        <h2>Über Uns</h2>
    </div>
</template>
  
  <script>
  
  export default {
    name: 'HomeView',
    components: {
      
    }
  }
  </script>
  
  <style>
  .img-div{
    display: flex;
  }
  img{
    width: 100%;
    z-index: -1;
  }
  .imgHeading{
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    z-index: 10;
    font-size: 48px;
  }
  </style>