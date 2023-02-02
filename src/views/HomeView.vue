<template>
  <div class="background">
  <div class="mb-3 flex">
    <div class="h2 leftBound">Buchungen</div>
    <span class="h2 rightBound" id="buchungCollapseButton" type="button" data-bs-toggle="collapse" data-bs-target="#buchungen" aria-expanded="false" aria-controls="collapseExample" v-on:click.prevent="changeSign($event)">-</span>
  </div>
  <div class="itemList collapse show" id="buchungen">
    <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" v-for="Buchung in Buchungen" :key="Buchung.m_BuchungsId">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'panelsStayOpen-collapse'+Buchung.m_BuchungsId" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            {{Buchung.m_BuchungsId}}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne" onload="setPanelId($event, Buchung)">
          <div class="accordion-body">
            <strong>{{Buchung.m_Startdatum}} bis zum {{Buchung.m_Enddatum}}</strong> Auf Liegeplatz {{ Buchung.m_Liegeplatz.m_Bezeichnung }} mit Boot {{ Buchung.m_Boot.m_Name }}
            <button type="submit" class="btn btn-primary cancelButton" v-on:click.prevent="onBootAnlegen">Stornieren</button>
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
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            {{alteBuchung.m_BuchungsId}}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <strong>{{alteBuchung.m_Startdatum}} bis zum {{alteBuchung.m_Enddatum}}</strong> Auf Liegeplatz {{ alteBuchung.m_Liegeplatz.m_Bezeichnung }} mit Boot {{ alteBuchung.m_Boot.m_Name }}
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
      <div class="accordion-item" v-for="Boot in Boote" :key="Boot.registrierungs_id">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            {{Boot.registrierungs_id}}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <strong>{{Boot.name}} ist {{Boot.laenge}} Meter lang</strong>
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
      this.Boote = [{registrierungs_id: "abc", name: "Boot1", laenge: "69"}];
      
    },
    data() {
    return{
        Buchungen: null,
    };
    },
    methods:{ 
      changeSign(el) {
        console.log(el);
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
  .cancelButton{
    position: relative;
    float: right;
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