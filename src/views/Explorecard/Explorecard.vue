<template>
  <div>
    <Head/>
    <Rows/>
    <div class="container lockersrow">
      <Lockers name="LOCK LIQUIDITY" btnname="LOCK" routername="liquiditylocker"/>
      <Lockers name="LOCK TOKENS" btnname="LOCK" routername="tokenlocker"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Rows from "./components/Rows.vue";
import Head from "./components/Head.vue";
import Lockers from "@/components/Lockers.vue";
export default {
  name: "Explorecard",
  components: {
    Rows,
    Head,
    Lockers,
  },
};
</script>

<style>

</style>
