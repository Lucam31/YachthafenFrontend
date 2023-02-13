<template>
    <div class="mb-3 flex">
      <div class="h2 leftBound">Liegeplätze</div>
      <button class="btn-primary btn" id="basic-addon2" href="#" v-on:click.prevent="toggleComponent()">Anlegen</button>
    </div>
    <div class="border rounded div-box p-5 text-start mt-5 mb-5" v-show="visible">
        <form>
            <p class="h2 mb-5">Liegeplatz anlegen</p>
            <div class="row mt-4 mb-4">
                <div class="mb-3 col">
                    <label for="bezeichnung" class="form-label">Liegeplatzname</label>
                    <input type="text" class="form-control" id="bezeichnung" v-model="Bezeichnung">
                </div>
            </div>
            <div class="row mt-4 mb-4">
                <div class="mb-3 col">
                    <label for="laenge" class="form-label">Länge</label>
                    <div class="input-group">
                      <input type="number" class="form-control" id="laenge" v-model="Laenge">
                      <span class="input-group-text" id="basic-addon2">m</span>
                    </div>
                </div>
                <div class="mb-3 col">
                    <label for="breite" class="form-label">Breite</label>
                    <div class="input-group">
                      <input type="number" class="form-control" id="breite" v-model="Breite">
                      <span class="input-group-text" id="basic-addon2">m</span>
                    </div>
                </div>      
            </div>
            <div class="row mt-4 mb-4">
                <div class="mb-3 col">
                    <label for="tiefgang" class="form-label">Tiefgang</label>
                    <div class="input-group">
                      <input type="number" class="form-control" id="tiefgang" v-model="Tiefgang">
                      <span class="input-group-text" id="basic-addon2">cm</span>
                    </div>
                </div>
                <div class="mb-3 col">
                    <label for="tagespreis" class="form-label">Tagespreis</label>
                    <div class="input-group">
                      <input type="number" class="form-control" id="tagespreis" v-model="Tagespreis">
                      <span class="input-group-text" id="basic-addon2">€</span>
                    </div>
                </div>
            </div>
            <button type="submit" class="input-group-text createButton" v-on:click.prevent="onLiegeplatzAnlegen">Liegeplatz speichern</button>
        </form>
    </div>
      <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
        <div class="accordion-item" v-for="Liegeplatz in Liegeplaetze" :key="Liegeplatz.m_LiegeplatzId">
          <h2 class="accordion-header" :id="'panelsStayOpen-heading'+Liegeplatz.m_LiegeplatzId">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse'+Liegeplatz.m_LiegeplatzId" aria-expanded="false" :aria-controls="'panelsStayOpen-collapse'+Liegeplatz.m_LiegeplatzId">
              {{Liegeplatz.m_Bezeichnung}}
            </button>
          </h2>
          <div :id="'panelsStayOpen-collapse'+Liegeplatz.m_LiegeplatzId" class="accordion-collapse collapse" :aria-labelledby="'panelsStayOpen-heading'+Liegeplatz.m_LiegeplatzId">
            <div class="accordion-body">
  
              
                
              <div class="row mt-4 mb-4">
                <div class="mb-3 title">
                    <p class="h3 mb-3">Liegeplatz {{ Liegeplatz.m_Bezeichnung }}</p>
                </div>
                </div>
              <div class="row mt-4 mb-4">
                <div class="mb-3 col">
                  <label for="liegeplatz" class="form-label">Liegeplatz</label>
                  <input type="text" class="form-control" id="liegeplatz" v-model="Liegeplatz.m_Bezeichnung">
                </div>
              </div>
              <div class="row mt-4 mb-4">
                <div class="mb-3 col">
                  <label for="laenge" class="form-label">Länge</label>
                  <input type="text" class="form-control" id="laenge" v-model="Liegeplatz.m_Laenge">
                </div>
                <div class="mb-3 col">
                  <label for="breite" class="form-label">Breite</label>
                  <input type="text" class="form-control" id="breite" v-model="Liegeplatz.m_Breite">
                </div>   
                </div>
              <div class="row mt-4 mb-4">   
                <div class="mb-3 col">
                  <label for="tiefgang" class="form-label">Tiefgang</label>
                  <input type="text" class="form-control" id="tiefgang" v-model="Liegeplatz.m_Tiefgang">
                </div>
                <div class="mb-3 col">
                  <label for="tagespreis" class="form-label">Tagespreis</label>
                  <input type="text" class="form-control" id="tagespreis" v-model="Liegeplatz.m_Tagespreis">
                </div>
              </div>
              <div class="mb-3 buttons">
                <button type="submit" class="input-group-text editButton" v-on:click.prevent="onLiegeplatzSpeichern({Liegeplatz})">Speichern</button>
                <button type="submit" class="input-group-text editButton" v-on:click.prevent="onLiegeplatzLoeschen({Liegeplatz})">Löschen</button>
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
      name: 'PlatzverwaltungView',
      components: {
        
      },
      async created(){
        const kunden_id = this.$store.getters.getKundenId;
        if(kunden_id == null){
          this.$router.push({name: "login"});
        }
        
        this.loadLiegeplaetze();

      },
      data() {
      return{
          visible: false,
          Bezeichnung: null,
          Laenge: null,
          Breite: null,
          Tiefgang: null,
          Tagespreis: null,
          Liegeplaetze: []
      };
      },
      methods:{ 
        toggleComponent() {
            this.visible = !this.visible;
        },
        async onLiegeplatzAnlegen(){
            await axios.post(APIURLService.getAPIUrl()+'/api/LiegeplatzVerwaltung/CreateLiegeplatz',{ bezeichnung: this.Bezeichnung,
                                                                                        laenge: this.Laenge,
                                                                                        breite: this.Breite,
                                                                                        tiefgang: this.Tiefgang,
                                                                                        tagespreis: this.Tagespreis });
            this.toggleComponent();
            this.loadLiegeplaetze();
        },
        async loadLiegeplaetze(){
          var res = await axios.get(APIURLService.getAPIUrl()+'/api/LiegeplatzVerwaltung/GetAllLiegeplaetze');
          this.Liegeplaetze = res.data;
        },
        async onLiegeplatzLoeschen(Liegeplatz){
          await axios.post(APIURLService.getAPIUrl()+'/api/LiegeplatzVerwaltung/DeleteLiegeplatz?LiegeplatzId='+ Liegeplatz.Liegeplatz.m_LiegeplatzId);

          this.toggleComponent();
          this.loadLiegeplaetze();
        },
        async onLiegeplatzSpeichern(Liegeplatz){

         await axios.post(APIURLService.getAPIUrl()+'/api/LiegeplatzVerwaltung/UpdateLiegeplatz',{liegeplatzId: Liegeplatz.Liegeplatz.m_LiegeplatzId,
                                                                                        bezeichnung: Liegeplatz.Liegeplatz.m_Bezeichnung,
                                                                                        laenge: Liegeplatz.Liegeplatz.m_Laenge,
                                                                                        breite: Liegeplatz.Liegeplatz.m_Breite,
                                                                                        tiefgang: Liegeplatz.Liegeplatz.m_Tiefgang,
                                                                                        tagespreis: Liegeplatz.Liegeplatz.m_Tagespreis });
          this.toggleComponent();
        }
    }
  }
    
    </script>
    
    <style scoped>
    .createButton{
      position: relative;
      left: 100%;
      transform: translate(-100%, 0);
      margin: 0;
    }
    .buttons{
      display: flex;
      justify-content: end;
    }
    .editButton{
      margin: 5px;
    }
    .flex-accordion{
      display: flex;
      flex-wrap: wrap;
    }
    .title{
      width: 100%;
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
    .div-box{
    background-color: #fff;
    }
    </style>