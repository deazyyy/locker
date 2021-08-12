<template>
  <section class="container" style="margin-bottom:20px">
      <div
      class="heading wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.3s"
    >
       <div class="title">
        LOCK: <img src="@/assets/icons/olympus.svg" alt="Logo" /> OLYMPUS / BNB<img src="@/assets/icons/bnb.svg" alt="Logo" />
      </div>

      <div class="back">
        <img src="@/assets/icons/back.png" alt="Logo" />BACK TO EXPLORE
      </div>
    </div>
    <Card/>
  </section>
  
</template>

<script>
// @ is an alias to /src
import Card from "./Card.vue"
export default {
  name: "Head",
  components:{
    Card
  }
};
</script>

<style scoped>

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
.back{
   display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 16px;
  font-weight: 600;
  font-size: 18px;
}
.back img{
  width: 16px;
  height: auto;
  margin-right: 8px;
}
</style>
