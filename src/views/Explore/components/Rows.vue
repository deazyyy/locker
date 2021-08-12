<template>
  <section style="margin-top:0px" class="container wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.6s">
    <div class="explorerow">
      <div class="row row_head">
        <div>NAME</div>
        <div>LIQUIDITY LOCKED</div>
        <div>TOKEN PRICE</div>
        <div>VALUE LOCKED</div>
        <div>NEXT UNLOCK</div>
        <div>
          <button class="gradient-border">
            LOCKED <i class="fas fa-angle-down"></i>
   
          </button>
        </div>
      </div>
      <div class="explorerowbody">
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

import Rowsingle from "./Rowsingle.vue"
export default {
  name: "Rows",
components:{
    Rowsingle
  },
};
</script>

<style scoped>
.explorerow {
  background-color: #081a2e;
  border-radius: 16px;
  padding: 20px 22px;
  /* min-width: 1300px;
    overflow: scroll; */
}
.explorerowbody {
  max-height: 500px;
  overflow-y: scroll;
  padding-right: 10px;
  margin-top: 10px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}
.row div {
  width: 16.66%;
  text-align: center;
}
.row div:first-child {
  text-align: left;
}
.row div:last-child {
  text-align: right;
}
.row_head {
  border-bottom: 2px solid #4c5d74;
  padding-bottom: 12px;
  margin-bottom: 12px;
   padding-left: 14px;
    padding-right: 30px;
}
.row_head button:before {
  background: #081a2e;
  
}
.red_time {
  height: 22px;
  width: auto;
  margin-left: 6px;
}

.toknname h3 {
  display: flex;
  align-items: center;
}
.toknname img {
  height: 24px;
  margin: 0 8px;
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
.row_head .gradient-border {
  display: flex;
  justify-content: center;
  align-content: center;
}
.row_head .gradient-border i {
  margin-left: 6px;
  position: relative;
  top: 4px;
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

@media screen and (max-width: 1200px) {
  .row {
    flex-direction: column;
  }
  .row div{
    width:100%;
    text-align:center !important;
    margin:5px 0
  }
  .row button{
  margin:auto !important
  }
  .toknname h3{
  justify-content:center;
  }
}
</style>
