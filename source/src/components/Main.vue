<template>
    <div class='main'>
        <div class="top">
            <mu-appbar title="My Pages">
                <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容" style="color:white;"/>
                <mu-icon-button slot="right" @click="showLogin">
                    <mu-avatar icon="person" :size="28" :iconSize="24" color="grey" backgroundColor="white" v-show="login_avatar"/>
                    <mu-avatar src="https://s.gravatar.com/avatar/29fd983b2f7704afbd9029121d8fb7a4?s=80" 
                    :size="28" :iconSize="24" color="grey" backgroundColor="white" v-show="admin_avatar"/>
                </mu-icon-button>
            </mu-appbar>
        </div>

        <mu-dialog :open="dialogLogin" title="登陆" @close="closeLogin">
            <mu-card-text>
                <el-input placeholder="请输入用户名" v-model="user_name">
                    <template slot="prepend">用户名：</template>
                </el-input>
                <el-input placeholder="请输入密码" v-model="user_pwd" style="margin-top: 20px;" type="password">
                    <template slot="prepend">密&nbsp;&nbsp;&nbsp;码：</template>
                </el-input>
            </mu-card-text>
            <mu-flat-button slot="actions" @click="closeLogin" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="login" label="验证"/>
        </mu-dialog>
        
        <div class="left">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>个人简介</span>
                </div>
                <div v-for="info in infos" class="text item">
                    {{ info }}
                </div>
                <div class="text item">
                    博客：<a href='http://www.wangdunwen.com'>个人博客</a>
                </div>
            </el-card>
            <br/><br/>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>占坑一</span>
                </div>
                <div class="text item">
                    占坑1.1：占坑1.1-1</a>
                </div>
                <div class="text item">
                    占坑1.2：占坑1.2-1</a>
                </div>
            </el-card>
            <br/><br/>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>占坑二</span>
                </div>
                <div class="text item">
                    占坑2.1：占坑2.1-1</a>
                </div>
                <div class="text item">
                    占坑2.2：占坑2.2-1</a>
                </div>
            </el-card>
            <br/><br/>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>占坑三</span>
                </div>
                <div class="text item">
                    占坑3.1：占坑3.1-1</a>
                </div>
                <div class="text item">
                    占坑3.2：占坑3.2-1</a>
                </div>
            </el-card>
            <br/><br/>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>占坑四</span>
                </div>
                <div class="text item">
                    占坑4.1：占坑4.1-1</a>
                </div>
                <div class="text item">
                    占坑4.2：占坑4.2-1</a>
                </div>
            </el-card>
            <br/><br/>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>占坑五</span>
                </div>
                <div class="text item">
                    占坑5.1：占坑5.1-1</a>
                </div>
                <div class="text item">
                    占坑5.2：占坑5.2-1</a>
                </div>
            </el-card>
            <div style="display:flex;width:100%;justify-content:center;margin-top:50px;">
                <img src="static/images/earth.gif"/>
            </div>
        </div>

        <div class="right">
            <mu-card>
                <mu-card-header title="wangdunwen" subTitle="项目展示">
                    <mu-avatar src="https://s.gravatar.com/avatar/29fd983b2f7704afbd9029121d8fb7a4?s=80" slot="avatar"/>
                </mu-card-header>
                <mu-card-media title="Punk Hazrd" subTitle="Dragon">
                    <img src="static/images/pank.jpg" />
                </mu-card-media>

                <mu-card-text>
                    从实习开始一直在做基于Web GIS的前端开发，用过很多框架，如OpenLayers3、Leaflet、Cesium等开源框架，
                    并经历了从jquery+require.js+r.js开发 -> react+webpack重构项目 -> angular+webpack重构项目，
                    最后稳定到现在通过vue+webpack进行项目开发。<br/><br/>下面是两个在Vue框架上基于Cesium和基于Leaflet的Demo。
                </mu-card-text>
                <mu-card-actions style="display:flex;align-items:center;flex-direction:row;justify-content: center;">
                    <div @click="turnToCesium" class="demo-show">
                        <mu-paper class="demo-paper" circle :zDepth="5" style="background-image: url(static/images/cesium.png);background-size:200px 200px;" title='cesium'/>
                        <mu-raised-button label="Cesium" class="demo-raised-button" primary id='current_comment'/>
                    </div>
                    <div @click="turnToLeaflet" class="demo-show">
                        <mu-paper class="demo-paper" circle :zDepth="5" style="background-image: url(static/images/leaflet.png);background-size:200px 200px;"/>
                        <mu-raised-button label="Leaflet" class="demo-raised-button" primary/>
                    </div>
                </mu-card-actions>
            </mu-card>
            <mu-card style="margin-top: 50px;width: 100%;">
                <mu-card-header title="添加新评论" style="display:flex;flex-direction:row;justify-content: space-between;">
                    <span style="cursor:pointer;color:grey;" @click="cancel_reply" v-show="show_reply">取消回复</span>
                </mu-card-header>
                <mu-card-text style="display:flex;flex-direction:row;flex-wrap:wrap;">
                    <div style="width: 30%;margin-right:5%;">
                        昵称<span style="color:red">*</span>
                        <el-input placeholder="请输入昵称" v-model="input_name"></el-input>
                    </div>
                    <div style="width: 30%;margin-right:5%;">
                        邮箱<span style="color:red">*</span>
                        <el-input placeholder="请输入邮箱" type="email" v-model="input_email"></el-input>
                    </div>
                    <div style="width: 30%;">
                        网站
                        <el-input placeholder="请输入网址" v-model="input_website"></el-input>
                    </div>
                    <div style="width: 100%;">
                        <br/>
                        内容<span style="color:red">*</span>
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 5, maxRows: 5}"
                          placeholder="请输入内容"
                          v-model="input_comments">
                        </el-input>
                        <br/>
                        <br/>
                    </div>
                    <el-button type="primary" @click="submit_comment">提交</el-button>
                </mu-card-text>
                <mu-card-text style="width: 100%;">
                    <div v-for="comment in comments" style="margin-top: 20px;">
                        <el-card class="box-card" style="width: 100%;">
                            <mu-list-item :title="comment.name" disabled>
                                <mu-avatar slot="left" v-if="comment.email === 'dwwang@mail.ie.ac.cn'" src="https://s.gravatar.com/avatar/29fd983b2f7704afbd9029121d8fb7a4?s=80"/>
                                <mu-avatar slot="left" v-else icon="person"/>
                            </mu-list-item>
                            <mu-card-text>{{ comment.comments }}</mu-card-text>
                            <mu-card-text style="font-size:12px;">
                                {{ comment.time }}&nbsp;&nbsp;&nbsp;
                                <i class="el-icon-edit-outline" style="cursor:pointer;" @click="reply(comment)">&nbsp;回复</i>
                            </mu-card-text>
                            <!-- 如果有子评论 -->
                            <div v-if="comment.child.length > 0">
                                <el-card class="box-card" style="width: 100%;background-color:#EDEDED;margin-top:10px;" v-for="(child, index) in comment.child" :key="index">
                                    <mu-list-item :title="child.name + ' ' + (index+1) + '楼'" disabled color="blue">
                                        <mu-avatar slot="left" v-if="child.email === 'dwwang@mail.ie.ac.cn'" 
                                        src="https://s.gravatar.com/avatar/29fd983b2f7704afbd9029121d8fb7a4?s=80"/>
                                        <mu-avatar slot="left" v-else icon="person"/>
                                    </mu-list-item>
                                    <mu-card-text><span style="color:blue;">@{{ child.target }} </span>&nbsp; {{ child.comments }}</mu-card-text>
                                    <mu-card-text style="font-size:12px;">
                                        {{ child.time }}&nbsp;&nbsp;&nbsp;
                                        <i class="el-icon-edit-outline" style="cursor:pointer;" @click="reply(comment, child.name)">&nbsp;回复</i>
                                    </mu-card-text>
                                </el-card>
                            </div>
                        </el-card>
                    </div>
                </mu-card-text>
            </mu-card>

            <div class="footer">
                <mu-icon value="copyright" :size="20"/>Designed by wangdunwen.
            </div>
        </div>

        <!-- <el-button type="info" round @click="turnToCesium">调至Cesium</el-button>
        <el-button type="info" round @click="turnToLeaflet">调至Leaflet</el-button> -->
    </div>
</template>

<script>
export default {
  name: 'main',
  data () {
      return {
          infos: [
              "姓名：王敦文",
              "性别：男",
              "GitHub：@wangdunwen",
              "职业：前端工程师、Web GIS开发",
              "爱好：足球，篮球，旅游等",
              "签名：enjoy life！"
          ],
          input_name: "",
          input_email: "",
          input_website: "",
          input_comments: "",
          show_reply: false,
          comments: [
              // {name:'test1',email:'email1',comments:'此为评论',time:"2017-12-14 15:30:52",child:[
              //     {name:'test2',email:'email2',comments:'评论test1',time:"2017-12-14 15:32:52",target:'test1'},
              //     {name:'test1',email:'email1',comments:'评论test2',time:"2017-12-14 15:35:52",target:'test2'},
              // ]},
              // {name:'test2',email:'email2',comments:'此为评论',time:"2017-12-14 15:35:52",child:[]},
              // {name:'test2',email:'email2',comments:'此为评论',time:"2017-12-14 15:35:52",child:[]},
              // {name:'test2',email:'email2',comments:'此为评论',time:"2017-12-14 15:35:52",child:[]},
              // {name:'test2',email:'email2',comments:'此为评论',time:"2017-12-14 15:35:52",child:[]},
              // {name:'test2',email:'email2',comments:'此为评论',time:"2017-12-14 15:35:52",child:[]},
              // {name:'test2',email:'email2',comments:'此为评论',time:"2017-12-14 15:35:52",child:[]},
          ],
          replyInfo: {
              target: "",
              id: ""
          },
          dialogLogin: false,
          user_name: "",
          user_pwd: "",
          login_avatar: true,
          admin_avatar: false,
          current_login: "user"
      }
  },
  methods: {
      turnToCesium() {
          this.$router.replace('/cesium');
      },
      turnToLeaflet() {
          this.$router.replace('/leaflet');
      },
      submit_comment() {
          if(this.input_name === "") {
              this.$notify.error({
                  title: '错误',
                  message: '请输入昵称！'
              });
              return;
          }
          else if(this.input_email === "") {
              this.$notify.error({
                  title: '错误',
                  message: '请输入邮箱！'
              });
              return;
          }
          else if(this.input_comments === "") {
              this.$notify.error({
                  title: '错误',
                  message: '评论内容不能为空！'
              });
              return;
          }
          else if(!this.isEmail(this.input_email)) {
              this.$notify.error({
                  title: '错误',
                  message: '非法的邮箱格式！'
              });
              return;
          }

          let current_time = new Date();
          let id = 'wdw_comment_' + current_time.getTime();

          let comment = {
              name: this.input_name,
              email: this.input_email,
              comments: this.input_comments,
              website: this.input_website,
              time: current_time.getTime(),
          }

          if(this.replyInfo.target !== "" && this.replyInfo.id !== "") {
              comment.target = this.replyInfo.target;
              for(let cm of this.comments) {
                  if(cm.id === this.replyInfo.id) {
                      cm.child.push(comment);

                      this.$http.post('http://101.201.232.4/github.io/updateChild', JSON.stringify(cm))
                          .then((response) => {
                              // 插入评论列表
                              let date = new Date();
                              date.setTime(comment.time);
                              comment.time = date.toLocaleString();
                              console.log(response.body);
                          }).catch((error) => {
                              console.log(error);
                          })
                      this.show_reply = false;
                      this.replyInfo.target = "";
                      this.replyInfo.id = "";
                      break;
                  }
              }
          }else {
              comment.id = id;
              comment.child = [];

              this.$http.post('http://101.201.232.4/github.io/comment', JSON.stringify(comment))
                  .then((response) => {

                      // 插入评论列表
                      let date = new Date();
                      date.setTime(comment.time);
                      comment.time = date.toLocaleString();
                      this.comments.push(comment);
                  }).catch((error) => {
                      console.log(error);
                  })
          }

          this.$notify({
              title: '成功',
              message: '评论成功！',
              type: 'success'
          });

          // 清空表格，昵称、邮箱、网站不需要重置
          // this.input_name = "";
          // this.input_email = "";
          this.input_comments = "";
          // this.input_website = "";
      },
      isEmail(str) {
          return /^(\w+)(\.\w+)*@(\w+)(\.\w+)*.(\w+)$/i.test(str);
      },
      reply(comment, name) {
          document.querySelector("#current_comment").scrollIntoView();

          this.show_reply = true;

          if(name === undefined) {
              this.replyInfo.target = comment.name;
              this.replyInfo.id = comment.id;
          }else {
              this.replyInfo.target = name;
              this.replyInfo.id = comment.id;
          }
      },
      cancel_reply() {
          this.show_reply = false;
          this.replyInfo.target = "";
          this.replyInfo.id = "";
      },
      showLogin() {
          this.dialogLogin = true;
      },
      closeLogin() {
          this.dialogLogin = false;
      },
      login() {
          if(this.user_name !== "" && this.user_pwd !== "") {
              if(this.user_name === "wangdunwen_root" && this.user_pwd === "wdw1992519!") {
                  this.login_avatar = false;
                  this.admin_avatar = true;
                  this.input_name = 'wangdunwen';
                  this.input_email = 'dwwang@mail.ie.ac.cn';
                  this.input_website = 'http://www.wangdunwen.com';
                  this.current_login = "admin";
              }
          }else {
              this.$notify({
                  title: '警告',
                  message: '请输入用户名或密码！',
                  type: 'warning'
              });
          }
          this.dialogLogin = false;
      }
  },
  mounted() { 
      this.$http.get('http://101.201.232.4/github.io/getComments')
          .then((response) => {
              for(let comment of response.body) {
                  comment.child = JSON.parse(comment.child);
                  let date = new Date();
                  date.setTime(comment.time);
                  comment.time = date.toLocaleString();

                  if(comment.child.length !== 0) {
                      for(let child of comment.child) {
                          let date1 = new Date();
                          date1.setTime(child.time);
                          child.time = date1.toLocaleString();
                      }
                  }
                  this.comments.push(comment);
              }
          }).catch((error) => {
              console.log(error);
          });
  }
}
</script>

<style scoped>
    .main {
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
    }

    .top {
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: align-self;
    }

    .left {
        position: absolute;
        top: 15%;
        left: 1rem;
        display: flex;
        flex-direction: column;
        width: 25%;
    }

    .right {
        position: absolute;
        top: 15%;
        left: 28%;
        right: 1%; 
        /*display: flex;
        flex-direction: column;*/
    }

    .bottom {
        position: absolute;
        left: 300px;
        right: 20px; 
        width: 100%;
        height: 150px;
        background: red;
        display: flex;
        justify-content: center;
    }

    .footer {
        position: absolute;
        margin-top: 100px;
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        color: black;
        right: 150px;
    }

    .demo-paper {
        display: inline-block;
        height: 200px;
        width: 200px;
        margin: 50px;
        text-align: center;
        cursor: pointer;
    } 

    .demo-show {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .content {
        padding: 10px;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
    }
</style>