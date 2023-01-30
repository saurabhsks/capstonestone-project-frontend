<template>
  <div className="page">
    <div className="roomPage">
        <div className="hotelName"><h1><b>Silver Spoon</b></h1></div>
      <div className="roomDetails">
        <div className="room">
          <h2 className="title">B1.1</h2>
          <h3 className="maxPeople">2</h3>
          <h3 className="desc">King Size bed,1 bathroom,balcony</h3>
        </div>
        <div className="checkBox">
          <input class="checkBox1" type="checkbox" name="checkbox" id="" />
        </div>
      </div>
      <div className="roomDetails">
        <div className="room">
          <h2 className="title">B1.1</h2>
          <h3 className="maxPeople">2</h3>
          <h3 className="desc">King Size bed,1 bathroom,balcony</h3>
        </div>
        <div className="checkBox">
          <input class="checkBox1" type="checkbox" name="checkbox" id="" />
        </div>
      </div>
      <div className="roomDetails">
        <div className="room">
          <h2 className="title">B1.1</h2>
          <h3 className="maxPeople">2</h3>
          <h3 className="desc">King Size bed,1 bathroom,balcony</h3>
        </div>
        <div className="checkBox">
          <input class="checkBox1" type="checkbox" name="checkbox" id="" />
        </div>
      </div>
      <div className="roomDetails">
        <div className="room">
          <h2 className="title">B1.1</h2>
          <h3 className="maxPeople">2</h3>
          <h3 className="desc">King Size bed,1 bathroom,balcony</h3>
        </div>
        <div className="checkBox">
          <input class="checkBox1" type="checkbox" name="checkbox" id="" />
        </div>
      </div>
      <div className="btn">
        <button @click="reserve()" className="reservebtn">Reserve Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomPage",
  methods: {
    reserve() {
      this.$router.push({ path: "/", replace: true });
    },
  },
};
</script>

<style>
.page {
  background-image: url(https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  padding: 5vh;
  overflow-y: hidden;
  background-size: cover;
}
.roomPage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.reservebtn:hover{
    background-color: black;
    border: 2px solid white;
    color: #fff;
}
.roomDetails {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 30vw;
}

.checkBox1 {
  width: 20px;
  height: 20px;
}
.reservebtn{
    border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  width:64vh;
  font-size: larger;
}
</style>
