<template>
  <section class="container wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.7s" style="margin-top:0px">
    <div class="explorerow">
      <div class="explorerowinner">
        <div class="row row_head">
          LOCK TIMELINE (newEst to oldest)
        </div>
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
  data: function() {
    return {
      datarow: [],
    };
  },
  mounted: function() {
    for (var i = 0; i < 10; i++) {
        this.datarow.push("Dfg")
    }
    console.log("DFgf");
  },
};
</script>

<style scoped>
.explorerow {
  background-color: #081a2e;
  border-radius: 16px;
  padding: 20px 22px;
  
}
.explorerowinner{
  margin: 10px 0;;
  max-height: 500px;
  overflow-y: scroll;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}
.row div {
  margin: 0 10px;
  text-align: center;
  text-transform: uppercase;
}
.row div:first-child {
  text-align: left;
}
.row div:last-child {
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

@media screen and (max-width: 768px) {
  .row{
    flex-direction:column
  }
  .row div{
    margin:10px 0
  }
}
</style>
