<template>
   <header>
     <ul>
       <li>
         <a href="https://thwiki.cc/" target="_blank">
           <h3>东方Wiki百科</h3>
         </a>
       </li>
       <li>
         <a href="https://github.com/Vincent-the-gamer" target="_blank">
           <h3>GitHub(开发者)</h3>
         </a>
       </li>
       <li>
         <a href="https://baike.baidu.com/item/%E4%B8%9C%E6%96%B9Project/6217040?fr=aladdin" target="_blank">
           <h3>东方百度百科</h3>
         </a>
       </li>
     </ul>
   </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="less" scoped>
   header{
     background-color: rgba(0,0,0,0.3);
     position: fixed;
     top: 0;
     left: 0;
     height: 40px;
     width: 100%;
     border: 2px solid deeppink;
     a{
       color: deeppink;
       text-decoration: none;
       h3{
         margin-left: 15px;
         &:hover{
           color: yellow;
         }
         text-shadow: 1px 2px 2px black;
       }
     }
     ul{
       transform: translateX(-15px) translateY(-26px);
     }
     ul li{
       display: inline-block;
     }
   }
</style>