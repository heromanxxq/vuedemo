<template>
  <div class="loginb" :style="{height:height+'px'}">
    <div class="second_body">
      <div class="login-left">
      
      </div>
      <div class="login-right">
        <div class="header">
          <div class="title-zh">{{app.title}}</div>
          <div class="title-en" style="">{{app.engtitle}}</div>
        </div>
        <div class="login-form">
          <div class="username">
            <label for="" class="label-username">用户名：</label>
            <input class="easyui-textbox login-input" type="text"  data-options="iconCls:'icon-search'" style="" v-model="user.username">
          </div>
          <div class="password">
            <label for="" class="label-password">密码：</label>
            <input class="easyui-textbox login-input" type="password" data-options="iconCls:'icon-search'" style="" v-model="user.password">
          </div>
          <div class="login-anniu">
            <input type="submit" value="登录" class="login_button" @click="doLogin"/>
            <input type="button" value="重置" class="reset_botton" @click="resetClick" />
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
  export default {
    //单页面中不支持前面的data:{}方式
    data() {
      //相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
      return{
        //之前是在里面直接写username，password等等，但是这里要写return
        //因为一个组件不管要不要被其他组件用，只要这样定义了，它就会认为可能这个组件会在其他的组件中使用
        //比如说在这里定义了一个变量，然后把这个组件引入到A组件中，A组件中修改了这个变量
        //同时这个组件也在B组件中引用了，这时候A里面一修改，B里面也变了，它们用的是一个值
        //可是一般来说可能希望在不同的组件中引用的时候，使用不同的值，所以这里要用return
        //这样在A组件和B组件分别引用这个变量的时候是不会互相影响的
        user:{
          username:'zhangsan',
          password:'123',
          //为了登录方便，可以直接在这里写好用户名和密码的值
        },
        remember: false,
        height: `${document.documentElement.clientHeight}`,
        app:{
          title: 'app后端管理系统',
          engtitle: 'Enterprise Information Manage System',
          logo: '../../assets/images/login/login1.jpg'
        }
      }
    },
    methods:{
      doLogin(){//一点击登录按钮，这个方法就会执行
        //alert(JSON.stringify(this.user))//可以直接把this.user对象传给后端进行校验用户名和密码
        //console.log(JSON.stringify(this.$router))
        this.$router.push({ name: 'home' })
      },
      resetClick(){
          this.user.username = ''
          this.user.password = ''
      }
    }
  }
</script>

<style>
.loginb{
	font-size:12px;
	font-family:Verdana, Geneva, sans-serif;
	line-height:23px;
	margin:0;
	padding:0;
	background:url(../../assets/images/login/login_bg.jpg);
	color:#3b6e81;
  
}
.second_body{		
	background:url(../../assets/images/login/login_panel.png) no-repeat;
  position: absolute;
  top: 25%;
  left: 50%;
  width: 45%;
  height: 300px;
  border-radius: 15px;
  display: flex;
}
.login-left{
  width: 35%;
}
.login-right{
  width: 65%;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
}

.title-zh{
  font-size:26px;
  font-weight:900;
  color:#0074a6;    
}

.title-en{
    color:#9aa5a9;
    margin-top: 5px;
}

.login-form{
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.username{
  display: flex;
  align-items: center;
  padding: 5px;
  margin-top: 5px;
  margin-left: -10%;
}
.password{
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: -10%;
}
.label-username{
  letter-spacing: 3px;
}
.label-password{
  letter-spacing: 8px;
}
.login-input{
  height: 30px;
  width: 200px;
  border: 0.5px solid#2c3e50;
}

.login-anniu{
  margin-top: 20px;
}
.login_button,.reset_botton{
	width:58px;
	height:26px;
    line-height:26px;
	border:none;
	color:#FFF;
	font-weight:bold;
	background:url(../../assets/images/login/login1.jpg);
	margin-left:15px;
	}

.reset_botton{
	background:url(../../assets/images/login/reset.jpg);
	}
</style>