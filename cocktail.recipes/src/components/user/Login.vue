<template>
  <div class="login-form-view">
    <h2>Login</h2>
    <div class="form-container">
        <form @submit.prevent="submitHandler">
            <div class="form-label-input">
                <label for="inputUsername">Username</label>
                <input type="text" id="username" name="username"  v-model="username"  placeholder="Username" >
                 
            </div>

            <div class="form-label-input">
              <label for="inputPassword">Password</label>
              <input type="password" id="inputPassword" name="password"  v-model="password" placeholder="Password" >
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
// import {post} from '../../auth/requester.js';
import requester from '../../mixins/requester2'

export default {
  mixins: [requester],
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitHandler() {
      const username = this.username;
      const password = this.password;
      this.username = '';
      this.password = '';
    this.post('user', 'login', {username, password }, 'Basic').then(data=>{
        console.log(data);
        
        this.addSessonStorageUserInfo(data);
        this.$emit('isAuth', true);
        this.$router.push('list');
        
        })
     
      
    }
  }
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
</style>