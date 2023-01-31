<template>
  <div className="page">
    <div className="roomPage">
      <p v-if="flag">{{ hotelName() }}</p>
      <div className="hotelName">
        <h1>
          <b>{{ name }}</b>
        </h1>
      </div>
      <div v-for="room in roomArray" :key="room" className="roomDetails">
        <div className="room">
          <h2 className="title">Title-{{ room.title }}</h2>
          <h3 className="maxPeople">Capacity-{{ room.maxPeople }}</h3>
          <h3 className="price">Price- ₹{{ room.price }}</h3>
          <h4 className="desc">{{ room.desc }}</h4>
          <!-- <h3 className="desc">King Size bed,1 bathroom,balcony</h3> -->
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
  data() {
    return {
      flag: true,
      name: "Silver Spoon",
      roomArray: [],
    };
  },
  methods: {
    reserve() {
      this.$router.push({ path: "/", replace: true });
    },
    hotelName() {
      this.flag = false;
      this.name = localStorage.getItem("name");
      const roomLength = localStorage.getItem("roomLength");
      console.log(roomLength);

      for (let i = 0; i < roomLength - 1; i++) {
        let title = localStorage.getItem(`roomNumber${i}title`);
        let price = localStorage.getItem(`roomNumber${i}price`);
        let maxPeople = localStorage.getItem(`roomNumber${i}maxPeople`);
        let desc = localStorage.getItem(`roomNumber${i}desc`);
        let roomObj = {
          title,
          price,
          maxPeople,
          desc,
        };
        console.log(roomObj);
        this.roomArray.push(roomObj);
      }
      const roomNumber1title = localStorage.getItem("roomNumber1title");
      console.log(this.roomArray);
      console.log(roomNumber1title);
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

.reservebtn:hover {
  background-color: black;
  border: 2px solid white;
  color: #fff;
}
.roomDetails {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(6, 6, 6, 0.5);
  width: 20%;
  font-size:80%;
  border-radius: 10px;
  border:1px solid rgba(255,255,255,0.3);
  box-shadow:2px 2px 15px
  rgba(0,0,0,0.3);
  color:#fff;
  padding-left: 6%;
  padding-right: 6%;
  

}

.checkBox1 {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.reservebtn {
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  width: 64vh;
  font-size: larger;
}
</style>
