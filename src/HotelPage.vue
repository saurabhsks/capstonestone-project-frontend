<template>
  <div>
    <NavBar />
    <div className="hotelContainer">
      <p v-if="success">{{ currentHotel() }}</p>
      <div className="hotelWrapper">
        <button @click="bookNow()" className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">
          <b>{{ name }}</b>
        </h1>
        <div className="hotelAddress">
          <i class="fa-solid fa-location-dot"></i>

          <span
            ><b>{{ address }}</b></span
          >
        </div>
        <span className="hotelDistance">
          <b>Excellent location - {{ distance }} from center</b>
        </span>
        <span className="hotelPriceHighlight">
          <b>
            Book a stay over $ 114 at this property and get a coupon of $15</b
          >
        </span>
        <!-- <div className="hotelImages">  -->
        <div className="hotelImgWrapper">
          <!-- <div className="hotelImages">
            <img
              src="https://e0.pxfuel.com/wallpapers/280/149/desktop-wallpaper-interior-bedrom-ultra-luxurious-bedrooms-luxury-luxury-apartment.jpg"
              alt="img"
              className="hotelImg"
            />
          </div>
          <div className="hotelImages">
            <img
              src="https://e0.pxfuel.com/wallpapers/205/649/desktop-wallpaper-hotel-room-interior-design-luxury-hotel-apartments-modern-interior-design-classic-style-luxury-chandelier-for-with-resolution-high-quality.jpg"
              alt="img"
              className="hotelImg"
            />
          </div>
          <div className="hotelImages">
            <img
              src="https://images.squarespace-cdn.com/content/v1/52da9677e4b03d314575985a/1425864420308-OE1RDUWW6D8SENIP9PAD/image-asset.jpeg?format=1000w"
              alt="img"
              className="hotelImg"
            />
          </div>
          <div className="hotelImages">
            <img
              src="https://sandinmysuitcase.com/wp-content/uploads/2017/09/Dubai-International-Airport-Hotel.jpg"
              alt="img"
              className="hotelImg"
            />
          </div>
          <div className="hotelImages">
            <img
              src="https://w0.peakpx.com/wallpaper/460/608/HD-wallpaper-hotel-room-hotel-beautiful-art-house-romantic-black-yellow-luxury-rooms-bedrooms-decor-nice-beige-style.jpg"
              alt="img"
              className="hotelImg"
            />
          </div>
          <div className="hotelImages">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg"
              alt="img"
              className="hotelImg"
            />
          </div> -->
          <img
            src="https://e0.pxfuel.com/wallpapers/280/149/desktop-wallpaper-interior-bedrom-ultra-luxurious-bedrooms-luxury-luxury-apartment.jpg"
            alt="img"
            className="hotelImg"
          />
          <img
            src="https://e0.pxfuel.com/wallpapers/205/649/desktop-wallpaper-hotel-room-interior-design-luxury-hotel-apartments-modern-interior-design-classic-style-luxury-chandelier-for-with-resolution-high-quality.jpg"
            alt="img"
            className="hotelImg"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/52da9677e4b03d314575985a/1425864420308-OE1RDUWW6D8SENIP9PAD/image-asset.jpeg?format=1000w"
            alt="img"
            className="hotelImg"
          />
          <img
            src="https://sandinmysuitcase.com/wp-content/uploads/2017/09/Dubai-International-Airport-Hotel.jpg"
            alt="img"
            className="hotelImg"
          />
          <img
            src="https://w0.peakpx.com/wallpaper/460/608/HD-wallpaper-hotel-room-hotel-beautiful-art-house-romantic-black-yellow-luxury-rooms-bedrooms-decor-nice-beige-style.jpg"
            alt="img"
            className="hotelImg"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-preview.jpg"
            alt="img"
            className="hotelImg"
          />
        </div>
        <!-- </div> -->
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of City</h1>
            <p className="hotelDesc">
              Conveniently located 12 minutes from Birsa Munda Airport (IXR) and
              just seven minutes from the Ranchi Railway Station, the Radisson
              Blu Hotel Ranchi has a central position that makes regional travel
              a breeze. Referred to as the "City of Waterfalls," Ranchi is
              surrounded by natural beauty, boasting many noteworthy falls just
              a short drive away. If you're traveling on business, our hotel has
              easy access to nearby corporate offices and educational
              institutions such as IIM Ranchi, BIT Mesra, and Amity University
              Ranchi. Visit our travel desk to ask about our comprehensive
              packages for airport transfers, railway station pick-ups, and tips
              on must-see sights to ensure your stay in Ranchi is productive and
              pleasurable. When you're ready to unwind, kick back in one of our
              115 stylish rooms and suites, where you can take advantage of free
              Wi-Fi to keep in touch with loved ones at home or colleagues at
              the office. Corporate travelers will appreciate our grand meeting
              space, perfect for holding conferences and seminars for up to 600
              guests. After a long day in a training session or on a sightseeing
              tour, relax in our on-site spa or outdoor pool, and then enjoy an
              after-dinner cocktail at our stylish lobby bar.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of the city, this property has an
              excellent location score of 9.8!
            </span>
            <h2>${{ cheapestPrice }}</h2>
            <button @click="bookNow()" className="rbtn" >Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <MailList />
      <FooTer />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "./components/NavBar.vue";
import MailList from "./components/MailList.vue";
import FooTer from "./components/FooTer.vue";
export default {
  name: "HotelPage",
  components: {
    NavBar,
    MailList,
    FooTer,
  },
  data() {
    return {
      name: "",
      address: "",
      cheapestPrice: "",
      distance: "",
      success: true,
    };
  },
  methods: {
    async currentHotel() {
      this.success = false;
      const rooms = localStorage.getItem('rooms');
      console.log("Number of rooms in hotelPage from localStorage : ",rooms);
      setTimeout(() => {
        this.name = localStorage.getItem("name");
        this.address = localStorage.getItem("address");
        this.distance = localStorage.getItem("distance");
        this.cheapestPrice = rooms * localStorage.getItem("cheapestPrice");
      }, 400);
      
      const _id = localStorage.getItem('_id');
      const result = await axios.get(`http://localhost:5000/hotels/room/${_id}`);
      console.log("Data clicking on current hotel function *****");
    //   console.log(result.data);
      const hotelRooms = result.data;
      let room;
      for(let room in hotelRooms){
        console.log(hotelRooms[room].title);
        console.log(hotelRooms[room].price);
        console.log(hotelRooms[room].maxPeople);
        console.log(hotelRooms[room].desc);
        localStorage.setItem(`roomNumber${room}title` ,hotelRooms[room].title);
        localStorage.setItem(`roomNumber${room}price` ,hotelRooms[room].price);
        localStorage.setItem(`roomNumber${room}maxPeople` ,hotelRooms[room].maxPeople);
        localStorage.setItem(`roomNumber${room}desc` ,hotelRooms[room].desc);
      console.log("RoomLength is : ",room);
      localStorage.setItem('roomLength',Number.parseInt(room)+2);


      }
      console.log("After for loop ****");
      console.log(room);
    //   localStorage.setItem('roomsDetails',(result.data));
    //   const title= result.data[0].title;
    //   const desc= result.data[0].desc;
    //   const maxPeople= result.data[0].maxPeople;
    //   const price= result.data[0].title.price;
    //   localStorage.setItem('title' , title);
    //   localStorage.setItem('desc' , desc);
    //   localStorage.setItem('maxPeople' , maxPeople);
    //   localStorage.setItem('price' , price);

    },  

    bookNow(){
        this.$router.push({ path: "/login", replace: true });
    }
  },
};
</script>

<style>
.hotelContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.hotelWrapper {
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.hotelImgWrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.hotelImg {
  width: 32%;
  height: 40vh;
  margin: 2px;
  object-fit: cover;
  cursor: pointer;
}

.hotelTitle {
  font-size: 24px;
}

.hotelAddress {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.hotelDistance {
  color: #0890f0;
  font-weight: 500;
}

.hotelPriceHighlight {
  color: #2ee117c1;
  font-weight: 500;
}

/*.hotelImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } */

.bookNow {
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
.bookNow:hover{
    background-color: black;
    border: 2px solid white;
    color: #fff;
}
.hotelDetails {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.hotelDetailsTexts {
  flex: 3;
}

.hotelDesc {
  font-size: 14px;
  margin-top: 20px;
  text-align: justify;
}

.hotelDetailsPrice {
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hotelDetailsPrice > h1 {
  font-size: 18px;
  color: #555;
}
.hotelDetailsPrice > span {
  font-size: 14px;
}
.hotelDetailsPrice > h2 {
  font-weight: 300;
}

.hotelDetailsPrice > button {
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}
.rbtn:hover{
    background-color: black;
  border: 2px solid white;
  color: #fff;
}
</style>
