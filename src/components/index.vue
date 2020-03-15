<template>
  <el-container>
    <el-header>
      <div class="header_logo">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="header_center">
        <div class="header_nav">
          <ul>
            <li>
              <div class="header_search">
                <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
              </div>
            </li>
            <li>
              <a href>消息</a>
            </li>
            <li>
              <a href>我的教学</a>
            </li>
            <li>
              <a href>渠道管理</a>
            </li>
            <li>
              <a href>消息</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header_user">
        <img src="../assets/logo.png" alt />
      </div>
    </el-header>
    <el-main>
      <div class="main_carousel">
        <template>
          <div>
            <el-carousel>
              <el-carousel-item v-for="item in carousel" :key="item.imgUrl">
                <img :src="item.imgUrl" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </template>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      input: '',
      carousel: []
    }
  },
  created () {
    const that = this
    this.$http({
      method: 'get',
      url: '/Course/getH5CourseBanner'
    }).then(
      res => {
        console.log(res)
        if (res.data.code === 200) {
          that.carousel = res.data.data
          console.log(that.carousel)
        }
      },
      response => {
        console.log('请求失败')
        console.log(response)
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-header {
  display: flex;
  /*justify-content:center;*/
  //垂直居中
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: aqua;
  div {
    li {
      display: inline;
      a {
        text-decoration: none;
        color: white;
      }
    }
    img {
      width: 50px;
      height: auto;
    }
  }
  .header_center {
    display: flex;
    text-align: right;
    color: white;
    ul {
      width: 85vw;
      display: inline-block;
      li {
        .header_search {
          width: 100px;
          display: inline-block;
        }
        margin-left: 1rem;
        font-family: Arial;
        font-size: 14px;
      }
    }
  }
  .header_user {
    position: absolute;
    right: 1rem;
  }
}
.el-main {
  background-color: aquamarine;
  padding: 0;
  height: 100%;
  .el-carousel-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
