<template>
  <div class="background">
  <div class="mb-3 flex">
    <div class="h2 leftBound">Buchungen</div>
    <span class="h2 rightBound" id="buchungCollapseButton" type="button" data-bs-toggle="collapse" data-bs-target="#buchungen" aria-expanded="false" aria-controls="collapseExample" v-on:click.prevent="changeSign($event)">-</span>
  </div>
  <div class="itemList collapse show" id="buchungen">
    <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="Buchung in Buchungen" :key="Buchung.m_BuchungsId">
        <h2 class="accordion-header" :id="'panelsStayOpen-heading'+Buchung.m_BuchungsId">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse'+Buchung.m_BuchungsId" aria-expanded="false" :aria-controls="'panelsStayOpen-collapse'+Buchung.m_BuchungsId">
            {{Buchung.m_BuchungsId}}
          </button>
        </h2>
        <div :id="'panelsStayOpen-collapse'+Buchung.m_BuchungsId" class="accordion-collapse collapse" :aria-labelledby="'panelsStayOpen-heading'+Buchung.m_BuchungsId">
          <div class="accordion-body flex-accordion">
            <strong>{{Buchung.m_Startdatum}} bis zum {{Buchung.m_Enddatum}}</strong> Auf Liegeplatz {{ Buchung.m_Liegeplatz.m_Bezeichnung }} mit Boot {{ Buchung.m_Boot.m_Name }}
            <button type="submit" class="input-group-text cancelButton" v-on:click.prevent="onBootAnlegen">Stornieren</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-3 flex">
    <div class="h2 leftBound">Vergangene Buchungen</div>
    <span class="h2 rightBound" type="button" data-bs-toggle="collapse" data-bs-target="#alteBuchungen" aria-expanded="false" aria-controls="collapseExample" v-on:click.prevent="changeSign($event)">+</span>
  </div>
  <div class="itemList collapse" id="alteBuchungen">
    <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="alteBuchung in alteBuchungen" :key="alteBuchung.m_BuchungsId">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapseOne'+alteBuchung.m_BuchungsId" aria-expanded="false" :aria-controls="'panelsStayOpen-collapseOne'+alteBuchung.m_BuchungsId">
            {{alteBuchung.m_BuchungsId}}
          </button>
        </h2>
        <div :id="'panelsStayOpen-collapseOne'+alteBuchung.m_BuchungsId" class="accordion-collapse collapse" :aria-labelledby="'panelsStayOpen-headingOne'+alteBuchung.m_BuchungsId">
          <div class="accordion-body">
            <strong>{{alteBuchung.m_Startdatum}} bis zum {{alteBuchung.m_Enddatum}}</strong> Auf Liegeplatz {{ alteBuchung.m_Bezeichnung }} mit Boot {{ alteBuchung.m_Boot }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-3 flex">
    <div class="h2 leftBound">Boote</div>
    <span class="h2 rightBound" type="button" data-bs-toggle="collapse" data-bs-target="#boote" aria-expanded="false" aria-controls="collapseExample" v-on:click.prevent="changeSign($event)">-</span>
  </div>
  <div class="itemList collapse show" id="boote">
    <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="Boot in Boote" :key="Boot.m_RegistrierungsId">
        <h2 class="accordion-header" :id="'panelsStayOpen-heading'+Boot.m_RegistrierungsId+Boot.m_Name">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse'+Boot.m_RegistrierungsId+Boot.m_Name" aria-expanded="false" :aria-controls="'panelsStayOpen-collapse'+Boot.m_RegistrierungsId+Boot.m_Name">
            {{Boot.m_RegistrierungsId}}
          </button>
        </h2>
        <div :id="'panelsStayOpen-collapse'+Boot.m_RegistrierungsId+Boot.m_Name" class="accordion-collapse collapse" :aria-labelledby="'panelsStayOpen-heading'+Boot.m_RegistrierungsId+Boot.m_Name">
          <div class="accordion-body">
            <strong>{{Boot.m_Name}} ist {{Boot.m_Laenge}} Meter lang und {{ Boot.m_Breite }} Meter breit</strong>
          </div>
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
      const kunden_id = this.$store.getters.getKundenId;
    if(kunden_id == null){
      this.$router.push({name: "login"});
    }
      this.Buchungen = await (await axios.get(APIURLService.getAPIUrl()+'/api/Kunden/GetBuchungenFromKunde?kundenId=' + this.$store.getters.getKundenId)).data;
      this.alteBuchungen = [{m_BuchungsId: "abc", m_Bezeichnung: "LP3", m_Boot: "69", m_Startdatum: "23.01.2023", m_Enddatum: "01.02.2023"},{m_BuchungsId: "def", m_Bezeichnung: "LP4", m_Boot: "79", m_Startdatum: "23.01.2023", m_Enddatum: "01.02.2023"}];
      // this.alteBuchungen = await (await axios.get(APIURLService.getAPIUrl()+'/api/Kunden/GetVergangeneBuchungenFromKunde?kundenId=' + this.$store.getters.getKundenId)).data;
      this.Boote = await (await axios.get(APIURLService.getAPIUrl()+'/api/Kunden/GetBooteFromKunde?kundenId='+ this.$store.getters.getKundenId)).data;
      console.log(this.Boote)
      
    },
    data() {
    return{
        Buchungen: null,
    };
    },
    methods:{ 
      changeSign(el) {
        if (el.target.innerHTML == "+") {
          el.target.innerHTML = "-"
        } else {
          el.target.innerHTML = "+"
        }
      }
    
  }
}
  
  </script>
  
  <style>
  button{
    margin: 0;
  }
  .flex-accordion{
    display: flex;
    flex-wrap: wrap;
  }
  .cancelButton{
    position: absolute;
    right: 0;
    transform: translate(-50%, 0);
    margin-right: 10px;
  }
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .rightBound{
    position: relative;
    float: right;
  }
  .accordion-body{
    align-items: center;
  }
  </style>