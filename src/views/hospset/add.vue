<template>
  <div class="app-container">
    医院设置添加
    <el-form label-width="120px">
      <el-form-item label="医院名称">
        <el-input v-model="hospitalSet.hosname" />
      </el-form-item>

      <el-form-item label="医院编号">
        <el-input v-model="hospitalSet.hoscode" />
      </el-form-item>

      <el-form-item label="api基础路径">
        <el-input v-model="hospitalSet.apiUrl" />
      </el-form-item>

      <el-form-item label="联系人姓名">
        <el-input v-model="hospitalSet.contactsName" />
      </el-form-item>

      <el-form-item label="联系人手机">
        <el-input v-model="hospitalSet.contactsPhone" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import hospSet from '@/api/hospSet'
export default {

  data() {
    return {
      hospitalSet: {}
    }
  },

  // 在页面渲染之前就执行了
  created() {
    // 获取路由的id值
    // 调用接口得到医院设置信息
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getHostSet(id)
    } else {
      // 把表单数据清空
      this.hospitalSet = {}
    }
  },

  methods: {
    // 根据id查询医院设置
    getHostSet(id) {
      hospSet.getHospSet(id)
        .then(response => {
          this.hospitalSet = response.data
        })
    },

    // 添加
    save() {
      hospSet.saveHospSet(this.hospitalSet)
        .then(response => {
          // 提示添加成功
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转到列表页面,使用路由调用方式
          this.$router.push({
            path: '/hospSet/list'
          })
        })
    },

    // 修改
    update() {
      hospSet.updateHospSet(this.hospitalSet)
        .then(response => {
          // 提示添加成功
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          // 跳转到列表页面,使用路由调用方式
          this.$router.push({
            path: '/hospSet/list'
          })
        })
    },

    saveOrUpdate() {
      // 判断是添加还是修改
      if (!this.hospitalSet.id) { // 没有id，添加
        this.save()
      } else { // 有id，修改
        this.update()
      }
    }
  }
}
</script>

<style>
</style>
