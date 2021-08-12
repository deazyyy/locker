<template>
  <section class="container wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.5s" style="margin-bottom:20px">
      <div
      class="heading"
    >
      <h3>
        MY LOCKS
      </h3>
    </div>
    <!-- <img src="@/assets/lion.png" alt="Logo" class="lion" /> -->
    <div class="lion">
      <Lionanimate/>
    </div>
  </section>
  
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue"
import Lionanimate from "@/components/Lionanimate.vue";
export default {
  name: "Head",
  components:{
    Lionanimate
  }
};
</script>

<style scoped>

.lion{
    max-width: 150px;
    margin: 0 auto;
    margin-top: -40px;
    margin-bottom: -20px;
    display: block;
}

</style>
