<template>
  <div class="locker">
    <h3>{{name}}</h3>
    <router-link :to="{path: '/' + routername}"><button>{{btnname}}</button></router-link>
  </div>  
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue";
export default {
  name: "Lockers",
  props: {
    name: String,
    btnname:String,
    routername:String
  },
};
</script>

<style>
.locker{
  border-radius: 18px;
  background-color: #081a2e;
  padding: 20px;
  width: 100%;
  border: 4px solid #3345f5;
  box-shadow:0px 0px 15px 10px rgba(51, 69, 245, 0.2);
  margin: 0 20px;
  /* max-width: 420px; */
}
h3{
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}
button{
  border-radius: 20px;
  background: #3345f5;
  border: 0;
  padding: 7px 20px;
  display: block;
  margin: auto;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  min-width: 130px;
  transition: all 0.5s ease;
  /* background-size: 50%; */
  position: relative;
}
/* button:hover{
  background: linear-gradient(145deg, #3345f5, #3bc9f5);
  background-size: 100%;
} */
button:hover,
button:focus {
  -webkit-animation: pulse 1s;
          animation: pulse 1s;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #1973bc;
  }
}
</style>
