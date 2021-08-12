<template>
  <div class="lionOuter">

      <lottie-player 
            src="https://assets9.lottiefiles.com/packages/lf20_enrsedre.json"
            background="transparent"
            speed="0.4" loop autoplay >
          </lottie-player>
    <!-- <div class="lionclick" v-if="isclicked">
      <lottie-player 
        src="https://assets3.lottiefiles.com/packages/lf20_q6shrc0a.json"
        background="transparent"
        speed="0.5" loop autoplay >
      </lottie-player>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue";
export default {
  name: "Lionanimate",
};
</script>

<style>
.lionOuter{
  cursor: pointer;
  position: relative;
  width: 100%;
  height: auto;
}

</style>
