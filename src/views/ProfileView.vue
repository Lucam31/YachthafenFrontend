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
        <div class="panel border rounded container p-3 text-center">
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
        </div>
    </div>
   </div>
</template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'ProfileView',
    components: {
      
    }
  }
  </script>
  
  <style>
  .dashboard{
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .dashboard *{
    margin: 0;
    padding: 0;
  }
  .panels{
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .panel{
    width: 80%;
    height: 7rem;
    justify-self: center;
    margin: 2em;
  }
  .overview{
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .overview p{
    margin-top: 1em;
  }
  </style>