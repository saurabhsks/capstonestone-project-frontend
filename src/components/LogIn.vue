<template>
  <h1 style="text-align: center">Login</h1>
  <div class="login">
    <input type="text" v-model="username" placeholder="Enter Username" />
    <br />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <br />
    <div class="btn">
      <button @click="login()">Login</button>
    </div>
  </div>
  <router-view />
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log(this.username, this.password);
      if (this.username && this.password) {
        if (this.password.length >= 4 && this.password.length <= 12) {
          const user = {
            username: this.username,
            password: this.password,
          };
          const result = await axios.post(
            "http://localhost:5000/auth/login",
            user
          );
          console.log("you are logged in");
          console.log(result);
          this.$router.push({ path: "/roompage", replace: true });
        } else {
          console.log("Pasword or username is incorrect");
        }
      } else {
        console.log("Please enter valid data");
      }
    },
  },
};
</script>

<style scoped>
.login input {
  width: 30%;
  height: 40px;
  padding-left: 3%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.btn {
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
