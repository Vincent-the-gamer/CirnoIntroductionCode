<template>
  <div class="content">
    <h1>琪露诺⑨机器人</h1>
    <div class="info">
      <h2>大家好~这里是琪露诺desu~</h2>
      <hr>
      <h4>
        现有以下功能： <br/>
        行动：去啥地方，举例：去夜雀食堂 去香霖堂 去炸鸡店 去博丽神社 去雾雨魔法店<br/>
        打工：赚铜钱，可用于购买道具 <br/>
        签到：每天只能签到一次，可以获得铜钱 <br/>
        参拜：目前没写好，测试用例： 在博丽神社扔冰块，然后被巫女赶出来了（悲） <br/>
        我的身份：显示自己账号对应的身份 <br/>
        我的头像：直接拿到自己的QQ头像并显示 <br/>
        看动漫： 得到一张随机图片<br/>
        看东方： 得到一张随机东方图片 <br/>
        占卜：获得随机弹幕，以及弹幕的使用者 <br/>
        钓鱼：可以钓鱼 <br/>
        jrcp： 获取今日cp  <br/>
        复读： 格式： 复读 xxxx ，重复你的话 <br/>
        联系作者： 获取作者的联系方式 <br/>
        点歌： 顾名思义，格式：点歌xxxx(不能有空格)  <br/>
        我的背包：查看背包里的物品和钱 <br/>
        看灵梦（等东方内角色）: 格式：看xx,比如看芙兰  PS: 不要访问过快，api会崩！<br/>
        来张ao图： 获取图片 <br/>
        看女同（?）： 然而并不是女同 <br/>
        来张芙兰（部分角色）格式： 来张xx（角色名) <br/>
        广告位： 你们懂的 <br/>
        当前时间： 查看当前时间 <br/>
        购买： 格式： 购买xx   温馨提示：钓鱼竿200铜钱
      </h4>
    </div>
  </div>

</template>

<script>
export default {
  name: "Content"
}
</script>

<style lang="less" scoped>
  @header-height: 40px;
  .content{
    transform: translateY(@header-height);
    h1,h2{
      color: cyan;
      text-align: center;
      text-shadow: 2px 2px 2px black;
      transform: translateY(-10px);
    }
    .info{
      position: absolute;
      border: 2px solid deeppink;
      left: 50%;
      top: 50%;
      transform: translate(-50%,20px);
      z-index: 1;
      width: 800px;
      height: 500px;
      background-color: rgba(0,0,0,0.5);
      overflow-y: scroll;
      &::-webkit-scrollbar{
        display: none;
      }
      h4{
        color: cyan;
        text-shadow: 2px 2px 2px black;
      }
    }
  }
</style>