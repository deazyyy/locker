<template>
  <div class="card">
    <div class="upper">
      <h5>LOCK OVERVIEW</h5>
      <div class="circle_locked"> 
        <img src="@/assets/icons/lock_white.svg" alt="Logo" />
        <div class="perc">45%</div>
        <div>LOCKED</div>
      </div>
      <div class="title">
       <img src="@/assets/icons/olympus.svg" alt="Logo" /> OLYMPUS / BNB<img src="@/assets/icons/bnb.svg" alt="Logo" />
      </div>
      <div class="link">0x9d9AFFAc2175Ef541642035aB66f5FE7Df813851 <img src="@/assets/icons/copy.svg" alt="Logo" /> <img src="@/assets/icons/link.svg" alt="Logo" /></div>
      <div class="locked">LOCKED BY: 0x9d9AF.....f813851 <img src="@/assets/icons/copy.svg" alt="Logo" /> <img src="@/assets/icons/link.svg" alt="Logo" /></div>
    </div>
    <div class="bottom">
      <div class="row row1">
        LOCKED UNTIL: 
        <div class="gradient-text">12:41, 25th of May 2026 </div>
      </div>
      <div class="row row1">
        LOCK VALUE: 
        <div class="gradient-text">$113,908</div>
      </div>
      <div class="row mt-4">
        <div><img src="@/assets/icons/c1.png" alt="Logo" />LIQUIDITY LOCKED: </div>
        <div>113,908</div>
      </div>
      <div class="row">
        <div><img src="@/assets/icons/c2.png" alt="Logo" />CIRCULTING SUPPLY: </div>
        <div>113,908</div>
      </div>
      <div class="row">
        <div><img src="@/assets/icons/c3.png" alt="Logo" />TOTAL SUPPLY:</div>
        <div>113,908</div>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue"

export default {
  name: "Card",
};
</script>

<style scoped>



.card {
  background-color: #081a2e;
  border-radius: 16px;
  padding: 20px 40px;
  max-width: 550px;
  margin: auto;
}

.upper{
  text-align: center;
}
.upper h5{
  margin:0;
  font-weight: 600;
  font-size: 18px;
}
.circle_locked{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 200px;
  flex-direction: column;
  background-image: linear-gradient(-90deg, #3be0f3 0%, #385ffb 100%);
  font-weight: 600;
  margin: 30px auto;
   box-shadow: 0 0 30px 4px rgba(59, 224, 243, 0.4);
}
.circle_locked img{
  height: 26px;
  width: auto;
  margin-bottom: 4px;
}
.perc{font-size: 22px;}
.title{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
}
.title img{
  height: 40px;
  width: auto;
  margin: 0 8px;
}
.link, .locked{
  font-weight: 600;
  margin: 13px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link img, .locked img{
  margin-left: 10px;
  cursor: pointer;
  height: 20px;
  width: auto;
}
.row{
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
   font-size: 15px;
   margin: 14px 0;
   font-weight: 600;
}
.row img{
  display: inline-block;
  height: auto;
  width: 18px;
  margin-right: 12px;
}
.row1{
  font-size: 18px;
  margin: 5px 0;
}

.lion {
  height: 150px;
  margin: 0 auto;
  margin-top: -20px;
}

</style>
