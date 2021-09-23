import request from '@/utils/request'
// 这个文件是调用后端接口
export default {

  // 医院设置列表
  getHospSetList(current, limit, searchObj) {
    return request({
      // 查询接口的路径
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      // 查询接口的方法
      method: 'post',
      // 调用后端接口需要传入的数据
      data: searchObj // 使用json传送数据
    })
  },

  // 删除医院设置
  deleteHospSet(id) {
    return request({
      // 删除接口的路径
      url: `admin/hosp/hospitalSet/${id}`,
      // 查询接口的方法
      method: 'delete'
    })
  },

  // 批量删除医院设置
  batchRemoveHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      // 查询接口的方法
      method: 'delete',
      data: idList
    })
  },

  // 锁定和取消锁定
  lockHospSet(id, status) {
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },

  // 添加医院设置
  saveHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },

  // 医院设置id查询
  getHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/getHospitalSet/${id}`,
      method: 'get'
    })
  },

  // 修改医院设置
  updateHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }
}
