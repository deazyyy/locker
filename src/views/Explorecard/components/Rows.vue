<template>
  <section class="container" style="margin-top:40px">
    <div class="explorerow">
      <div class="row row_head">
        LOCK TIMELINE
      </div>
      <div class="row">
        <div class="tokenouter">
          <img src="@/assets/icons/coin.svg" alt="Logo" /> Locked: OLYMPUS / BNB
        </div>
        <div>54%</div>
        <div>Locked: 02/02/21</div>
        <div>UnlockS: 02/02/21</div>
        <div>
          <div class="countdown">
            <div>COUNTDOWN</div>
            <div class="progress">
              <div class="bar" style="width:35%"></div>
            </div>
            <div class="time">20d - 6h - 3m- 4S</div>
          </div>
        </div>
        <div><button>VIEW TX</button></div>
      </div>
      <div class="row">
        <div class="tokenouter">
          <img src="@/assets/icons/coin.svg" alt="Logo" /> Locked: OLYMPUS / BNB
        </div>
        <div>54%</div>
        <div>Locked: 02/02/21</div>
        <div>UnlockS: 02/02/21</div>
        <div>
          <div class="countdown">
            <div>COUNTDOWN</div>
            <div class="progress">
              <div class="bar" style="width:35%"></div>
            </div>
            <div class="time">20d - 6h - 3m- 4S</div>
          </div>
        </div>
        <div><button>VIEW TX</button></div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue"
export default {
  name: "Rows",
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
@media screen and (max-width: 1150px) {
  .row div:last-child{
    margin:10px auto 0
  }
}
@media screen and (max-width: 768px) {
.row{
flex-direction:column
}
  .row div{
    margin:3px 0
  }
  .time div{
  margin:0
  }
}
</style>
