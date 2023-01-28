<template>
<div>
    <NavBar/>
    <div className="hotelContainer">
        <div className="hotelWrapper">
            <h1 className="hotelTitle">GrandHotel</h1>
            <div className="hotelAddress">

            </div>
        </div>

    </div>

</div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default{
    name:"HotelPage",
    components:{
        NavBar
    }
    
}
</script>

<style>

</style>