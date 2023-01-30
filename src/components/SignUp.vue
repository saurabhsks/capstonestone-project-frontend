<template>
    <div class="signupbg">
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
      <button className="hover" v-on:click="signup()">Sign Up</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
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
      console.log(this.username, this.email, this.password);

      if (this.username && this.email && this.password) {

        if(this.password.length >=4 && this.password.length <=12){
            const newuser = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        const result = await axios.post(
          "http://localhost:5000/auth/register",
          newuser
        );
        console.log("Result is *****");
        console.log(result);
        this.$router.push({ path: "/login", replace: true });
        }
        else{
            console.log("Please enter valid password");
        }
        
      } else {
        console.log("Enter valid data");
      }
    },
  },
};
</script>

<style scoped>
.signupbg{
    height:100vh;
    
   background-size:cover;
    background-image: url(https://media.istockphoto.com/id/512882668/photo/entering-hotel-room.jpg?s=612x612&w=0&k=20&c=dkStriVIj-19NVWg1AgHdBAtRGndus-sQJiZdo5N6ss=);
}
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
  width: 100%;
  height: 40px;
  border: 1px solid skyblue;
  background: rgb(20, 226, 37);
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
}
.btn button:hover{
    background-color: black;
    border: 2px solid white;
    color: #fff;
}
</style>
