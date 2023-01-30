<template>
  <div className="searchItem">
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">{{ item.name }}</h1>
      <span className="siDistance">
        {{ item.distance }}
      </span>
      <span className="siTaxiOp">{{ item.city}}</span>
      <span className="siSubtitle">
        {{ item.desc }}
      </span>
      <span className="siFeatures">
        {{ item.fatured }}
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
       {{ item.address }} 
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>{{item.type}}</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">${{item.cheapestPrice}}</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button @click="seeRooms($event)" className="siCheckButton">See availability</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchItem",
  props: {
    item: Array,
  },
  methods:{
     seeRooms(){
      console.log("**** Event clicking on see availaility ***");
      console.log(this.item.name);
      console.log(this.item.address);
      console.log(this.item.cheapestPrice);
      console.log(this.item.distance);
      console.log(this.item._id);
      localStorage.setItem('name',this.item.name);
      localStorage.setItem('address',this.item.address);
      localStorage.setItem('cheapestPrice',this.item.cheapestPrice);
      localStorage.setItem('distance',this.item.distance);
      localStorage.setItem('_id',this.item._id);
      this.$router.push({ path: "/hotelpage", replace: true });
    }
  }
};
</script>

<style>
.searchItem {
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.siImg {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.siDesc {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
}

.siTitle {
  font-size: 30px;
  color: #0071c2;
}

.siDistance {
  font-size: 12px;
}

.siTaxiOp {
  font-size: 25px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
}

.siSubtitle {
  font-size: 12px;
  font-weight: bold;
}

.siFeatures {
  font-size: 12px;
}

.siCancelOp {
  font-size: 14px;
  color: #008009;
  font-weight: bold;
}

.siCancelOpSubtitle {
  font-size: 15px;
  color: #e4074d;
  font-weight: bold;
}

.siDetails {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.siRating {
  display: flex;
  justify-content: space-between;
}

.siRating > span {
  font-weight: 500;
}
.siRating > button {
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
}

.siDetailTexts {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.siPrice {
  font-size: 24px;
}

.siTaxOp {
  font-size: 12px;
  color: gray;
}

.siCheckButton {
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.siCheckButton:hover{
  background-color: black;
  border: 2px solid white;
  color: #fff;
}
</style>
