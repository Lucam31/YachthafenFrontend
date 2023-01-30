<template>
    <div class="border rounded container p-5 text-center">
      <form>
        <p class="h2">Login</p>
        <div class="mb-3">
          <!-- <label for="username" class="form-label">Username</label> -->
          <input type="text" class="form-control" id="e-mail" placeholder="E-Mail">
        </div>
        <div class="mb-3">
          <!-- <label for="password" class="form-label">Password</label> -->
          <input type="text" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" >Login</button>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    button{
      margin-left: 1rem;
      margin-right: 1rem;
    }
  </style>
  