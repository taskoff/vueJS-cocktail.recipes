<template>
  <div class="register-form-view">
    <div class="">
      <h2>Register</h2>
    </div>
    <div class="form-container">
          <form action="">
    <div class="form-label-input">
      <label for="email">Email</label>
      <input type="text" id="email" name="email"  placeholder="Email" 
        autofocus="">
    </div>
 
    <div class="form-label-input">
      <label for="inputUsername">Username</label>
      <input type="text" id="inputUsername" name="username"  placeholder="Username" 
        autofocus="">
    </div>

    <div class="form-label-input">
      <label for="inputPassword">Password</label>
      <input type="password" id="inputPassword" name="password"  placeholder="Password" >
    </div>

    <div class="form-label-input">
       <label for="inputRePassword">Re-Password</label>
      <input type="password" id="inputRePassword" name="rePassword"  placeholder="Re-Password">
    </div>
    <div class="reg-btn-container">
         <button type="submit" class="regBtn">Sign Up</button>
    </div>
   

    <div >
      <p class="alreadyUser"> Already have account? Then just
        <router-link to="/login">Sign-In</router-link>!
      </p>
    </div>

  </form>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 3em;
    margin: 50px 0;
}
.form-container {
  width: 50%;
  margin: auto;
  background-color: rgba(255,204,153, 0.6);
  padding: 40px 30px;
  text-align: right;
  padding-right: 150px;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
}
.form-container form {
  /* text-align: right; */

}
.form-label-input {
  padding: 10px;
}

form input {
  line-height: 2em;
    min-width: 60%;
    border-radius: 3px;
    /* border: none; */
}

form label {
  font-size: 1.3em;
  padding-right: 10px;
}
.reg-btn-container {
  /* text-align: center; */
  padding: 20px 10px;
}
.regBtn {
  padding: 5px 10px;
  border-radius: 3px;
}

</style>