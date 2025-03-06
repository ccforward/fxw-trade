<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-box">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
      </div>
      <h2>
        系统登录
      </h2>
      <el-form v-loading="loading" :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" size="large" placeholder="用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" size="large" type="password" placeholder="密码" show-password>
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="handleLogin" style="width: 100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { request, setCookie, hasLogin } from '@/utils'
import { ElMessage } from 'element-plus'

const router = useRouter()
const loading = ref(false)
const formRef = ref()
const form = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [{ required: true, message: '输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '输入密码', trigger: 'blur' }]
}

const handleLogin = async () => {
  if (!formRef.value) return
  await formRef.value.validate()
  loading.value = true
  const ret = await request({
    path: '/user/login',
    data: {
      username: form.username.trim(),
      password: form.password.trim()
    }
  })
  if (ret.success) {
    // const { uid, name, role } = ret
    // setCookie('panda_user_uid', uid)
    // setCookie('panda_user_role', role)
    // setCookie('panda_user_name', encodeURIComponent(name))
    router.replace('/')
  } else {
    ElMessage.error(ret.message)
  }
  loading.value = false
}

onBeforeMount(() => {
  if (hasLogin()) {
    router.push('/')
    return
  }
})
</script>

<style scoped lang="less">
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 8s ease infinite;
  .logo-box {
    text-align: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .login-box {
    width: 500px;
    padding: 40px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 2px 5px 20px 5px rgb(0 0 0 / 41%);

    h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #303133;
    }
  }
}
</style>