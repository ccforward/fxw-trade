<template>
  <div class="user-management">
    <el-card>
      <div class="header">
        <el-button type="primary" @click="openAddDialog">新增用户</el-button>
      </div>
      <el-table v-loading="loading" :data="userList" border>
        <el-table-column prop="name" label="用户名" width="180" />
        <el-table-column label="密码" width="220">
          <template #default="{ row, $index }">
            <el-text v-if="!showPassword[$index]">******</el-text>
            <el-text v-else>{{ row.password }}</el-text>
            <el-button
              size="small"
              @click="togglePassword($index)"
              :icon="showPassword[$index] ? 'Hide' : 'View'"
              style="float: right;"
            />
          </template>
        </el-table-column>
        <el-table-column label="角色">
          <template #default="{ row }">
            <el-tag :type="row.role === 100 ? 'danger' : 'primary'">
              {{ row.role === 100 ? '管理员' : '普通用户' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="openEditDialog(row)">
              修改
            </el-button>
            <el-button type="danger" size="small" @click="handleDelete(row.id)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 修改密码对话框 -->
    <el-dialog v-model="editDialogVisible" title="修改密码" width="500px">
      <el-form :model="editForm" :rules="editRules" ref="editFormRef">
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            v-model="editForm.newPassword"
            :type="showEditPassword ? 'text' : 'password'"
            placeholder="请输入新密码"
          >
            <template #suffix>
              <el-button
                link
                :icon="showEditPassword ? 'Hide' : 'View'"
                @click="showEditPassword = !showEditPassword"
              />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button :loading="editLoading" type="primary" @click="confirmEdit">确认修改</el-button>
      </template>
    </el-dialog>

    <!-- 新增用户对话框 -->
    <el-dialog v-model="addDialogVisible" title="新增用户" width="500px">
      <el-form :model="addForm" :rules="addRules" ref="addFormRef" label-width="auto" label-position="right">
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="addForm.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="addForm.password"
            :type="showAddPassword ? 'text' : 'password'"
            placeholder="请输入密码"
          >
            <template #suffix>
              <el-button
                link
                :icon="showAddPassword ? 'Hide' : 'View'"
                @click="showAddPassword = !showAddPassword"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            v-model="addForm.confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="请再次输入密码"
          >
            <template #suffix>
              <el-button
                link
                :icon="showConfirmPassword ? 'Hide' : 'View'"
                @click="showConfirmPassword = !showConfirmPassword"
              />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button :loading="editLoading" type="primary" @click="confirmAdd">确认创建</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { request } from '@/utils'

const loading = ref(false)
const editLoading = ref(false)
const addDialogVisible = ref(false)
const addForm = ref({ username: '', password: '', confirmPassword: '' })
const showAddPassword = ref(false) // 新增密码显示状态
const showConfirmPassword = ref(false) // 新增确认密码显示状态
const addFormRef = ref()
const addRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 1, message: '用户名至少1个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少6个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== addForm.value.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

// 打开新增对话框
const openAddDialog = () => {
  addForm.value = { username: '', password: '' }
  addDialogVisible.value = true
}

// 确认新增
const confirmAdd = async () => {
  await addFormRef.value.validate()
  try {
    editLoading.value = true
    const res = await request({
      path: '/api/users/create',
      data: {
        username: addForm.value.username.trim(),
        password: addForm.value.password.trim()
      }
    })
    if (res.success === false) {
      throw new Error(res.message)
    }
    ElMessage.success('用户创建成功')
    addDialogVisible.value = false
    fetchUsers()
  } catch (error) {
    console.error(error)
    ElMessage.error(error.message || '用户创建失败')
  } finally {
    editLoading.value = false
  }
}

const userList = ref([])
const showPassword = ref([])
const editDialogVisible = ref(false)
const editForm = ref({ id: '', newPassword: '' })
const showEditPassword = ref(false) // 新增修改密码显示状态
const editFormRef = ref()

const editRules = {
  newPassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' }
  ]
}

// 获取用户列表
const fetchUsers = async () => {
  try {
    loading.value = true
    const res = await request({ path: '/api/users/list' })
    if (res.success === false) {
      throw new Error(res.message)
    }
    userList.value = res.data
    showPassword.value = new Array(res.data.length).fill(false)
  } catch (error) {
    console.error(error)
    ElMessage.error(error.message || '获取用户列表失败')
  } finally {
    loading.value = false
  }
}

// 切换密码显示
const togglePassword = (index) => {
  showPassword.value[index] = !showPassword.value[index]
}

// 打开修改对话框
const openEditDialog = (user) => {
  editForm.value = { id: user.id, newPassword: '' }
  editDialogVisible.value = true
}

// 确认修改
const confirmEdit = async () => {
  await editFormRef.value.validate()
  try {
    editLoading.value = true
    const res = await request({
      path: '/api/users/update',
      data: {
        id: editForm.value.id,
        password: editForm.value.newPassword
      }
    })
    if (res.success === false) {
      throw new Error(res.message)
    }
    ElMessage.success('密码修改成功')
    editDialogVisible.value = false
    fetchUsers()
  } catch (error) {
    ElMessage.error(error.message || '密码修改失败')
  } finally {
    editLoading.value = false
  }
}

// 删除用户
const handleDelete = async (id) => {
  try {
    await ElMessageBox.confirm('确认删除该用户？', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })

    await request({
      path: '/api/users/delete',
      data: { id }
    })

    ElMessage.success('用户删除成功')
    fetchUsers()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('删除操作失败')
    }
  }
}

onMounted(fetchUsers)
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>