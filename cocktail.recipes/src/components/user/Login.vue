<template>
  <div class="login-form-view">
    <div class="loader-container" :class="{show: isLoading}">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>

    <h2>Login</h2>
    <div class="form-container">
        <form @submit.prevent="submitHandler">
            <div class="form-label-input">
                <label for="inputUsername">Username</label>
                <input type="text" id="username" name="username"  v-model="username"  placeholder="Username" >
                <template v-if="$v.username.$error">
                  <div class="error-input" v-if="!$v.username.required">the username is reqired</div>
                </template>
            </div>

            <div class="form-label-input">
              <label for="inputPassword">Password</label>
              <input type="password" id="inputPassword" name="password"  v-model="password" placeholder="Password" >
              <template v-if="$v.password.$error">
                <div class="error-input" v-if="!$v.password.required">the Password is required</div>
              </template>
            </div>
            <div class="log-btn-container">
                <button type="submit" class="logBtn">Sign In</button>
            </div>
            <div>
                <p class="alreadyUser"> Don't have account? Then just
                  <router-link to="/register">Sign-Up</router-link>!
                </p>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
import requester from '../../mixins/requester2';
import service from '../../mixins/test.js';
import { validationMixin } from 'vuelidate';
import {required} from 'vuelidate/lib/validators'

export default {
  mixins: [requester,validationMixin],
  data() {
    return {
      username: '',
      password: '',
      isLoading: false
    }
  },
   validations: {
    username: {required},
    password: {required},
  },
  methods: {
    submitHandler() {
      
      if(this.$v.$invalid) {
        this.$v.$touch()
                return
            }
      const username = this.username;
      const password = this.password;
      this.isLoading = true
      
      this.post('user', 'login', {username, password }, 'Basic')
      .then(e=> {if (!e.ok) {
                  console.log(e);
                  if (e.status === 401) {
                    alert('Invalid User!');
                  } else {
                     this.$router.push('*');
                  }

                  throw new Error(e.statusText);
              }
              return e;})
      .then(this.serializeData)
      .then(data=>{
        // console.log(data);
        
        this.addSessonStorageUserInfo(data);
        this.$emit('isAuth', true);
        service.isLogin = true;
        this.$router.push('list');
        
        })
        // .catch(err=>{
        //   console.log(err)})
         
        .finally(()=>{
          this.username = '';
          this.password = '';
          this.isLoading = false})
     
      
    }
  }
}
</script>

<style scoped>
@import '../../shared-css/loader.css';

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
.log-btn-container {
  /* text-align: center; */
  padding: 20px 10px;
}
.logBtn {
  padding: 5px 10px;
  border-radius: 3px;
}

/* ============== Loader CSS ========================= */

.loader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  display: none;
}
.show {
  display: block;
}

@media (max-width: 600px) {
  .form-container {
    width: 90%;
    padding-right: 20px;
    scroll-padding-left: 20px;
    text-align: center;
  }
  .form-container input {
    min-width: 80%;
  }
}
/* .lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} */

</style>