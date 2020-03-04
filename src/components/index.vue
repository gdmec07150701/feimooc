<template>
  <el-container>
    <el-header>
        <div class="header_logo">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="header_center">
          <div class="header_nav">
            <ul>
              <li>
                  <div class="header_search">
                    <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
                  </div>
              </li>
              <li>消息</li>
              <li>我的教学</li>
              <li>渠道管理</li>
              <li>消息</li>
            </ul>
          </div>
        </div>
        <div class="header_user">
          <img src="../assets/logo.png" alt="">
        </div>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-header{
  display:flex;
  /*justify-content:center;*/
  //垂直居中
  align-items:center;
  padding: 0px;
  margin: 0px;
  background-color: aqua;
  div{
    li{
      display: inline;
    }
    img{
      width: 50px;
      height: auto;
    }
  }
  .header_center{
    display: flex;
    text-align: right;
    color: white;
    ul{
      width: 85vw;
      display: inline-block;
      li{
        .header_search{
          width: 100px;
          display: inline-block;
        }
        margin-left: 1rem;
        font-family: Arial;
        font-size: 14px;
      }
    }
  }
  .header_user{
    position: absolute;
    right: 1rem;
  }
}
</style>
