<template>
    <div class="form">
      <div class="border rounded container p-5 text-center">
        <form>
          <p class="h2">Registrierung</p>
          <div class="row mt-4 mb-4">
            <div class="col">
            <input type="text" class="form-control" id="Name" placeholder="Name">
            </div>
            <div class="col">
            <input type="text" class="form-control" id="Vorname" placeholder="Vorname">
            </div>
          </div>
          <div class="mb-4">
            <input type="text" class="form-control" id="E-Mail" placeholder="E-Mail">
          </div>
          <div class="mb-4">
            <input type="text" class="form-control" id="password" placeholder="Password">
          </div>
          <button type="submit" class="input-group-text">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'RegisterView',
    components: {
      
    }
  }
  </script>
  
  <style>
  .form{
    position: relative;
    width: 45%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  </style>