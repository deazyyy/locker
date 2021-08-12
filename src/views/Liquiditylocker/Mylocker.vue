<template>
  <div>
     <div
      class="heading wow fadeInDown mt-5"
      data-wow-duration="0.6s"
      data-wow-delay="0.3s"
    >
      <h3>
        LIQUIDITY LOCKER
      </h3>
      <div class="lion">
      <Lionanimate/>
    </div>
    </div>
    <LockerBox/>
    <div class="container lockersrow wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.9s">
      <Lockers name="LOCK LIQUIDITY" btnname="LOCK" routername="liquiditylocker"/>
      <Lockers name="LOCK TOKENS" btnname="LOCK" routername="tokenlocker"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LockerBox from "./components/LockerBox.vue";
import Lockers from "@/components/Lockers.vue";
import Lionanimate from "@/components/Lionanimate.vue";
export default {
  name: "Liquiditylocker",
  components: {
    LockerBox,
    Lockers,
    Lionanimate
  },
};
</script>

<style scoped>
.lion{
    max-width: 150px;
    margin: 0 auto;
    margin-top: -10px;
    margin-bottom: -36px;
    display: block;
}
</style>
