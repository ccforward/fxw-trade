<template>
  <div class="order-management">
    <el-card>
      <!-- 查询表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="创建人">
          <el-input v-model="queryForm.createUserId" placeholder="输入用户名" clearable />
        </el-form-item>
        <el-form-item label="日期范围">
          <el-date-picker
            v-model="queryForm.dateRange"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        <el-form-item label="状态">
          <el-select style="width: 100px;" v-model="queryForm.status" placeholder="全部" clearable>
            <el-option label="待收款" :value="1" />
            <el-option label="已收款" :value="10" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchOrders">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="openAddDialog">新增订单</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据表格 -->
      <el-table
        v-loading="loading"
        :data="orderList"
        border
        style="width: 100%"
      >
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="createUserName" label="创建人" width="120" />
        <el-table-column prop="date" label="日期" width="120" />
        <el-table-column prop="clientName" label="客户名称" width="150" />
        <el-table-column prop="invoiceNumber" label="发票号" width="120" />
        <el-table-column prop="contractNumber" label="合同号" width="120" />
        <el-table-column prop="cargoDetail" label="货物明细" min-width="200" />
        <el-table-column prop="accountsReceivable" label="应收货款" width="120">
          <template #default="{ row }">{{ row.accountsReceivable }}</template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 10 ? 'success' : 'warning'">
              {{ row.status === 10 ? '已收款' : '待收款' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template #default="{ row }">
            <el-button
              :type="row.status=== 10 ? 'info' : 'primary'"
              size="small"
              @click="updateOrderStatus(row)"
              :disabled="row.status === 10"
            >
              {{ row.status === 10 ? '已完成' : '标记收款' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新增订单对话框 -->
    <el-dialog v-model="addDialogVisible" title="新增订单" width="600px">
      <el-form
        :model="addForm"
        :rules="addRules"
        ref="addFormRef"
        label-width="100px"
      >
        <el-form-item label="客户名称" prop="clientName">
          <el-input v-model="addForm.clientName" placeholder="输入客户名称" />
        </el-form-item>
        <el-form-item label="发票号" prop="invoiceNumber">
          <el-input v-model="addForm.invoiceNumber" placeholder="输入发票号码" />
        </el-form-item>
        <el-form-item label="合同号" prop="contractNumber">
          <el-input v-model="addForm.contractNumber" placeholder="输入合同编号" />
        </el-form-item>
        <el-form-item label="货物明细" prop="cargoDetail">
          <el-input
            v-model="addForm.cargoDetail"
            type="textarea"
            :rows="3"
            placeholder="输入货物详细信息"
          />
        </el-form-item>
        <el-form-item label="应收货款" prop="accountsReceivable">
          <el-input
            v-model="addForm.accountsReceivable"
            placeholder="输入金额"
          />
        </el-form-item>
        <el-form-item label="日期" prop="date">
          <el-date-picker
            v-model="addForm.date"
            type="date"
            placeholder="选择日期"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button :loading="addLoading" type="primary" @click="confirmAdd">
          确认新增
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { request } from '@/utils'
import dayjs from 'dayjs'

// 查询相关
const loading = ref(false)
const queryForm = ref({
  createUserId: '',
  dateRange: [
    dayjs().subtract(10, 'day').format('YYYY-MM-DD'),
    dayjs().format('YYYY-MM-DD')
  ],
  status: 1
})
const orderList = ref([])

// 新增相关
const addDialogVisible = ref(false)
const addLoading = ref(false)
const addForm = ref({
  clientName: '',
  invoiceNumber: '',
  contractNumber: '',
  cargoDetail: '',
  accountsReceivable: '',
  date: dayjs().format('YYYY-MM-DD'),
  status: 1
})
const addFormRef = ref()
const addRules = {
  clientName: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
  invoiceNumber: [{ required: true, message: '请输入发票号', trigger: 'blur' }],
  accountsReceivable: [
    { required: true, message: '请输入应收金额', trigger: 'blur' }
  ],
  date: [{ required: true, message: '请选择日期', trigger: 'change' }]
}

// 获取订单列表
const fetchOrders = async () => {
  try {
    loading.value = true
    const params = {
      startDate: queryForm.value.dateRange[0],
      endDate: queryForm.value.dateRange[1],
      ...queryForm.value
    }
    delete params.dateRange

    const res = await request({
      path: '/api/orders/list',
      method: 'post',
      data: params
    })
    // 修改日期格式
    if (res.success) {
      orderList.value = res.data.map(order => {
        order.date = dayjs(order.date).format('YYYY-MM-DD')
        return order
      })
    }
  } catch (error) {
    ElMessage.error(error.message || '获取订单失败')
  } finally {
    loading.value = false
  }
}

// 查询操作
const searchOrders = () => {
  fetchOrders()
}

// 新增订单
const openAddDialog = () => {
  addDialogVisible.value = true
}

const confirmAdd = async () => {
  await addFormRef.value.validate()
  try {
    addLoading.value = true
    await request({
      path: '/api/orders/add',
      method: 'post',
      data: addForm.value
    })
    ElMessage.success('订单创建成功')
    addDialogVisible.value = false
    fetchOrders()
  } catch (error) {
    ElMessage.error(error.message || '订单创建失败')
  } finally {
    addLoading.value = false
  }
}

// 更新状态
const updateOrderStatus = async (row) => {
  try {
    await ElMessageBox.confirm('确认标记为已收款？', '操作确认', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })

    await request({
      path: '/api/orders/updateStatus',
      method: 'post',
      data: {
        id: row.id,
        status: 10
      }
    })

    ElMessage.success('状态更新成功')
    fetchOrders()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('状态更新失败')
    }
  }
}

onMounted(() => {
  fetchOrders()
})
</script>

<style scoped>
.order-management {
  padding: 20px;
}
.header {
  margin-bottom: 20px;
}
.search-form {
  margin-bottom: 20px;
}
</style>