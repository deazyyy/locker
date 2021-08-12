<template>
  <div class="row">
    <div class="toknname rw-inner">
      <h3>
        <img src="@/assets/icons/olympus.svg" alt="Logo" /> OLYMPUS / BNB<img
          src="@/assets/icons/bnb.svg"
          alt="Logo"
        />
      </h3>
    </div>

    <div class="rw-inner">20,098,999.95 <span>( 20.10% )</span></div>
    <div class="rw-inner">$197.83</div>
    <div class="rw-inner">$451,814.83</div>
    <div class="rw-inner">
      <div class="countdown rw-inner">
        <div class="time">
          <Timer
            starttime="Nov 5, 2021 15:37:25"
            endtime="Nov 8, 2022 16:37:25"
            trans='{  
         "day":"D",
         "hours":"h",
         "minutes":"m",
         "seconds":"s",
         "expired":"Expired.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
          ></Timer>
        </div>
        <div class="progress">
          <div class="bar" style="width:35%"></div>
        </div>
      </div>
    </div>
    <div class="rw-inner"><button>VIEW</button></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue"
import Timer from "@/components/Timer.vue";
export default {
  name: "Rowsingle",
  components: {
    Timer,
  },
};
</script>

<style scoped>
.toknname h3 {
  display: flex;
  align-items: center;
}
.toknname img {
  height: 24px;
  margin: 0 6px;
}
.explorerow {
  background-color: #081a2e;
  border-radius: 16px;
  padding: 20px 20px;
  max-height: 500px;
  overflow-y: scroll;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}
.row .rw-inner {
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  width: 16.66%;
}
.row .rw-inner:first-child {
  text-align: left;
}
.row .rw-inner:last-child {
  text-align: right;
}
.row_head {
  padding-bottom: 12px;
  margin-bottom: 0px;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
     
}

button {
  background: #3a546b;
  border: 0;
  outline: 0;
  border-radius: 18px;
  display: block;
  margin: 0;
  margin-left: auto;
}
h3 {
  margin: 0;
  font-size: 18px;
  text-align-last: left;
}
div {
  font-weight: 600;
}
span {
  color: #399ff7;
}
.row_head {
  margin: 0;
}
.row_head div {
  font-weight: 600;
  font-size: 16px;
}
.row_head button {
  padding: 4px;
  background: transparent;
  position: relative;
}

.countdown {
  color: #5c6875;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
}
.countdown div {
  text-align: center;
  margin: 0;
  font-size: 13px;
  text-transform: uppercase;
}
.progress {
  padding: 0;
  width: 90%;
  height: 10px;
  overflow: hidden;
  background: #3a546b;
  border-radius: 12px;
  margin: 5px 0 !important;
  min-width: 140px;
}

.tokenouter {
  display: flex;
  align-items: center;
}

.tokenouter img {
  margin-right: 10px;
  height: 30px;
}
.bar {
  position: relative;
  float: left;
  min-width: 1%;
  height: 100%;
  background: linear-gradient(-90deg, #3be0f3 0%, #385ffb 100%);
  margin: 0 !important;
  border-radius: 12px;
}

.time {
  display: flex;
}

@media screen and (max-width: 1200px) {
  .row .rw-inner {
    margin: 3px 0;
    width:100%
  }
  .time div {
    margin: 0;
  }
  .toknname h3{
    justify-content: center;
  }
  .rw-inner button{
    margin:auto
  }
}
</style>
