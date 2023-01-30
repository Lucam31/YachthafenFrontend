<template>
  <div class="form">
    <div class="border rounded container p-5 text-center">
      <form>
        <p class="h2">Login</p>
        <div class="mb-3">
          <input type="text" class="form-control" id="e-mail" placeholder="E-Mail">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" >Login</button>
        <button type="submit" class="btn btn-primary"><a href="/register">Register</a></button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LoginView',
  components: {
    
  }
}
</script>

<style>
.form{
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
}
button{
  margin-left: 1rem;
  margin-right: 1rem;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  text-decoration: none;
  color: white;
}
</style>