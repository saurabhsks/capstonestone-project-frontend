<template>
  <h1 style="text-align: center">SignUp</h1>
  <div class="register">
    <input type="text" v-model="username" placeholder="Enter UserName" /><br />
    <input type="text" v-model="email" placeholder="Enter Email" /><br />
    <input
      type="password"
      v-model="password"
      placeholder="Enter Password"
    /><br />
    <div class="btn">
      <button v-on:click="signup()">Sign Up</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      console.log(this.username, this.email,this.password);

        //if(this.username && this.email &&)

      const newuser = {
        username: this.username,
        email:this.email,
        password: this.password,

      };
      const result = await axios.post("http://localhost:5000/auth/register", newuser);
      console.log("Result is *****");
      console.log(result);
      this.$router.push({ path: "/login", replace: true });
    },
  },
};
</script>

<style scoped>
.register input {
  width: 30%;
  height: 40px;
  padding-left: 3%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register .btn {
  width: 33.5%;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn button {
  width: 32%;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
</style>
