<template>
    <div class="form text-center">
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
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
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
  
  </style>