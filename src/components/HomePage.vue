<template>
    <div class="first">
  <NavBar />
  <HeaDer />
  <div className="homeContainer">
    <FeatuRed />
    <h1 className="homeTitle">Browse by property type</h1>

    <PropertyList />
    <h1 className="homeTitle">Hotels & Restaurent</h1>

    <FeaturedProperties />
  </div>
  <MailList />
  <FooTer />
</div>
  <!-- <router-link to="/searchitem">SearchItem</router-link> -->
  <!-- <router-view></router-view> -->
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaDer from "./components/HeaDer.vue";
import FeatuRed from "./components/FeatuRed.vue";
import PropertyList from "./components/PropertyList.vue";
import FeaturedProperties from "./components/FeaturedProperties.vue";
import MailList from "./components/MailList.vue";
import FooTer from "./components/FooTer.vue";
// import SignUp from './components/SignUp.vue'
// import LogIn from './components/LogIn.vue'
// import HoTel from './HoTel.vue'

export default {
  name: "App",
  components: {
    NavBar,
    HeaDer,
    FeatuRed,
    PropertyList,
    FeaturedProperties,
    MailList,
    FooTer,
    //  SignUp,
    //  LogIn,
    //  HoTel
  },
};
</script>

<style>
@import "./assets/External/@fortawesome/fontawesome-free/css/all.min.css";

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");

* {
  font-family: "Nunito", sans-serif;
}

.homeContainer {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.homeTitle {
  width: 1024px;
  font-size: 20px;
  align-items: center;
}
</style>
