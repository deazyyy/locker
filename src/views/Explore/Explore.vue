<template>
  <div>
    <Head />
    <Rows />

    <div class="container lockersrow wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.9s">
      <Lockers
        name="LOCK LIQUIDITY"
        btnname="LOCK"
        routername="liquiditylocker"
      />
      <Lockers name="LOCK TOKENS" btnname="LOCK" routername="tokenlocker" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Rows from "./components/Rows.vue";
import Head from "./components/Head.vue";
import Lockers from "@/components/Lockers.vue";
export default {
  name: "Explore",
  components: {
    Rows,
    Head,
    Lockers,
  },
};
</script>

<style>


/* .lockersrow{
  display: flex;
  justify-content: space-between;
}
.lockersrow .locker:nth-child(2){
  border: 4px solid #3781f5;
  box-shadow:0px 0px 15px 10px rgba(55, 129, 245, 0.2);
}
.lockersrow .locker:nth-child(2) button{
 background-color: #3781f5 !important;
}
.lockersrow .locker:nth-child(3){
  border: 4px solid #39bbf5;
  box-shadow:0px 0px 15px 10px rgba(57, 187, 245, 0.2);
}
.lockersrow .locker:nth-child(3) button{
 background-color: #39bbf5;
} */
</style>
