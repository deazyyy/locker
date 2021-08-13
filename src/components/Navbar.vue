<template>
<div class="wow fadeInDown"
        data-wow-duration="0.6s"
        data-wow-delay="0.5s">
  <nav  >
    <router-link to="/"><img src="@/assets/logo.png" alt="Logo" class="logo" /></router-link>
    <div class="center">
      <ul>
        <li><router-link to="/explore">Explore</router-link></li>
        <li><router-link to="/liquiditylocker">LIQUIDITY LOCKER</router-link></li>
        <li><router-link to="/tokenlocker">TOKEN LOCKER</router-link></li>
        <li><router-link to="/mylocks">my locks</router-link></li>
      </ul>
    </div>
    <div class="left">
      <!-- <div class="icons">
        <div class="val-bg">
          <img src="@/assets/circle.png" alt="Logo" class="logo" />
          $ 0.00000344265
        </div>

        <div class="socialIcons">
          <a href="https://mobile.twitter.com/olympus_token" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/olympusbsc/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://t.me/OlympusOfficial" target="_blank"><i class="fab fa-telegram"></i></a>
          <a href="mailto:contact@olympustoken.io" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
      </div> -->
      <div class="dropdown dropdowndapp">
        <div class="dropdowndappham" type="button" data-toggle="dropdown">
          <div class="hamburger" id="hamburger-1">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
        <ul class="dropdown-menu gradient-border">
          <img src="@/assets/arrow.png" alt="Logo" class="arrow-pointed"/>
          <div class="dpinner">
            <a href="#">
            <div class="drimg">
              <img src="@/assets/d1.png" alt="Logo" />
            </div>
            LOCKER OF ANANKE
            </a>
            <a href="#">
            <div class="drimg">
              <img src="@/assets/d2.png" alt="Logo" />
            </div>
            OLYMPUS DASHBOARD
            </a>
            <a href="#">
            <div class="drimg">
              <img src="@/assets/d3.png" alt="Logo" />
            </div>
            WHEEL OF KRONOS <br/>
            (Coming Soon)
            </a>
          </div>

        </ul>
      </div>
      <a class="dappbtn">DAPPS</a>
      <Button name="Connect" class="connectBtn"/>
    </div>
  </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";
export default {
  name: "Navbar",
  components: {
    Button,
  }
};
</script>

<style scoped>
.dropdowndapp, .dropdowndappham {
  background: transparent !important;
}
.arrow-pointed{
  position: absolute;
      top: -20px;
    height: 23px;
    left: 60%;
}
.dappbtn{
margin-right:18px;
color:#848d97 !important;
font-weight:600;
cursor:pointer;
text-decoration:none;
margin-left: 8px;

}

.dropdown-menu{
  background: #081A2E;
  padding: 20px 30px;
  border-radius: 8px;
  max-width: unset;
  width: auto;
 text-align: center;
  margin-top: 20px;
  
  font-size: 14px;
      left: -450% !important;
          z-index: 10;
}
.dpinner{
display: flex;
  align-items: flex-start;
}
.dpinner a{
      white-space: nowrap;
  margin: 0 6px;
      width: 160px;
}

.drimg{
  padding: 8px;
  border-radius: 12px;
  background: #23354b;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 12px;
}
.drimg img{
  height: 100%;
  width: auto;
  transform: translateY(14px);
  transition: all 0.6s ease;
}
.dpinner a:hover img{
  transform: translateY(0);
}
.dropdowndapp{
 margin-right: 0px;
}
.dropdown-menu li{
  padding: 2px 0;
}
.dropdown-menu a{
  color: #fff !important;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #081a2e;
  padding: 10px 30px;
  position: relative;
  /* border-bottom: linear-gradient(to right, #f74541, #f7c347); */
  border-width: 3px;
  border-style: solid;
  border-top: 0 !important;
  border-image:  linear-gradient(to left, #3345f5, #3bc9f5) 100% 1;
}
nav::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  background:  linear-gradient(to left, #3345f5, #3bc9f5);
  filter: blur(10px);
  z-index: -1;
}
nav .logo {
  width: auto;
  max-height: 40px;
}
.left,
.icons {
  display: flex;
  align-items: center;
}
.val-bg {
  border-radius: 100px;
  background-color: #25364d;
  display: flex;
  align-items: center;
  padding: 3px 20px;
}
.val-bg img {
  width: 40px;
  height: auto;
  margin-right: 10px;
}
.socialIcons {
  margin: 0 14px;
}
.socialIcons i {
  margin: 0 5px;
  color: #c4c7cb;
  cursor: pointer;
}
.socialIcons i:hover {
  color: #fff;
}


.center{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.center ul{
  display: flex;
  margin:0
}
.center a{
text-decoration:none;
color:#fff
}
.center ul li{
  margin: 0 10px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
   border-width: 3px;
  border-style: solid;
  border-top: 0 !important;
  border-image:  linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0)) 100% 1;
  padding-bottom: 4px;
  list-style-type: none;
  transition: all 0.2s linear;
}
.center ul li:hover{
  border-image:  linear-gradient(to right, #3345f5, #3bc9f5) 100% 1;
}


.dropdowndapp .gradient-border{
  border-radius: 16px;
  background: linear-gradient(0deg, #3345f5 0%, #3bddf4 100%) !important;
}

.dropdowndapp .gradient-border:before{
  border-radius: 16px;
  background-color: #07192d;
}

.dropdowndapp .dropdowndappham{
  color:#848d97 ;
  display: flex;
  align-items: center;
  font-weight: 700;
}

.dropdowndapp .hamburger{
  margin-right: 8px;
}
.hamburger .line{
  width: 30px;
  height: 3px;
  background-color: #babfc5;
  display: block;
  margin: 6px auto;
  border-radius: 6px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
.hamburger:hover{
  cursor: pointer;
}

/* ONE */

#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.is-active .line:nth-child(1){
  transform: translateY(8px) rotate(45deg);
}

#hamburger-1.is-active .line:nth-child(3){
  transform: translateY(-10px) rotate(-45deg);
}







@media screen and (max-width: 991px) {
  nav .logo {
    max-height: 30px;
  }
  .val-bg {
    font-size: 14px;
    padding: 3px 14px;
    margin-left: 10px;
  }
  .val-bg img {
        width: auto;
    height: 100%;
  }
}
@media screen and (max-width: 768px) {
  nav .logo {
    max-height: 30px;
  }
  .val-bg {
    font-size: 14px;
    padding: 5px 14px;
    margin: 0 10px;
  }
  .val-bg img {
       width: auto;
    height: 100%;
  }
  .socialIcons {
    display: none;
  }
  .center{display: none;}
  .dpinner{
    flex-direction: column;
    align-items: center;
  }
  .dpinner a{
    margin: 10px 0;
  }
}
@media screen and (max-width: 650px) {
  .val-bg {
    display: none;
  }
  nav .logo {
    max-height: 30px;
  }
  nav{
  flex-direction:column
  }
  .logo{
  margin-bottom:12px
  }
}
@media screen and (max-width: 500px) {
    nav{
        padding: 10px 14px;
    }
  nav .logo {
    max-height: unset;
    width: 60%;
    height: auto;
  }
  .dropdown-menu{
    left: -150% !important;
  }
}
</style>
