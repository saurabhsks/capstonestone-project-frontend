<template>
  <div className="loginbg">
    <div class="style">
      <h1 style="text-align: center">Login</h1>
      <div class="login">
        <input type="text" v-model="username" placeholder="Enter Username" />
        <br />
        <input
          type="password"
          v-model="password"
          placeholder="Enter Password"
        />
        <br />
        <div class="btn">
          <button @click="login()" className="lbtn">Login</button>
        </div>
      </div>
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
            "https://saurabhbookingapp.onrender.com/auth/login",
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
.style {
  background: rgba(6, 6, 6, 0.5);

  font-size: 18px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
  color: #fff;
  padding-bottom: 5%;
  margin-left: 10%;
  margin-right: 10%;
}
.login input {
  width: 30%;
  height: 40px;
  padding-left: 3%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.loginbg {
  height: 100vh;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
}
.btn {
  width: 33.5%;
  height: 40px;
  border: 1px solid skyblue;
  background: rgb(13, 227, 17);
  color: #fff;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn button {
  width: 100%;
  height: 40px;
  border: 1px solid skyblue;
  background: rgb(20, 226, 37);
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
}
.lbtn:hover {
  background-color: black;
  border: 2px solid white;
  color: #fff;
}
.btn:hover {
  background-color: black;
  border: 2px solid white;
  color: #fff;
}
</style>
