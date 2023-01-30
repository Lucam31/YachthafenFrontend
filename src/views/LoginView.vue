<template>
  <div class="form">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>

<style>
.form{
  position: relative;
  width: 35%;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>