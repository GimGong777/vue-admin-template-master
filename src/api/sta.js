import request from '@/utils/request'

const api_name = '/admin/statistics'

export default {

  // 获取订单并分页
  getCountMap( searchObj) {
    return request({
      url: `${api_name}/getCountMap`,
      method: 'get',
      params: searchObj
    })
  },
}
