import request from '../utils/request'

export const getMenus = () => {
  return request({
    method: 'GET',
    url: '/menus'
  })
}
