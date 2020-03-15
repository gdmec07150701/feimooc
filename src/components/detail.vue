<template>
  <div>
    <div class="common_header">
      <div class="common_logo">
        <img src="../assets/images/home_page.png"
             alt />
      </div>
      <div class="common_title">
        <span class="name">飞慕课</span>
        <span class="tip">使用app更流畅</span>
      </div>
      <div class="common_my">
        我的
        <span class="red_poit"></span>
      </div>
    </div>
    <div class="detail_video_box"></div>
    <div class="detail_course_info">
      <div class="detail_course_title">亲子游戏治疗法：玩出孩子专注力</div>
      <div class="detail_course_student">35人学习</div>
    </div>

    <div class="detail_course_content">
      <el-tabs v-model="activeName"
               @tab-click="handleClick"
               :class="{tab_box,'fixed':needFixed}"
               stretch>
        <el-tab-pane label="简介"
                     name="first">
          <!-- <div class="introduction">
            <p><span style="color:#696969;"><span style="font-size:15px;">孩子上课老是开小差？<br>
                  平时丢三落四，忘东忘西？<br>
                  吃饭做作业拖拖拉拉，一搞小半天？<br>
                  ……</span></span></p>

            <p><span style="color:#696969;"><span style="font-size:15px;">是因为孩子不够聪明？</span></span><br><span style="color:#696969;"><span style="font-size:15px;">是孩子不乖？</span></span><br><span style="color:#696969;"><span style="font-size:15px;">还是孩子和家长故意作对？</span></span></p>

            <p><span style="font-size:15px;"><span style="color:#696969;">都不是！</span><br><span style="color:#FF8C00;"><strong>儿童临床心理专家张欣华老师</strong></span><span style="color:#696969;">告诉你：</span></span></p>

            <p><span style="font-size:15px;"><span style="color:#FF8C00;"><strong>其实你的孩子可能只是专注力不足！</strong></span></span></p>

            <p><span style="font-size:15px;"><span style="color:#696969;">张欣华老师是<br><strong>美国心理学会认证儿童心理专家<br>
                    美国游戏治疗协会认证游戏治疗师</strong><br>
                  拥有20年儿童心理临床经验<br>
                  累积30000小时儿童心理个案辅导经验</span></span></p>

            <p><span style="font-size:15px;"><span style="color:#696969;">听儿童心理大咖为你讲解<br><strong>《玩出孩子的专注力》</strong><br>
                  轻松收获圆满亲子关系！</span></span></p>

            <p><img alt=""
                   src="https://www.feimooc.com:8800/files/course/2019/11-01/121333d5893b527933.png?9.20.9145"
                   class="isPop"></p>

            <p><img alt=""
                   src="https://www.feimooc.com:8800/files/course/2019/11-01/121350e1004e262734.png?9.20.9145"
                   class="isPop"></p>

            <p><img alt=""
                   src="https://www.feimooc.com:8800/files/course/2019/11-01/12395171f188635170.png?9.20.9145"
                   class="isPop"></p>

            <p><img alt=""
                   src="https://www.feimooc.com:8800/files/course/2019/11-01/12145822a803560835.png?9.20.9145"
                   class="isPop"></p>

            <p><img alt=""
                   src="https://www.feimooc.com:8800/files/course/2019/11-01/1215120af670937648.png?9.20.9145"
                   class="isPop"></p>

            <p><img alt=""
                   src="https://www.feimooc.com:8800/files/course/2019/11-01/1239208876a0022732.png?9.20.9145"
                   class="isPop"></p>

            <p><strong><span style="color:#696969;"><span style="font-size:15px;">课程一旦购买可反复收听，学习过程中如有任何疑问，欢迎留言给导师哟~~</span></span></strong></p>
          </div> -->
          <div class="txt_box">
            <p class="detail_box_name">学习目标</p>
            <ul>
              <li>了解孩子专注力不足的常见情况和误区</li>
              <li>了解孩子专注力不足的常见情况和误区</li>
              <li>了解孩子专注力不足的常见情况和误区</li>
            </ul>
          </div>
          <div class="txt_box">
            <p class="detail_box_name">适合人群</p>
            <ul>
              <li>所有人</li>
            </ul>
          </div>
          <div class="txt_box">
            <p class="detail_box_name">加入须知</p>
            <ul>
              <li>了解孩子专注力不足的常见情况和误区了解孩子专注力不足的常见情况和误区</li>
              <li>了解孩子专注力不足的常见情况和误区</li>
              <li>了解孩子专注力不足的常见情况和误区</li>
            </ul>
          </div>
          <div class="detail_teacher_box">
            <div class="detail_teacher_img_box">
              <img src="https://www.feimooc.com:8800/files/default/2019/11-13/1102179265f9245802.png?9.20.9130"
                   alt="">
            </div>
            <div class="detail_teacher_name_box">
              <p class="detail_teacher_name">
                张新华
              </p>
              <span>国内著名游戏治疗专家</span>
            </div>
            <div class="detail_teacher_sub_box">
              <p>关注</p>
            </div>
          </div>
          <div class="detail_add_and_and_box txt_box">
            <p class="detail_box_name">加入学习的学员还加入了</p>
            <ul>
              <li>
                <div class="course_item">
                  <div class="teacher_img">
                    <img src="https://www.feimooc.com:8800/files/user/2016/05-29/15544885672c096134.png?9.20.9130"
                         alt="">
                  </div>
                  <div class="course_info">
                    <p class="course_title">影响孩子一生的三大金钱问题</p>
                    <p class="teacher_title">国际金融理财师|儿童财商教育专家</p>
                    <span class="studyNum">17.4万人学习</span>
                    <span class="joinStatus">免费试学</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="course_item">
                  <div class="teacher_img">
                    <img src="https://www.feimooc.com:8800/files/user/2016/05-29/15544885672c096134.png?9.20.9130"
                         alt="">
                  </div>
                  <div class="course_info">
                    <p class="course_title">影响孩子一生的三大金钱问题</p>
                    <p class="teacher_title">国际金融理财师|儿童财商教育专家</p>
                    <span class="studyNum">17.4万人学习</span>
                    <span class="joinStatus">免费试学</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="课时"
                     name="second">
          <div class="detal_lesson_list_title">
            <span class="lesson_count">共12门课时</span>
            <div class="right_tab">
              <img src="../assets/images/teletext.png"
                   alt="">
              <p>切换到图文版</p>
            </div>
          </div>
          <div class="detail_lesson_list_box">
            <ul>
              <li>
                <div class="media_logo">
                  <img src="../assets/images/video.png"
                       alt="">
                </div>
                <div class="lesson_title">
                  <span>课时1 孩子不乖？可能是专注力不足</span>
                  <span class="time">11:45</span>
                  <span class="try">试学</span>
                </div>
              </li>
              <li>
                <div class="media_logo">
                  <img src="../assets/images/video.png"
                       alt="">
                </div>
                <div class="lesson_title">
                  <span>课时1 孩子不乖？可能是专注力不足</span>
                  <span class="time">11:45</span>
                  <span class="try">试学</span>
                </div>
              </li>
              <li>
                <div class="media_logo">
                  <img src="../assets/images/video.png"
                       alt="">
                </div>
                <div class="lesson_title">
                  <span>课时1 孩子不乖？可能是专注力不足</span>
                  <span class="time">11:45</span>
                  <span class="try">试学</span>
                </div>
              </li>
              <li>
                <div class="media_logo">
                  <img src="../assets/images/video.png"
                       alt="">
                </div>
                <div class="lesson_title">
                  <span>课时1 孩子不乖？可能是专注力不足</span>
                  <span class="time">11:45</span>
                  <span class="try">试学</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="detail_add_and_and_box txt_box">
            <p class="detail_box_name">相关推荐</p>
            <ul>
              <li>
                <div class="course_item">
                  <div class="teacher_img">
                    <img src="https://www.feimooc.com:8800/files/user/2016/05-29/15544885672c096134.png?9.20.9130"
                         alt="">
                  </div>
                  <div class="course_info">
                    <p class="course_title">影响孩子一生的三大金钱问题</p>
                    <p class="teacher_title">国际金融理财师|儿童财商教育专家</p>
                    <span class="studyNum">17.4万人学习</span>
                    <span class="joinStatus">免费试学</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="course_item">
                  <div class="teacher_img">
                    <img src="https://www.feimooc.com:8800/files/user/2016/05-29/15544885672c096134.png?9.20.9130"
                         alt="">
                  </div>
                  <div class="course_info">
                    <p class="course_title">影响孩子一生的三大金钱问题</p>
                    <p class="teacher_title">国际金融理财师|儿童财商教育专家</p>
                    <span class="studyNum">17.4万人学习</span>
                    <span class="joinStatus">免费试学</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="留言"
                     name="three">
          12321312312312312
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      input: '',
      carousel: [],
      activeName: 'second',
      needFixed: false,
      tab_box: 'tab_box',
      fixed: 'fixed'
    }
  },
  created () {
    console.log(this.$route.params.id)
    // this.$http({
    //   method: 'get',
    //   url: '/Course/getH5CourseBanner'
    // }).then(
    //   res => {
    //     console.log(res)
    //     if (res.data.code === 200) {
    //       that.carousel = res.data.data
    //       console.log(that.carousel)
    //     }
    //   },
    //   response => {
    //     console.log('请求失败')
    //     console.log(response)
    //   }
    // )
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 240) {
        // this.needFixed = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.common_header {
  display: flex;
  color: white;
  width: 10rem;
  height: 1.066667rem;
  background-color: #212121;
  line-height: 1.066667rem;
  font-size: 0.373333rem;
  .common_logo {
    width: 0.506667rem;
    height: 0.48rem;
    margin: 0.133333rem 0.4rem;
    img {
      width: 0.506667rem;
      height: 0.48rem;
    }
  }
  .common_title {
    flex: 1;
    .tip {
      color: #b2c266;
      margin-left: 0.266667rem;
      padding: 1px 0.133333rem;
      border-radius: 0.266667rem;
      border: 1px solid #b2c266;
      font-size: 0.32rem;
    }
  }
  .common_my {
    margin-right: 0.4rem;
    .red_poit {
      display: inline-block;
      width: 0.16rem;
      height: 0.16rem;
      border-radius: 50%;
      background-color: red;
    }
  }
}

.detail_video_box {
  width: 10rem;
  height: 5.6rem;
  background-color: red;
  background-image: url("https://www.feimooc.com:8800/files/default/2019/11-12/173851bc8a62380083.png?9.20.9130");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.detail_course_content {
  width: 9.2rem;
  padding: 0;
}
.detail_course_info {
  padding: 0.426667rem;
  width: 10rem;
  .detail_course_title {
    font-size: 0.48rem;
    font-weight: bolder;
    line-height: 0.666667rem;
  }
  .detail_course_student {
    font-size: 0.293333rem;
  }
}

.tab_box {
  width: 9.2rem;
}
.introduction {
  width: 9.333333rem;
  margin: 0 auto;
  line-height: 0.5rem;
  img {
    width: 9.333333rem;
  }
}

.detail_box_name {
  font-size: 0.666667rem;
  font-weight: bolder;
  line-height: 0.666667rem;
  padding: 0 0 0.266667rem 0;
}
.txt_box {
  width: 9.2rem;
  padding: 0.266667rem 0;
  border-bottom: grey 0.013333rem solid;
  ul {
    li {
      padding: 0.266667rem 0;
      font-size: 0.373333rem;
    }
  }
}
.detail_teacher_box {
  margin-top: 0.4rem;
  height: 1.493333rem;
  width: 9.2rem;
  display: flex;
  .detail_teacher_name_box {
    margin-top: 0.133333rem;
    flex: 1;
    p {
      font-size: 0.4rem;
      font-weight: bold;
    }
    span {
      font-size: 0.293333rem;
    }
  }
  .detail_teacher_sub_box {
    background-color: #b2c266;
    width: 1.6rem;
    color: white;
    border-radius: 0.106667rem;
    font-size: 0.293333rem;
    text-align: center;
    height: 0.426667rem;
    margin: 0.426667rem 0 0 0;
  }
  .detail_teacher_img_box {
    padding-right: 0.266667rem;
    img {
      width: 1.066667rem;
      border-radius: 50%;
    }
  }
}

.teacher_img {
  width: 2.133333rem;
}

.course_item {
  display: flex;
  .teacher_img {
    width: 2.133333rem;
    img {
      width: 2.133333rem;
    }
  }
  .course_info {
    padding-left: 0.266667rem;
    position: relative;
    flex: 1;
    .course_title {
      font-size: 0.48rem;
      font-weight: bold;
      padding: 0.106667rem 0;
    }
    .teacher_title {
      color: grey;
    }
    .studyNum {
      position: absolute;
      left: 0.266667rem;
      bottom: 0;
      color: grey;
    }
    .joinStatus {
      color: #9eb141;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
}

.detal_lesson_list_title {
  height: 0.906667rem;
  font-size: 0.373333rem;
  .right_tab {
    display: flex;
    float: right;
    padding-right: 0.133333rem;
    img {
      margin-top: 0.08rem;
      display: inline;
      width: 0.4rem;
      height: 0.373333rem;
    }
  }
}

.detail_lesson_list_box {
  font-size: 0.373333rem;
  ul {
    li {
      display: flex;
      padding-bottom: 0.266667rem;
      .media_logo {
        padding-top: 0.053333rem;
        width: 0.4rem;
        img {
          width: 0.4rem;
        }
      }
      .lesson_title {
        flex: 1;
        .try {
          background-color: #b2c266;
          color: white;
          border-radius: 20%;
          padding: 0.08rem;
        }
        .time {
          margin: 0 0.133333rem;
        }
      }
    }
  }
}
</style>
