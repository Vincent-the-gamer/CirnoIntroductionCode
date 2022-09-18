<template>
  <footer>
    <h3 class="footer-text">
      ⑨的主人： <br/>
      QQ: 2819687786 <br/>
      Bilibili: <a href="https://space.bilibili.com/294922139" target="_blank">https://space.bilibili.com/294922139</a>
    </h3>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    border: 2px solid deeppink;
    background-color: rgba(0,0,0,0.5);
    .footer-text{
      color: yellow;
      text-align: center;
      text-shadow: 2px 2px 2px black;
      &:hover{
        color: cyan;
      }
      a{
        color: greenyellow;
        text-decoration: none;
        &:hover{
          color: red;
        }
      }
    }
  }
</style>