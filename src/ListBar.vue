<template>
  <NavBar />
  <!-- <HeaDer/> -->
  <div className="flex">
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <!-- <div ListName="listResult"> -->
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input v-model="destination" type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in Date From</label>
            <input v-model="startDate" type="date" />
            <label>Check-in Date To</label>
            <input v-model="endDate" type="date" />
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input
                  v-model="minPrice"
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input
                  v-model="maxPrice"
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <!-- <div className="lsOptionItem">
              <span className="lsOptionText">Adult</span>
              <input
                type="number"
                min={1}
                className="lsOptionInput"
                placeholder={options.adult}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Children</span>
              <input
                type="number"
                min={0}
                className="lsOptionInput"
                placeholder={options.children}
              /> -->
              <!-- </div> -->
              <div className="lsOptionItem">
                <span className="lsOptionText">Rooms</span>
                <input
                  v-model="rooms"
                  type="number"
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>

              <button @click="hotelByCity()" className="btnSearch">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="listResult">
      <SearchItem :item="item" v-for="item in this.doc" :key="item"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./components/NavBar.vue";
// import HeaDer from './components/HeaDer.vue'
import SearchItem from "./components/SearchItem.vue";
export default {
  name: "ListBar",
  mounted() {
    this.getAllhotels();
  },
  methods: {
    async getAllhotels() {
      try {
        //http://localhost:5000/auth/login
        const res = await axios.get(`http://localhost:5000/hotels/city`);
        console.log(res.data.data[0].name);
        console.log(res.data.data[0].city);
        console.log(res.data.data[0].address);
        console.log(res.data.data[0].cheapestPrice);
        this.doc = res.data.data;
        console.log("************");
        console.log(this.doc.target);
      } catch (e) {
        console.log(e);
      }
    },

    async hotelByCity() {
      try {
        //http://localhost:5000/auth/login
        localStorage.setItem('rooms',this.rooms);
      console.log("No of rooms : " ,this.rooms);
        const res = await axios.get(`http://localhost:5000/hotels/city/${this.destination}`);
        console.log("Hotels by city *******");
        console.log(res.data.data);
        this.doc = res.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: {
    NavBar,
    //  HeaDer,
    SearchItem,
  },
  data() {
    return {
      doc: [],
      destination : '',
      rooms:''
    };
  },
  // methods: {
  //   async inputData() {
  //     console.log(this.destination);
  //     console.log(this.startDate);
  //     console.log(this.endDate);
  //     console.log(this.minPrice);
  //     console.log(this.maxPrice);
  //     console.log(this.rooms);
  //   },
  // },
};
</script>

<style>
.listContainer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-right: 2%;
  margin-left: 3%;
  width: 22%;
}

.listWrapper {
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
}

.listSearch {
  flex: 1;
  background-color: #8feb0ef9;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
}
.lsTitle {
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
}
.lsItem {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
}

.lsItem > label {
  font-size: 12px;
}

.lsItem > input {
  height: 30px;
  border: none;
  padding: 5px;
}
.lsItem > span {
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.lsOptions {
  padding: 10px;
}

.lsOptionItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
}

.lsOptionInput {
  width: 50px;
}

.btnSearch {
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
}
.flex {
  display: flex;
}
.listResult {
  flex: 3;
}
</style>
