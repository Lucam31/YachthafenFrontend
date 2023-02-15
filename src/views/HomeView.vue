<template>
    <p class="imgHeading">Yachthafen Schwendi</p>
    <div class="img-div">
        <img src="../../img/yachthafen_bg.jpg" alt="Couldn't load Picture">
    </div>
    <div class="about">
      <div class="aboutHeader">
        <h2>Ihre Anlegestelle ins Urlaubsglück</h2>
      </div>
      <div class="text text-size">
        <p>
          Wir bieten Ihnen 10 komfortable Liegeplätze die sowohl für spontane Kurzzeitlieger als auch für Dauerlieger geeignet sind. 
          In direkter Nähe zum Schwendier Bus-Bahnhof haben Sie eine schnelle Anbindung zu allen Attraktionen, die Schwendi zu bieten hat.
        </p> 
      </div>
      <div class="list text-size">
        <ul>
          <li>20 m maximale Länge</li>
          <li>20 m maximale Breite</li>
          <li>Brauch- und Trinkwasserzapfstelle</li>
          <li>230 V Stromanschlüsse</li>
          <li>Check-In ab 10 Uhr</li>
          <li>Check-Out bis 10 Uhr (lezter Tag wird nicht berechnet)</li>
        </ul>
      </div>
    </div>
    <div class="angebote">
      <div class="picContainer">
        <div class="pic1"><img src="../../img/restaurant.jpg" alt="Bild nicht gefunden"></div>
      </div>
      <div class="beschreibung text-size">
        <p>Während Ihres Aufenthalts haben Sie die Möglichkeit Ihren Abend in einem der Restaurants am Yachthafen oder in unserem illegalen Casino zu verbringen.</p>
      </div>
      <div class="picContainer">
        <div class="pic3"><img src="../../img/casino.jpg" alt=""></div>
      </div>
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
    top: 10%;
    transform: translate(-50%, -50%);
    z-index: 10;
    font-size: 48px;
  }
  .about{
    display: flex;
    margin-top: 5em;
    margin-bottom: 5em;
  }
  .aboutHeader{
    width: 30%;
  }
  .text{
    width: 40%;
  }
  .text p{
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70%;
  }
  .list{
    width: 30%;
  }
  .angebote{
    display: flex;
  }
  .beschreibung{
    display: flex;
    width: 40%;
    align-items: center;
  }
  .beschreibung p{
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70%;
    text-align: center;
  }
  .picContainer{
    display: flex;
    flex-direction: column;
    width: 30%;
  }
  img{
    width: 100%;
  }
  .text-size{
    font-size: 18px;
  }
  </style>