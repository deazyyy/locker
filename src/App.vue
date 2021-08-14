<template>
  <div>
    <Navbar/>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components:{
    Navbar,
    Footer
  }
};
</script>
<style>
* {
  font-family: "Open Sans", sans-serif;
  text-decoration:none !important
}
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #081422;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #081422;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #475a6f;
}
input:focus{
  outline:none
}
.timepicker [data-action=togglePeriod]{
  background: #2F3D4D !important;
  min-width: unset !important
}
a{
  text-decoration: none;
  color:#fff
}
body {
 
  font-family: "Open Sans", sans-serif;
  color: #fff;
  margin: 0;
  background: url('./assets/homebg.png');
   background-color: #1a293e;
       background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
}
section.container {
  margin-top: 50px;
  margin-bottom: 50px;
}
 

.gradient-text {
    background: linear-gradient(to right, #3345f5 0%, #3bc9f5 25%, #3345f5 50%, #3bc9f5 75%, #3345f5 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700 !important;
   background-size: 400%;
  animation: hue 10s infinite linear;
}
@-webkit-keyframes hue {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
.gray {
  color: #97a0ad;
}

.container {
  max-width: 1600px;
  margin: auto;
}
.heading {
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
}
.heading h3 {
  font-size: 22px;
}
.heading h4 {
  font-size: 20px;
}



.gradient-border {
  background: linear-gradient(to right, #3345f5 0%, #3bc9f5 100%) !important;
  border-radius: 50px;
  padding: 14px;
  position: relative;
  z-index: 1;
}
.gradient-border::before {
  position: absolute;
  content: "";
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
 border-radius: 50px;
  background-color: #273f59;
  z-index: -1;
}




.lockersrow{
  display: flex;
  justify-content: space-between;
}
.lockersrow .locker:nth-child(1){
  margin-left: 0;
}
.lockersrow .locker:nth-child(2){
  border: 4px solid #3781f5;
  box-shadow:0px 0px 15px 10px rgba(55, 129, 245, 0.2);
}
.lockersrow .locker:nth-child(2) button{
 background-color: #3781f5;
}
.lockersrow .locker:last-child{
  border: 4px solid #39bbf5 !important;
  box-shadow:0px 0px 15px 10px rgba(57, 187, 245, 0.2) !important;
}
.lockersrow .locker:last-child button{
 background-color: #39bbf5 !important;
}

.lockersrow .locker:last-child{
  margin-right: 0;
}


@media screen and (max-width: 768px) {
  .lockersrow {
   flex-direction: column;
  }
  .locker{
    margin: 20px 0 0 !important;
  }
}
@media screen and (max-width: 650px) {
  .container {
    width: 86%;
    margin: auto;
  }
}
@media screen and (max-width: 500px) {
  .container {
    width: 95%;
    margin: auto;
  }
}
</style>
