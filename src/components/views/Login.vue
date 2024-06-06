<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-tabs v-model="currentName" stretch @tab-click="handletabsClick">
        <el-tab-pane label="登录" name="login">
          <el-form
            :model="loginForm"
            status-icon
            ref="loginForm"
            :rules="rules"
          >
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="loginForm.username" />
            </el-form-item>
          </el-form>
          <el-form
            :model="loginForm"
            status-icon
            ref="loginForm"
            :rules="rules"
          >
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="loginForm.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')"
                >登录</el-button
              >
              <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form
            :model="registerForm"
            status-icon
            ref="registerForm"
            :rules="rules"
          >
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="registerForm.username" />
            </el-form-item>
          </el-form>
          <el-form
            :model="registerForm"
            status-icon
            ref="registerForm"
            :rules="rules"
          >
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="registerForm.password" />
            </el-form-item>
            <el-form-item
              label="确认密码"
              label-width="80px"
              prop="confirmedPassword"
            >
              <el-input
                type="password"
                v-model="registerForm.confirmedPassword"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')"
                >注册</el-button
              >
              <el-button @click="resetForm('registerForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    // 验证规则
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 6) {
        callback(new Error("用户名的长度不够！"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateconfirmedPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入的密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      currentName: "login",
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
        confirmedPassword: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        confirmedPassword: [
          { validator: validateconfirmedPassword, trigger: "blur" },
        ],
      },
      activeTab:"login",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            if (this.activeTab === "login") console.log(this.loginForm);
            else console.log(this.registerForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handletabsClick(tab) {
      console.log(tab.name);
      this.activeTab = tab.name
    },
  },
};
</script>

<style scoped lang="less">
.login {
  width: 1000px;
  margin: 0 auto;
  .box-card {
    width: 500px;
    margin: 100px auto;
    border-radius: 15px;
    background: rgba(255, 255, 255, .8);
  }
}
</style>
<