<template>
  <nav class="wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.6s">
    <div class="socialIcons">
      <a href="https://mobile.twitter.com/olympus_token" target="_blank"
        ><i class="fab fa-twitter"></i
      ></a>
      <a href="https://www.instagram.com/olympusbsc/?hl=en" target="_blank"
        ><i class="fab fa-instagram"></i
      ></a>
      <a href="https://t.me/OlympusOfficial" target="_blank"
        ><i class="fab fa-telegram"></i
      ></a>
      <a href="mailto:contact@olympustoken.io" target="_blank"
        ><i class="fas fa-envelope"></i
      ></a>
    </div>
    <div class="from">
      From <img src="@/assets/olympus-logo.png" alt="Logo" />
    </div>
    <a class="olymplink" href="olympustoken.Io">olympustoken.Io</a>
  </nav>
</template>

<script>
// @ is an alias to /src
// import ItemComp from "@/components/Itemc.vue";
export default {
  name: "Footer",
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 10px 30px 30px;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.from{
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 16px;
}
.from img{
  height: 36px;
  width: auto;
  margin: 10px 0;
  margin-left: 12px;
}
.olymplink{
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;
}
.socialIcons {
  display: flex;
  margin: 0 18px;
}
.socialIcons a {
  margin: 0 10px;
  border-radius: 50%;
  border: 2px solid #334455;
  padding: 8px;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}
.socialIcons a:hover {
  background: #334455;
}
.socialIcons i {
  margin: 0 1px;
  color: #c4c7cb;
  font-size: 18px;
}
</style>
