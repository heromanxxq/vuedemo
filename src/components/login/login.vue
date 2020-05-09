<template>
    <div>
        <div class="second_body">
    	    <div class="logo"></div>
            <div class="title-zh">APP后端管理系统</div>
            <div class="title-en" style="">Enterprise Information Manage System</div>
            <div class="message" data-bind="html:message"></div>
            <table border="0" style="width:300px;margin-top:30px;">
            	<tr>
                	<td style="white-space:nowrap; padding-bottom: 5px;width:55px;">用户名：</td>
                    <td colspan="2"><input type="text" id="userCode" class="login" v-model="user.username" /></td>
                </tr>
                <tr>
                    <td class="lable" style="white-space:nowrap; letter-spacing: 0.5em; vertical-align: middle">密码：</td>
                    <td colspan="2"><input type="password" id="password" class="login" v-model="user.password" /></td>
                </tr>
                <!--
                <tr>
                    <td></td>
                    <td colspan="2"><input type="checkbox" v-model="remember" /><span>系统记住我</span></td>
                </tr> 
                -->
                <tr>
                    <td colspan="3" style="text-align:center;">
                        <input type="submit" value="登录" class="login_button" @click="doLogin"/>
                        <input type="button" value="重置" class="reset_botton" @click="resetClick" />
                    </td>
                </tr>
            </table>
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
        remember: false
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
    body{
	font-size:12px;
	font-family:Verdana, Geneva, sans-serif;
	line-height:23px;
	margin:0;
	padding:0;
	background:url(../../assets/images/login/login_bg.jpg);
	color:#3b6e81;
	}
.second_body{
	margin-left: 40%;	
	height:343px;
	margin-top:10%;
	padding-left:300px;
	padding-top:110px;
	background:url(../../assets/images/login/login_panel.png) no-repeat;
    position:relative;
}

.title-zh
{
    position:absolute;
    top:50px;
    left:320px;
    font-size:26px;
    font-weight:900;
    color:#0074a6;
}

.title-en
{
    position:absolute;
    top:70px;
    left:312px;
    color:#9aa5a9;
}

 .message
{   
    position:absolute;
    bottom:80px;
    left:312px;
    color:red;
}

.logo
{
     position:absolute;
     left:50px;
     top:80px;
}

.login,.login2{
	width:200px;
	border:1px solid #7fb5c1;
	height:22px;
	vertical-align:text-bottom;
	}
.login2{
	width:125px;
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