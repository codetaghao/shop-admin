import Vue from 'vue'
// 按需导入elementUI组件
import {
  Button,
  Select,
  Input,
  Form,
  FormItem,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Submenu
} from 'element-ui'

// 导入elementUI组件库样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)

Vue.prototype.$message = Message
