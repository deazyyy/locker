<template>
  <section class="container wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.3s">
    <div class="heading">
      <h3>
        the Locker of ananke
      </h3>
      <h4>THE SAFEST PLACE TO SECURE YOUR TOKENS & Liquidity</h4>
    </div>
    <div class="gatewayrow">
      <div class="card-header" data-wow-duration="0.6s" data-wow-delay="0.9s">
        <div class="card-header_img">
          <img src="@/assets/c3.svg" alt="Logo" />
        </div>
        <div class="card-header_center">
          <h2 class="gradient-text">946</h2>
        </div>
        <h3 class="card-header_btm">Total projects locked</h3>
      </div>
      <!-- <img
        src="@/assets/lion.png"
        alt="Logo"
        data-wow-duration="0.6s"
        data-wow-delay="0.75s"
        class="lioncenter"
      /> -->
      <div class="lioncenter">
          <Lionanimate/>
      </div>

      <div class="card-header" data-wow-duration="0.6s" data-wow-delay="0.75s">
        <div class="card-header_img">
          <img src="@/assets/c4.svg" alt="Logo" />
        </div>
        <div class="card-header_center">
          <h2 class="gradient-text">7 years 45 days</h2>
        </div>
        <h3 class="card-header_btm">Total current lockup time</h3>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Lionanimate from "@/components/Lionanimate.vue";
export default {
  name: "Gateway",
  components:{
    Lionanimate
  }
};
</script>

<style scoped>
.cardRow {
  display: flex;
  justify-content: center;
  /* margin:  0 -8px; */
}
/* .col-md-3{
    margin: 0 10px;
} */
.gatewayrow {
  display: flex;
  justify-content: space-between;
}
.info {
  color: #bfc3c9;
  text-align: center;
  font-size: 13px;
  margin-top: 8px;
}
.col-md-3 .btn-main {
  width: auto;
}
.card-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #081a2e;
  border-radius: 20px;
  padding: 16px 20px;
  align-items: center;
  text-align: center;
  margin-bottom: 14px;
  /* height: 100%; */
  /* min-height: 210px; */
  position: relative;
  max-width: 420px;
  width: 100%;
  height: fit-content;
  margin-top: 180px;
}
.card-header_img {
  height: 70px;
  width: 70px;
  background: linear-gradient(to right, #3345f5 0%, #3bc9f5 100%);
  border-radius: 50%;
  padding: 14px;
  position: relative;
  z-index: 1;
}
.card-header_img::before {
  position: absolute;
  content: "";
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  top: 5px;
  left: 5px;
  border-radius: 50%;
  background-color: #273f59;
  z-index: -1;
}
.card-header_img img {
  width: 100%;
  height: auto;
}
.card-header h2,
.card-header h3 {
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.4pt;
}
h3 {
  font-size: 18px;
}
h2 {
  font-size: 24px !important;
}
.lioncenter {
  width: 100%;
  height: auto;
  max-width: 620px;
}
.card-header_center {
  margin: 7px 0;
}

/* second card */
.approve_ip {
  margin: 8px 0 14px;
}
.ipOuter input {
  width: 100% !important;
  padding-left: 14px;
  padding-right: 30px;
  position: relative;
  width: 110px;
  height: 45px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  transition: 0.5s;
  color: #ffff;
  font-size: 13px;
  border-radius: 30px;
  background: #39475c;
  border: 2px solid #6f7c8e;
  outline: none;
}
.ipOuter input:focus {
  border: 2px solid #6f7c8e;
  outline: none;
}
.ipOuter input:hover {
  background: #39475c;
  border: 2px solid #6f7c8e;
}
.ipOuter {
}
.ipOuter {
  position: relative;
}
.ipOuter span {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-48.5%);
  font-size: 14px;
}
.ip_values {
  display: flex;
  justify-content: space-between;
  margin: 2px 14px 6px;
}
.ip_values {
}
.ip_values a {
  color: #fff;
  background: transparent;
  padding: 0;
}
.ip_values .active {
  background: transparent;
  color: #f7c347;
  font-weight: 700;
}
.ip_values span {
  font-size: 12px;
}

@media screen and (max-width: 1400px) {
  .lioncenter{
    margin: 0 30px;
    max-width: 300px;
  }
  .card-header{
    margin-top: 80px;
  }
  h2 {
    font-size: 20px !important;
  }
  h3 {
    font-size: 15px !important;
  }
}

@media screen and (max-width: 991px) {
  .lioncenter{
    max-width: 280px;
  }
  h2 {
    font-size: 20px !important;
  }
  h3 {
    font-size: 15px !important;
  }
}
@media screen and (max-width: 850px) {
  h2 {
    font-size: 18px !important;
  }
  h3 {
    font-size: 14px !important;
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 18px !important;
  }
  h3 {
    font-size: 14px !important;
  }
  .col-md-3:not(:last-child) {
    margin-bottom: 50px;
  }
  .gatewayrow{
    flex-direction: column;
  }
  .card-header{
    max-width: unset;
    order:2;
    margin-top: 0;
  }
  .lioncenter{
    order:1;
    display: block;
    margin: auto;
    max-width: 200px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 650px) {
  h2 {
    font-size: 18px !important;
  }
  h3 {
    font-size: 14px !important;
  }
  
}
</style>
