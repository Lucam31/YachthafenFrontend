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
        <!-- <div class="panel border rounded container p-3 text-center">
            Test1
        </div>
        <div class="panel border rounded container p-3 text-center">
            Test2
        </div>
        <div class="panel border rounded container p-3 text-center">
            Test3
        </div>
        <div class="panel border rounded container p-3 text-center">
            Test4
        </div> -->
        <div class="card auslastung">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="black" class="bi bi-percent" viewBox="0 0 16 16">
              <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </div>
          <div class="card-desc">
            <div class="card-header">
              <div class="card-title">Punktzahl für dieses Projekt</div>
            </div>
          <div class="card-percent">100%</div>
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
    
    </div>
   </div>
</template>
  
  <script>
  
  export default {
    name: 'ProfileView',
    components: {
      
    }
  }
  </script>
  
  
  <style>
  .panels{
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80vh;
  }
  .card{
    width: 80%;
    height: 7rem;
    justify-self: center;
    margin: 2em 0;
  }
  .overview{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
 display: grid;
 cursor: pointer;
 grid-template-rows: 50px 1fr;
 --primary-clr: #4b9fd8;
 width: 200px;
 height: 170px;
 border-radius: 10px;
}

.card:hover .img-section {
 transform: translateY(1em);
}

.card-desc {
 border-radius: 10px;
 padding: 15px;
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
}

  </style> 
