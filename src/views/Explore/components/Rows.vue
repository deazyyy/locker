<template>
  <section style="margin-top:0px" class="container wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.6s">
    <div class="tokenrow wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.5s">
      <ul class="nav nav-pills">
        <li class="nav-item navitem1">
          <a class="nav-link active" data-toggle="pill" href="#lockedliquidity">
             <div class="tokenlocked tokenbx">
                <div class="card-header_img">
                    <img src="@/assets/icons/jug.png" alt="Logo" />
                </div>
                LOCKED LIQUIDITY
            </div>
            <div class="gradient-border tokenbx">
              LOCKED LIQUIDITY <div class="img"><img src="@/assets/icons/jug.png" alt="Logo" /></div>
            </div>
          </a>
        </li>
        <div class="lion">
            <Lionanimate/>
        </div>
        <li class="nav-item navitem1">
          <a class="nav-link" data-toggle="pill" href="#lockedtoken">
            <div class="gradient-border tokenbx">
              LOCKED TOKENS <div class="img"><img src="@/assets/icons/token.svg" alt="Logo" /></div>
            </div>
            <div class="tokenlocked tokenbx">
                <div class="card-header_img">
                    <img src="@/assets/icons/token.svg" alt="Logo" />
                </div>
                LOCKED TOKENS
            </div>
          </a>
        </li>
      </ul>
        
        
        
    </div>

    <div class="filter wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.3s">
        <h3 class="gradient-text">FILTER BY TOKEN</h3>
        <input placeholder="ENTER PAIR ADDRESS OR TOKEN NAME"/>
    </div>

    <div class="tab-content">
      <div class="tab-pane active" id="lockedliquidity">
<div class="explorerow">
      <div class="row row_head">
        <div>NAME</div>
        <div>LIQUIDITY LOCKED</div>
        <div>TOKEN PRICE</div>
        <div>VALUE LOCKED</div>
        <div>NEXT UNLOCK</div>
        <div>
          <button class="gradient-border">
            LOCKED <i class="fas fa-angle-down"></i>
   
          </button>
        </div>
      </div>
      <div class="explorerowbody">
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
      </div>
    </div>
      </div>
      <div class="tab-pane fade" id="lockedtoken">
        <div class="explorerow">
      <div class="row row_head">
        <div>NAME</div>
        <div>TOKEN LOCKED</div>
        <div>TOKEN PRICE</div>
        <div>VALUE LOCKED</div>
        <div>NEXT UNLOCK</div>
        <div>
          <button class="gradient-border">
            LOCKED <i class="fas fa-angle-down"></i>
   
          </button>
        </div>
      </div>
      <div class="explorerowbody">
        <Rowsingle/>
        <Rowsingle/>
        <Rowsingle/>
      </div>
    </div>
      </div>
    </div>
    
  </section>
</template>

<script>
// @ is an alias to /src

import Rowsingle from "./Rowsingle.vue"
import Lionanimate from "@/components/Lionanimate.vue";
export default {
  name: "Rows",
components:{
    Rowsingle,
    Lionanimate
  },
};
</script>

<style scoped>
.tab-pane{
  padding: 0;
  margin-top: 20px;
}
.tokenlocked{
  display: flex !important;
}
.active .tokenlocked {
  display: none !important;
}
.gradient-border{
  display: none !important;
}
.active .gradient-border {
  display: flex !important;
}
.nav-link{
  padding: 0;
  background-color: transparent !important;
  color:#fff !important
}
.nav-item{
  margin-top: 80px;
}
.filter{
    background-color: #081a2e;
    border-radius: 16px;
    padding: 20px 22px;
}
.filter input{
    background: #2f3d4d;
    border-radius: 14px;
    border: 2px solid #6e7b8e;
    width: 100%;
    padding: 10px 8px;
    color: #fff;
}
.filter input::placeholder{
    color: #fff;
    text-align: center;
    font-weight: 600;
}
.filter h3{
    text-align: center !important;
        display: flex;
    justify-content: center;
    margin-bottom: 16px;
}

.img{
  display: flex;
    align-items: center;
    justify-content: center;
}
.img img{
    width: auto;
    height: 80%;
}

.tokenlocked{
    display: flex ;
    align-items: center;
    background: #081a2e;
    padding: 6px 12px 6px 6px ;
    border-radius: 50px;
    font-weight: 600;
}

.card-header_img {
  height: 44px;
  width: 44px;
  background: linear-gradient(to right, #3345f5 0%, #3bc9f5 100%);
  border-radius: 50%;
  padding: 12px;
  position: relative;
  z-index: 1;
  margin-right: 8px;
  display: flex;
    align-items: center;
    justify-content: center;
}
.card-header_img::before {
  position: absolute;
  content: "";
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 50%;
  background-color: #273f59;
  z-index: -1;
}
.card-header_img img {
  width: auto;
  height: 100%;
}
@media screen and (max-width: 768px) {
    .tokenrow{
    flex-direction:column
    }
    .tokenbx{
      width: fit-content;
    }
    .nav{
      justify-content: center;
      flex-wrap: unset;
      flex-direction: column;
      align-items: center;
    }
    .lion{
    order:1;
    margin: auto !important;
    }
    .navitem1, .navitem1{
    order:2;
    min-width: unset;
    margin-top: 20px;
    }
    .tokenlocked{
    margin-top:0px
    }
}


.tokenrow{
    display: flex;
    margin: auto;
    width: fit-content;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 14px;
}
.tokenbx{
    min-width: 200px;
}
.lion{
    /* height: 150px; */
    margin: 0 20px;
    max-width: 260px;
}

.tokenrow .gradient-border{
    display: flex ;
    align-items: center;
    font-weight: 600;
    width: fit-content;
    padding: 8px 8px 8px 18px;
}
.tokenrow .gradient-border::before{
    background: #081a2e;
}
.tokenrow .gradient-border .img{
    height: 40px;
    width: 40px;
    margin-left: 8px;
    background: #273f59;
    border-radius: 50px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
}






.explorerow {
  background-color: #081a2e;
  border-radius: 16px;
  padding: 20px 22px;
  /* min-width: 1300px;
    overflow: scroll; */
}
.explorerowbody {
  max-height: 500px;
  overflow-y: scroll;
  padding-right: 10px;
  margin-top: 10px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}
.row div {
  width: 16.66%;
  text-align: center;
}
.row div:first-child {
  text-align: left;
}
.row div:last-child {
  text-align: right;
}
.row_head {
  border-bottom: 2px solid #4c5d74;
  padding-bottom: 12px;
  margin-bottom: 12px;
   padding-left: 14px;
    padding-right: 30px;
}
.row_head button:before {
  background: #081a2e;
  
}
.red_time {
  height: 22px;
  width: auto;
  margin-left: 6px;
}

.toknname h3 {
  display: flex;
  align-items: center;
}
.toknname img {
  height: 24px;
  margin: 0 8px;
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
.row_head .gradient-border {
  display: flex;
  justify-content: center;
  align-content: center;
}
.row_head .gradient-border i {
  margin-left: 6px;
  position: relative;
  top: 4px;
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

@media screen and (max-width: 1200px) {
  .row {
    flex-direction: column;
  }
  .row div{
    width:100%;
    text-align:center !important;
    margin:5px 0
  }
  .row button{
  margin:auto !important
  }
  .toknname h3{
  justify-content:center;
  }
}
</style>
