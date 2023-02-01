<template>
  
  <div class="mb-3 flex">
    <div class="h2 leftBound">Buchungen</div>
    <span class="h2 rightBound" type="button" data-bs-toggle="collapse" data-bs-target="#buchungen" aria-expanded="false" aria-controls="collapseExample">+</span>
  </div>
  <div class="collapse" id="buchungen">
  <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
    <div class="accordion-item" v-for="Buchung in Buchungen" :key="Buchung.m_BuchungsId">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
          {{Buchung.m_BuchungsId}}
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
          <strong>{{Buchung.m_Startdatum}} bis zum {{Buchung.m_Enddatum}}</strong> Auf Liegeplatz {{ Buchung.m_Liegeplatz.m_Bezeichnung }} mit Boot {{ Buchung.m_Boot.m_Name }}
        </div>
      </div>
    </div>
  </div>
</div>

  <div class="mb-3 flex">
    <div class="h2 leftBound">Vergangene Buchungen</div>
    <span class="h2 rightBound" type="button" data-bs-toggle="collapse" data-bs-target="#alteBuchungen" aria-expanded="false" aria-controls="collapseExample">+</span>
  </div>
  <div class="collapse" id="alteBuchungen">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen2-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen2-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen2-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen2-headingOne">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen2-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen2-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="panelsStayOpen2-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen2-headingTwo">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen2-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen2-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="panelsStayOpen2-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen2-headingThree">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  // @ is an alias to /src
  import axios from 'axios'
  import APIURLService from '../services/API.service';

  export default {
    name: 'HomeView',
    components: {
      
    },
    async created(){
      this.Buchungen = await (await axios.get(APIURLService.getAPIUrl()+'/api/Kunden/GetBuchungenFromKunde?kundenId=' + this.$store.getters.getKundenId)).data;
      
    },
    data() {
    return{
        Buchungen: null,
    };
    }
}
  </script>
  
  <style>
  button{
    margin: 0;
  }
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .rightBound{
    transform: translate(-100%, 0);
  }
  </style>