//插件模块
import axios from 'axios'
const myHttpServer = {}
myHttpServer.install = (Vue) => {
  axios.default.baseURL = ''
  //  添加实例方法
  Vue.prototype.$http = axios
}
export default myHttpServer
