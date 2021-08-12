<template>
  <section class="container" style="margin-bottom:20px">
      <div
      class="heading wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.3s"
    >
      <h3>
        explore  all locks
      </h3>
      <h4>SELECT LOCK TYPE</h4>
    </div>
    
    <div class="tokenrow wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.5s">
        <div class="gradient-border tokenbx">
            LOCKED LIQUIDITY <div class="img"><img src="@/assets/icons/jug.png" alt="Logo" /></div>
        </div>
        <div class="lion">
            <Lionanimate/>
        </div>
        <div class="tokenlocked tokenbx">
            <div class="card-header_img">
                <img src="@/assets/icons/token.svg" alt="Logo" />
            </div>
            LOCKED TOKENS
        </div>
    </div>
    <div class="filter wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.3s">
        <h3 class="gradient-text">FILTER BY TOKEN</h3>
        <input placeholder="ENTER PAIR ADDRESS OR TOKEN NAME"/>
    </div>
  </section>
  
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue"
import Lionanimate from "@/components/Lionanimate.vue";
export default {
  name: "Head",
  components:{
      Lionanimate
  }
};
</script>

<style scoped>
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
    text-align: center;
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
.img img{
    width: auto;
    height: 100%;
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
    .lion{
    order:1
    }
    .tokenbx{
    order:2;
    min-width: 220px;
    }
    .tokenlocked{
    margin-top:20px
    }
}
</style>
