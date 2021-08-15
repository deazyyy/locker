<template>
  <section class="container wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.7s" style="margin-top:0px">
    <div class="lockerbx">
      <h3 class="gradient-text">CREATE NEW LIQUIDITY LOCK</h3>
      <div class="token_address">
        <input placeholder="ENTER LIQUIDITY PAIR ADDRESS" />
        <i class="fas fa-search"></i>
      </div>
      <div class="locktokens">
        <h4>LOCK LP TOKENS AMOUNT</h4>
        <div class="range-slider2">
          <input
            class="range-slider2__range"
            type="range"
            value="20"
            min="0"
            max="100"
          />
          <span class="range-slider2__value">0</span>
        </div>
        <input placeholder="0" />
      </div>
      <div class="token_address">
        <h4>UNLOCK DATE</h4>
        <input type='text' id='datetimepicker2' placeholder="28TH AUGUST, 2021 5:30PM"  />
      </div>

      <div class="fees">
        <h4>FEES</h4>
        <div class="feerow">
          <div class="round">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"></label>
          </div>
          <div class="cntnt">
            PAY FEES IN OLYMPUS + 0.5% LP <span>(3,234,020 + 0.005 Token)</span>
          </div>
        </div>
        <div class="feerow">
          <div class="round">
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2"></label>
          </div>
          <div class="cntnt">
            PAY FEES IN OLYMPUS + 0.5% LP <span>(3,234,020 + 0.005 Token)</span>
          </div>
        </div>
      </div>

      <div class="info">
        Once tokens are locked they cannot be withdrawn under any circumstance
        untiil the timer has finished, by locking you agree and understand this
        requirment
      </div>

      <div class="btnOuter">
          <a class="btns approve mr-2">
              APPROVE LP TOKENS
          </a>
          <a class="btns gradient-border ml-2">
              LOCK
          </a>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
const $ = require('jquery')
window.$ = $;
export default {
  name: "LockerBox",
  mounted: function() {
    var rangeSlider = function() {
      var slider = $(".range-slider2"),
        range = $(".range-slider2__range"),
        value = $(".range-slider2__value");

      slider.each(function() {
        value.each(function() {
          var value = $(this)
            .prev()
            .attr("value");
          $(this).html(value + "%");
        });

        range.on("input", function() {
          $(this)
            .next(value)
            .html(this.value + "%");
        });
      });
    };

    rangeSlider();
    
  },
  // methods:{
  //   function () {
  //       $('#datetimepicker2').datetimepicker();
  //   }
  // }
  
};
</script>

<style scoped>
.range-slider2 {
  margin: 0px 0 16px 0;
}

.range-slider2 {
  width: 100%;
}


.range-slider2__range {
  -webkit-appearance: none;
  width: calc(100% - (73px));
  height: 10px;
  border-radius: 5px;
  background: -webkit-gradient(linear, right top, left top, from(#3345f5), to(#3bc9f5));
  background: -o-linear-gradient(right, #3345f5 0%, #3bc9f5 100%);
  background: linear-gradient(to left, #3345f5 0%, #3bc9f5 100%);
  outline: none;
  padding: 0;
  margin: 0;
  border:0
}
.range-slider2__range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-in-out;
  transition: background 0.15s ease-in-out;
}
.range-slider2__range::-webkit-slider-thumb:hover {
  background: #3bc9f5;
}
.range-slider2__range:active::-webkit-slider-thumb {
  background: #3bc9f5;
}
.range-slider2__range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  -moz-transition: background 0.15s ease-in-out;
  transition: background 0.15s ease-in-out;
}
.range-slider2__range::-moz-range-thumb:hover {
  background: #fff;
}
.range-slider2__range:active::-moz-range-thumb {
  background: #fff;
}
.range-slider2__range:focus::-webkit-slider-thumb {
  -webkit-box-shadow: 0 0 0 3px #fff, 0 0 0 6px #fff;
          box-shadow: 0 0 0 3px #fff, 0 0 0 6px #fff;
}

.range-slider2__value {
  display: inline-block;
  position: relative;
  width: 60px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: #2c3e50;
  padding: 5px 10px;
  margin-left: 8px;
}
.range-slider2__value:after {
  position: absolute;
  top: 8px;
  left: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #2c3e50;
  border-bottom: 7px solid transparent;
  content: "";
}

::-moz-range-track {
  background: transparent;
  border: 0;
}

input::-moz-focus-inner,
input::-moz-focus-outer {
  border: 0;
}
/* input[type="range"] {
    background: transparent;
} */


.lockerbx {
  background-color: #081a2e;
  border-radius: 16px;
  padding: 20px 22px 36px 22px;
  text-align: center;
  width: 60%;
  margin: auto;
}
input {
  background: #2f3d4d;
  border-radius: 14px;
  border: 2px solid #6e7b8e;
  width: 100%;
  padding: 10px 8px;
  color: #fff;
}
input:focus{
  outline: none;
}
input::placeholder {
  color: #fff;
  text-align: center;
  font-weight: 600;
}

.locktokens {
  margin: 24px 0;
}
.lockerbx h4 {
  font-size: 16px;
  font-weight: 600;
}
.locktokens,
.token_address {
  margin-top: 32px;
  position: relative;
}
.token_address .fas{
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}
.fees {
  margin-top: 32px;
}
.feerow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px 0;
}
.cntnt {
  margin-left: 40px;
  margin-top: 5px;
}
.round {
  position: relative;
}

.round label {
  background-color: transparent;
  border: 3px solid #6f7b8d;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #6f7b8d;
  border-color: #6f7b8d;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
.feerow span {
  color: #3aa3f7;
}

.info {
  color: #68737f;
  font-size: 14px;
  margin: 20px auto;
      width: 80%;
    max-width: 500px;
}

.btnOuter{
    display: flex;
    justify-content: space-between;
}
.btnOuter .approve{
    background: linear-gradient(-90deg, #3be0f3 0%, #385ffb 100%);
}
.btns{
    font-size: 18px;
    font-weight: 700;
    padding: 14px 24px;
    border-radius: 12px;
    width: 100%;
    cursor: pointer;
        display: flex;
    align-items: center;
    justify-content: center;
}

.btnOuter .gradient-border::before{
    border-radius: 12px;
    background: #081a2e;
}


@media screen and (max-width: 991px) {
  .lockerbx{
    width: 80%;
  }
}
@media screen and (max-width: 768px) {
  .lockerbx{
    width: 100%;
  }
  .btnOuter{
  flex-direction:column
  }
  .btns{
  margin:0 !important
  }
  .btnOuter .gradient-border{
  margin-top:14px !important
  }
  .feerow span{
    display: block;
  }
}
</style>
