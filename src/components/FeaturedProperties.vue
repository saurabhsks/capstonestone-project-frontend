<template>
    <div className="fp">
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Silver Spoon</span>
          <span className="fpCity">Ranchi</span>
          <span className="fpPrice">Starting from $60</span>
          <div className="fpRating">
            <button>8.5</button>
            <span>Awesome</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Jaikedaar Hotel</span>
          <span className="fpCity">Indore</span>
          <span className="fpPrice">Starting from $100</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://i0.wp.com/kernigkrafts.com/wp-content/uploads/2020/04/Atmosphere-Maharana-Pratap-Nagar-Bhopal-1-4.jpg?w=960&ssl=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Atmosphere-Premium Hotel</span>
          <span className="fpCity">Bhopal</span>
          <span className="fpPrice">Starting from $99</span>
          <div className="fpRating">
            <button>8.7</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Flying Kitchen</span>
          <span className="fpCity">Ranchi</span>
          <span className="fpPrice">Starting from $105</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Amazing</span>
          </div>
        </div>
      </div>
</template>

<script>
export default{
    name:"FeaturedProperties"
}
</script>

<style scoped>
.fp {
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin:auto;
    
  }
  
  .fpItem{
    flex: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .fpImg{
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .fpName{
    color: #333;
    font-weight: bold;
  }
  
  .fpCity{
    font-weight: 300;
  }
  
  .fpPrice{
    font-weight: 500;
  }
  
  .fpRating>button{
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
  }
  
  .fpRating>span{
    font-size: 14px;
  }
</style>