<template>
  <div className="header">
    <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
          <h1><i class="fa-solid fa-bed"></i></h1>
          <span style="font-size: 17px">Stays</span>
        </div>
        <div className="headerListItem">
          <h1><i class="fa-solid fa-plane"></i></h1>
          <span style="font-size: 17px">Flight</span>
        </div>
        <div className="headerListItem">
          <h1><i class="fa-solid fa-car"></i></h1>
          <span style="font-size: 17px">Car Rentals</span>
        </div>
        <div className="headerListItem">
          <h1><i class="fa-solid fa-motorcycle"></i></h1>
          <span style="font-size: 17px">Rapido</span>
        </div>
        <div className="headerListItem">
          <h1><i class="fa-solid fa-taxi"></i></h1>
          <span style="font-size: 17px">Airport Taxis</span>
        </div>
      </div>
      <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
      <p className="headerDesc">
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free saurabhbooking account
      </p>
      <button className="headerBtn">Sign in / Register</button>
    </div>
    <!-- <div className="headerSearch">
        <div className="location">
        <input type="text" placeholder="Location" />
    </div>
    <div className="date">
        <input type="date" placeholder="Date" />
    </div> -->
    <!-- <router-link to="/searchitem">Search</router-link>
    <router-view></router-view> -->
    <!-- <button className="headerBtn" @click.prevent='onClick()' >Search</button> -->

    <!-- <button><router-link to="/listbar" className="headerBtn" >Search</router-link></button>
      <router-view></router-view> -->
    <!-- </div> -->

    <!-- <div class="btnClick">
      <button @click="$router.push({path:'/listbar',replace:true})">Book Hotel Rooms</button>
    </div> 

    <router-view></router-view> 
     -->
  </div>
 
</template>

<script>
export default {
  name: "HeaDer",

  //   methods : {
  //     onClick(){
  //         this.$router.push("/listbar");
  //     }
  // }

  
};
</script>

<style scoped>
.header {
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
}

.headerContainer {
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
}

.headerList {
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
  font-size: 80%;
}

.headerListItem {
  display: flex;
  align-items: center;
  gap: 10px;
}

.headerListItem.active {
  border: 1px solid white;
  padding: 5px;
  border-radius: 30px;
}
.headerDesc {
  margin: 20px 0px;
  text-align: left;
  font-size: 20px;
}
.headerTitle {
  margin-left: 0%;
  position: relative;
}
.headerBtn {
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
  text-align: left;
}

.headerBtn {
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
