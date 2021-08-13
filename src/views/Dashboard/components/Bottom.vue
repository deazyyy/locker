<template>
  <section class="container bottomcont">
    <div class="row">
      <div class="col-md-6 wow fadeInLeft"
        data-wow-duration="0.6s"
        data-wow-delay="1.6s">
        <div class="infoBox">
          <section>
            <div class="gradient-text">
              THE SAFER AND SIMPLER <br/> CRYPTO LOCKING PLATFORM
            </div>
            <p>
              The Locker Of Ananke makes it easy for any individual, project or community to lock up tokens and/or liquidity with full control over your funds and settings. Help make De-Fi a safer place and build trust with your community by locking your tokens today.
            </p>
          </section>
          <section>
            <div class="gradient-text">
              HOW TO USE
            </div>
            <p>
                <span>-</span> Connect your wallet<br/>
                <span>-</span> Head over to the type of locking you would liek to do (token or liquidity)<br/>
                <span>-</span> Enter your token or liquidity contract code<br/>
                <span>-</span> Input the quanttiy of tokens you would like to lock<br/>
                <span>-</span> Select the end date for your lockup<br/>
                <span>-</span> Hit “Lock”<br/>
                <span>-</span> Congratulations your funds are new securely locked<br/>
                <span>-</span> To Redeem, wait until your timeframe is up. Head back to your locker and hit “Redeem”
            </p>
          </section>
          <section>
            <div class="gradient-text">
              LOW FEE: USE ANY OF OUR LOCKS FOR <br/>
              THE INDUSTRY LOW FEE OF 0.5%
            </div>
          </section>
        </div>
      </div>
      <div class="col-md-6  wow fadeInRight"
        data-wow-duration="0.6s"
        data-wow-delay="1.6s">
        <div class="zeuslogoOuter">
          <img src="@/assets/zeus.png" alt="Logo" class="zeuslogo" />
        </div>
      </div>
    </div>
    <!-- <pseudo-window
			@resize.passive="onResize" /> -->
  </section>
  
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue";
// import PseudoWindow from 'vue-pseudo-window';
export default {
  name: "Bottom",
  // components: {
	// 	PseudoWindow
	// },
  mounted: function() {
        document.querySelector(".zeuslogo").style.maxHeight = document.querySelector(".infoBox").offsetHeight +"px"
    },
  methods: {
		onResize() {
      let height = document.querySelector(".infoBox").offsetHeight
      document.querySelector(".zeuslogo").style.maxHeight = height+"px";
		}
	}
};
</script>

<style scoped>
.infoBox {
  border-radius: 16px;
  background-color: #081a2e;
  padding: 30px 20px;
  line-height: 1.75;
}
.gradient-text {
  text-align: center;
  font-size:25px;
}
section p{
  font-size:18px;
  text-align:center
}
section p span{
  color: #3782f5;
}
.holdersBx {
  display: flex;
  align-items: center;
  font-size: 22px;
  background: #081a2e;
  padding: 20px 40px;
  vertical-align: middle;
  justify-content: center;
  border-radius: 16px;
}
.holdersBx .gradient-text {
  font-size: 40px;
  margin: 0 30px;
}

.zeuslogoOuter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.zeuslogo {
  height: 100%;
  width: auto;
  max-height: 80vh;
  max-width: 90%;
}
.bottomcont {
  position: relative;
  padding-top: 60px;
}

.bottomcont::after {
  position: absolute;
  content: "";
  width: 40%;
  height: 4px;
  right: 0;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  background: #4c5d74;
  border-radius: 3px;
  z-index: -1;
}
@media screen and (max-width: 1100px) {
  .bottomcont .row{
    flex-direction: column;
  }
  .bottomcont .col-md-6{
    max-width: 100%;
  }
  .zeuslogo{
    max-width: 30vw;
  }
  .zeuslogoOuter{
    margin-top: 40px;
  }
}
@media screen and (max-width: 768px) {
  /* .zeuslogoOuter {
    display: none !important;
  } */
  .zeuslogoOuter{
    margin-top: 60px;
  }
  .info div {
    font-size: 14px;
  }
  /* .col-md-6 {
    padding: 0;
  } */
  /* .infoBox {
    border-radius: 0 !important;
  }
   */
}
</style>
