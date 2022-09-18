<template>
  <Header/>
  <Content/>
  <Footer/>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
export default {
  name: 'App',
  components: {Content, Footer, Header},
}
</script>

<style lang="less">
   body{
     background-color: deepskyblue;
     background-image: url("./assets/images/cirno.jpg");
   }
</style>
