<template>    
   <div class="dashboard list-group list-group-horizontal">
    <div class="overview list-group-item">
        <h4>Overview</h4>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
    </div>
    <div class="panels list-group-item">
        <div class="card auslastung" @click="updateChartData('last')">
          <div class="img-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-graph-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
            </svg>
          </div>
          <div class="card-desc">
            <div class="card-header">
              <div class="card-title">Auslastung<br>heute</div>
            </div>
          <div class="card-percent">{{AuslastungheuteProzent}} %</div>
          <p class="recent">Insgesamt: {{ AuslastungInsgesamt }} | Belegt: {{ AuslastungBelegt }}</p>
          </div>
        </div>
        <div class="card work" @click="updateChartData('temps')">
          <div class="img-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="black" class="bi bi-percent" viewBox="0 0 16 16">
              <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </div>
          <div class="card-desc">
            <div class="card-header">
              <div class="card-title">Punktzahl für dieses Projekt</div>
            </div>
          <div class="card-percent">100%</div>
          <p class="recent">Insgesamt: 100 | Erreicht: 100</p>
        </div>
      </div>
      <div class="card work">
          <div class="img-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-graph-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
            </svg>
          </div>
          <div class="card-desc">
            <div class="card-header">
              <div class="card-title">Auslastung<br>heute</div>
            </div>
          <div class="card-percent">50%</div>
          <p class="recent">Insgesamt: 10 | Belegt: 5</p>
        </div>
      </div>      
      <div class="card work">
          <div class="img-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-graph-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
            </svg>
          </div>
          <div class="card-desc">
            <div class="card-header">
              <div class="card-title">Auslastung<br>heute</div>
            </div>
          <div class="card-percent">50%</div>
          <p class="recent">Insgesamt: 10 | Belegt: 5</p>
        </div>
      </div>

      <div class="dashboard-bar">
        <Bar v-if="loaded" :data="chartData" :style="barStyle" id="barChart"/>
      </div>
      
    
    </div>
   </div>
</template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  import axios from 'axios'
  import APIURLService from '../services/API.service';
  
  export default {
    name: 'DashboardView',
    components: { Bar },
    
    data: () => ({
      loaded: true, //false wenn Daten erst geladen werden (von API)
      chartData: {
        labels: [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        datasets: [
          {
            label: 'Auslastung',
            backgroundColor: '#4b9fd8',
            data: [7, 12, 15, 20, 24, 29, 39, 30, 22, 10, 8, 6]
          }
        ]  //chartData null wenn Daten geladen werden
      },
      AuslastungheuteProzent: 0,
      AuslastungInsgesamt: 0,
      AuslastungBelegt: 0
    }),
    async created(){
      const res = await axios.get(APIURLService.getAPIUrl()+'/api/Dashboard/GetAktuelleAuslastung');

      this.AuslastungBelegt = res.data.akt;
      this.AuslastungInsgesamt = res.data.max;
      if(res.data.akt == 0){
        this.AuslastungheuteProzent = 0;    
      }else {
        this.AuslastungheuteProzent = (res.akt / res.max) * 100;
      }
    },
    methods:{
      updateChartData(vals) {
        if (vals == "temps") {
          this.chartData.datasets.data = temp;
        } else {
          this.chartData.datasets.data = last;
        }
        console.log(this.chartData.datasets.data)
        
      }
    }

    // async mounted () {
    //   this.loaded = false

    //   try {
    //     const { userlist } = await fetch('/api/userlist')
    //     this.chartdata = userlist

    //     this.loaded = true
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
  }
  const last = [7, 12, 15, 20, 24, 29, 39, 30, 22, 10, 8, 6]
  const temp = [2, 4, 8, 13, 18, 21, 23, 23, 19, 13, 7, 4]
  
  </script>
  
  
  <style scoped>
  .panels{
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
  }
  .overview{
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 2em;

  }
  .overview p{
    margin-top: 1em;
  }


svg{
  margin: 5px;
}


.card {
 font-family: "Arial";
 color: #fff;
 box-sizing: border-box;
 display: grid;
 cursor: pointer;
 grid-template-rows: 50px 1fr;
 --primary-clr: #4b9fd8;
 width: 200px;
 height: 230px;
 margin: 2em;
 border-radius: 10px;
 border: none;
 justify-self: center;
}

.card:hover .img-section {
 transform: translateY(1em);
}

.card-desc {
 border-radius: 10px;
 padding: 13px;
 position: relative;
 top: -10px;
 display: grid;
 gap: 10px;
 background: var(--primary-clr);
}

.card-percent {
 font-size: 1.7em;
 font-weight: 500;
}

.img-section {
 transition: 0.3s;
 border-top-left-radius: 10px;
 border-top-right-radius: 10px;
 background: hsl(212, 67%, 48%);
}

.card-header {
 display: flex;
 align-items: center;
 width: 100%;
}

.card-title {
 flex: 1;
 font-size: 0.9em;
 font-weight: 500;
}

.card-menu {
 display: flex;
 gap: 4px;
 margin-inline: auto;
}

.card svg {
 float: right;
 max-width: 100%;
 max-height: 100%;
}

.card .dot {
 width: 5px;
 height: 5px;
 border-radius: 50%;
 background: var(--dot-clr);
}

.card .recent {
 line-height: 0;
 font-size: 0.8em;
 word-break: break-all;
}

.dashboard-bar{
  width: 100%;
}

  </style> 
