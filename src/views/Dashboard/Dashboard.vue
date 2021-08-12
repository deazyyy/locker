<template>
  <div>
    <Gateway />
    <div class="container lockersrow wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.7s">
      <Lockers name="explore locks" btnname="explore" routername="explore"/>
      <Lockers name="LOCK LIQUIDITY" btnname="LOCK" routername="liquiditylocker"/>
      <Lockers name="LOCK TOKENS" btnname="LOCK" routername="tokenlocker"/>
    </div>
    <Bottom />
  </div>
</template>

<script>
// @ is an alias to /src
import Gateway from "./components/Gateway.vue";
import Lockers from "@/components/Lockers.vue";
import Bottom from "./components/Bottom.vue";
export default {
  name: "Dashboard",
  components: {
    Gateway,
    Lockers,
    Bottom,
  },
};
</script>

<style>
@media screen and (max-width: 768px) {

  .lockersrow{
    flex-direction: column;
  }
  .lockersrow .locker{
    margin:0;
    margin-bottom: 20px;
  }


}
</style>
