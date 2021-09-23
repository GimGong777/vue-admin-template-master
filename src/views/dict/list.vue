<template>
  <div class="app-container">

    <div class="el-toolbar">
      <div class="el-toolbar-body" style="justify-content: flex-start;">
        <!-- 数据字典导出功能 -->
        <a href="http://localhost:8202/admin/cmn/dict/exportData" target="_blank">
          <el-button type="text">
            <i class="fa fa-plus">导出</i>
          </el-button>
        </a>
        <!-- 数据字典导入功能 -->
        <el-button type="text" @click="importData">
          <i class="fa fa-plus">导入</i>
        </el-button>
      </div>
    </div>

    <!-- 列表显示 -->
    <el-table
      :data="list"
      :load="getChildrens"
      :tree-props="{children: 'children', hasChilren: 'hasChilren'}"
      style="width: 100%;"
      row-key="id"
      border
      lazy>
      <el-table-column label="名称" width="230" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="编码" width="220">
        <template slot-scope="{row}">
          {{ row.dictCode }}
        </template>
      </el-table-column>

      <el-table-column label="值" width="230" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>

      <el-table-column label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>

    </el-table>

    <!-- 导入弹出层 -->
    <el-dialog :visible.sync="dialogImportVisiable" title="导入" width="480px">
      <el-form label-position="right" label-width="170px">
        <el-form-item label="文件">
          <el-upload
            :multiple="false"
            :on-success="onUploadSuccess"
            :action="'http://localhost:8202/admin/cmn/dict/importData'"
            class="upload-demo">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload-tip">只能上传excel文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>

      <div slot="footer" class="el-upload-footer">
        <el-button @click="dialogImportVisiable = false">
          取消
        </el-button>
      </div>

    </el-dialog>
  </div>
</template>

<script>
import dict from '@/api/dict'
export default {
  data() {
    return {
      dialogImportVisiable: false, // 设置弹窗是否弹出，false：不弹出
      list: [] // 数据字典列表
    }
  },

  // 页面渲染之前执行,调用方法
  created() {
    this.getDictList(1)
  },

  methods: {
    // 导出数据字典
    exportData() {
      window.location.href = 'http://localhost:8202/admin/cmn/dict/exportData'
    },

    // 导入数据字典
    importData() {
      this.dialogImportVisiable = true
    },

    // 上传成功调用
    onUploadSuccess() {
      // 关闭弹窗
      this.dialogImportVisiable = false
      // 刷新页面
      this.getDictList(1)
    },

    // 数据字典列表
    getDictList(id) {
      dict.dictList(id)
        .then(response => {
          // 将接口的返回值，填充到list列表
          this.list = response.data
        })
    },

    // 查询下属层级的内容
    getChildrens(tree, treeNode, resolve) {
      dict.dictList(tree.id)
        .then(response => {
          resolve(response.data)
        })
    }

  }
}
</script>

<style>
</style>
