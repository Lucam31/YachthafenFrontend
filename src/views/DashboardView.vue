<template>
  <div class="dashboard list-group list-group">
    <div class="panels list-group-item">

      <div class="title">
        <h1>Dashboard</h1>
      </div>

      <div class="card">
        <img src="../../img/card1.jpg" alt="Bild">
        <div class="card-content">
          <h2>
            Auslastung heute
          </h2>
          <div class="before">
            <div class="mainVal">
              <h1>{{ AuslastungheuteProzent }} %</h1>
            </div>
            <div class="desc">
              <span>Insgesamt: {{ AuslastungInsgesamt }} | Belegt: {{ AuslastungBelegt }}</span>
            </div>
          </div>
          <div class="after">
            <Doughnut id="AuslastungsD" :options="cardOptions" :data="DoughnutData" />
          </div>
        </div>
      </div>


      <div class="card">
        <img src="../../img/card1.jpg" alt="Bild">
        <div class="card-content">
          <h2>
            Jahresumsatz
          </h2>
          <div class="mainVal">
            <h1>{{ Jahresumsatz }} €</h1>
          </div>
          <div class="desc">
          </div>
        </div>
      </div>

      <div class="card">
        <img src="../../img/card1.jpg" alt="Bild">
        <div class="card-content">
          <div class="before">
            <h2>
            Buchungen
          </h2>
          <div class="mainVal">
            <h4>Gesamt</h4>
            <h3>{{ Buchungengesamt }} </h3>
            <br> 
            <h4>Mit Nebenkosten</h4>
            <h3>{{ BuchungmitNebenkosten }}</h3>
          </div>
          </div>
          <div class="after">
            <h2>
            Nebenkostenbuchungen
          </h2>
            <Doughnut id="NebenkostenD" :options="cardOptions" :data="NebenkostenData" />
          </div>
        </div>
      </div>




      <div class="barChart">
        <h3>
          Buchungen pro Platz im Jahr 2023
        </h3>
        <Chart type="bar" :data="chartData" :options="options" />
      </div>

      <div class="barChart">
        <h3>
          Umsatz pro Monat im Jahr 2023
        </h3>
        <Line :data="MonatsData" :options="options" />
      </div>

    </div>
</div>
</template>
  
<script>




import axios from "axios";
import APIURLService from "../services/API.service";

//import { Doughnut } from 'vue-chartjs'
import { Doughnut, Chart, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, LineElement)


const options = {
  responsive: true,
  maintainAspectRatio: false,

};
const cardOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: 'white'
      }
    }
  }
};

export default {
  name: "DashboardView",
  components: { Doughnut, Chart, Line },

  data: () => ({
    loaded: true, //false wenn Daten erst geladen werden (von API),
    options,
    cardOptions,
    AuslastungheuteProzent: 0,
    AuslastungInsgesamt: 0,
    AuslastungBelegt: 0,
    Jahresumsatz: 0,
    Plaetze: new Array(),
    PlaetzBuchungen: new Array(),
    Monate: new Array(),
    MonateBuchungen: new Array(),
    Buchungengesamt: null,
    BuchungmitNebenkosten: null,
    BuchungenWasser: null,
    BuchungenStrom: null,
  }),
  computed: {
    DoughnutData() {
      return {
        labels: ['Freie Plaetze', 'Belegte Plaetze'],
        datasets: [
          {
            backgroundColor: ['#5f9429', '#DD1B16'],
            data: [(this.AuslastungInsgesamt - this.AuslastungBelegt), this.AuslastungBelegt] //hier muss gerechnet werden da
          }
        ]
      }
    },
    chartData() {
      return {
        labels: this.Plaetze,
        datasets: [
          {
            label: 'Buchungen',
            backgroundColor: '#0b5ed7',
            data: this.PlaetzBuchungen 
          }
        ]
      }
    },
    MonatsData() {
      return {
        labels: this.Monate,
        datasets: [
          {
            label: 'Umsatz in €',
            backgroundColor: '#5f9429',
            data: this.MonateBuchungen 
          }
        ]
      }
    },
    NebenkostenData() {
      return {
        labels: ['Wasserbuchungen', 'Strombuchungen'],
        datasets: [
          {
            backgroundColor: ['#00BFFF', '#FFFF00'],
            data: [this.BuchungenWasser, this.BuchungenStrom] 
          }
        ]
      }
    }

  },
  async created() {
    var res = await axios.get(APIURLService.getAPIUrl() + "/api/Dashboard/GetAktuelleAuslastung");
    this.AuslastungBelegt = res.data[0].value;
    this.AuslastungInsgesamt = res.data[1].value;

    if (this.AuslastungBelegt == 0) {
      this.AuslastungheuteProzent = 0;
    } else {
      this.AuslastungheuteProzent = ((this.AuslastungBelegt / this.AuslastungInsgesamt) * 100).toFixed(2);
    }

    //----------------------------------------
    res = await axios.get(APIURLService.getAPIUrl() + "/api/Dashboard/GetJahresUmsatz");
    this.Jahresumsatz = res.data.toLocaleString("de-DE");
    //----------------------------------------
    res = await axios.get(APIURLService.getAPIUrl() + "/api/Dashboard/GetLiegeplatzRanking");
    this.Plaetze = new Array();
    this.PlaetzBuchungen = new Array();
    for (let i = 0; i < res.data.length; i++) {
      this.Plaetze.push(res.data[i].key);
      this.PlaetzBuchungen.push(res.data[i].value);
    }
    //----------------------------------------
    res = await axios.get(APIURLService.getAPIUrl() + "/api/Dashboard/GetUmsatzMonat");
    this.Monate = new Array();
    this.MonateBuchungen = new Array();
    for (let i = 0; i < res.data.length; i++) {
      this.Monate.push(res.data[i].key);
      this.MonateBuchungen.push(res.data[i].value);
    }
    //----------------------------------------
    res = await axios.get(APIURLService.getAPIUrl() + "/api/Dashboard/GetNebenkostenDetails");
    this.Buchungengesamt = res.data[0].value;
    this.BuchungmitNebenkosten = res.data[1].value;
    this.BuchungenWasser = res.data[2].value;
    this.BuchungenStrom = res.data[3].value;

  }
};
</script>
  
  
<style scoped>
.panels {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.overview {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 2em;
}

.overview p {
  margin-top: 1em;
}

.title {
  width: 100%;
  text-align: center;
  margin: 5em 0 2em 0;
}



.card {
  width: 300px;
  height: 350px;
  background-color: rgb(7, 7, 7);
  margin: 5em 1em 5em 1em;
  color: white;
}

h1 {
  transition: ease-in-out .2s;
}

.card:hover .card-content {
  width: 100%;
  height: 100%;
  border: 0px solid white;
  padding: 2em;
}

.card:hover img {
  opacity: .3;
}

.card:hover h1 {
  font-size: 40pt;
}

.card:hover .desc {
  margin-bottom: 10px;
  font-size: large;
}

.card-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border: 5px solid white;
  padding: 5px;
  transition: ease-in-out .2s;
}

.mainVal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

.desc {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  transition: ease-in-out .2s;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: .8;
  transition: ease-in-out .2s;
}

.before {
  transition: ease-in-out .2s;
}

.after {
  opacity: 0;
  height: 70%;
  width: 100%;
  transition: ease-in-out .3s;
}

.card:hover .before {
  display: none;
}

.card:hover .after {
  opacity: 1;
}

.descHidden {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: ease-in-out .2s;
}
.card:hover .descHidden {
  opacity: 1;
  margin-bottom: 10px;
  font-size: large;
}




.barChart {
  width: 70%;
  height: 25em;
  margin-bottom: 5em;
}
</style> 
