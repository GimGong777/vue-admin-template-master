import request from '@/utils/request'

const api_name = '/admin/order/orderInfo'

export default {

  // 获取订单并分页
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  // 获取状态列表
  getStatusList() {
    return request({
      url: `${api_name}/getStatusList`,
      method: 'get'
    })
  },

  // 根据id获取订单
  getById(id) {
    return request({
      url: `${api_name}/show/${id}`,
      method: 'get'
    })
  }

}
