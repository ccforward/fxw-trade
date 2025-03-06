<template>
  <div>
    <div class="layout-container" v-if="!isLoginPage">
      <el-aside width="180px">
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="logo" class="logo" />
          <h1 class="title">Panda</h1>
        </div>
        <el-menu :default-active="activeMenu" class="menu" router>
          <el-menu-item v-for="item in menuItems" :key="item.path" :index="item.path">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-right">
            <el-dropdown @command="handleCommand">
              <div class="el-dropdown-link">
                <span class="header-username">{{ userName }}</span>
                <el-icon>
                  <ArrowDown />
                </el-icon>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { request, hasLogin, getUser, deleteCookie } from '@/utils/index'
const route = useRoute()
const router = useRouter()

// 菜单数据
const menuItems = ref([
  { title: '订单列表', path: '/orders', icon: 'WalletFilled' },
])
const userName = ref('')
const activeMenu = computed(() => route.path)
const isLoginPage = computed(() => route.path === '/login')

const handleCommand = async (command) => {
  if (command === 'logout') {
    deleteCookie('panda_user_role')
    deleteCookie('panda_user_name')
    await request({
      path: '/user/logout',
    })
    router.push('/login')
  }
}

const checkAuth = () => {
  router.beforeEach((to, from, next) => {
    const whiteList = ['/login',]
    if (whiteList.includes(to.path)) {
      next()
      return
    }
    if (!hasLogin()) {
      next('/login')
      return
    }
    // 获取并存储用户角色
    const { role, name } = getUser()
    if (role && name) {
      userName.value = decodeURIComponent(name)
    }
    if (role >= 100) {
      const hasUserMenu = menuItems.value.some(item => item.path === '/users')
      if (!hasUserMenu) {
        menuItems.value.push({ title: '用户管理', path: '/users', icon: 'User' })
      }
    }
    next()
  })
}

onBeforeMount(() => {
  checkAuth()
})
</script>

<style scoped lang="less">
.layout-container {
  height: 100vh;
  display: flex;

  .el-aside {
    background-color: #fff;
    border-right: 1px solid #e6e6e6;

    .logo-container {
      height: 60px;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #e6e6e6;

      .logo {
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }

      .title {
        color: #1a1a1a;
        font-size: 20px;
        font-weight: 600;
        margin: 0;
      }
    }

    .menu {
      border-right: none;

      :deep(.el-menu-item) {
        height: 50px;
        line-height: 50px;

        &:hover,
        &.is-active {
          background-color: #f0f7ff;
          color: #409eff;
        }

        .el-icon {
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }
  }

  .el-header {
    background-color: #fff;
    border-bottom: 1px solid #dcdfe6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
  }

  .header-right {
    .el-dropdown-link {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #333;
    }
    .header-username {
      margin-right: 5px;
      font-size: 15px;
      font-weight: bold;
    }
  }
}
</style>