<template>
  <div className="navbar">
    <div className="navContainer">
      <span className="logo">SaurabhBooking</span>
      <div className="navItems">
        <!-- <button ><RouterLink to="/signup" className="navButton">Register</RouterLink></button>
        <button ><RouterLink to="/login" className="navButton">Login</RouterLink></button> -->
        <button @click="Register()" class="navButton">Register</button>
        <button @click="Login()" class="navButton">LogIn</button>


        <!-- <button className="navButton">Login</button> -->
        <!-- <button><router-link to="/listbar" className="headerBtn" >Search</router-link></button> -->
      <!-- <RouterView></RouterView> -->
      </div>
    </div>
  </div>
</template>

<script >
// import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'NavBar',
  // props: {
  //   msg: String
  // }

  methods:{

    Register(){
      this.$router.push({path:'/signup' , replace:true})
    },
    Login(){
      this.$router.push({path:'/login', replace:true})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: top; 
}

.navContainer{
  width: 100%;
  max-width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10%;
}
.logo{
  font-weight: 500;
  margin-left: 10%;
  font-size: 20px;
}

.navButton{
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
}

</style>
