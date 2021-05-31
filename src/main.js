import { createApp } from 'vue'
import store from './store'
import { Button } from 'vant';
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'; // 全局引入样式
import './index.css'

const app = createApp(App) // 创建实例

app.use(Button) // 注册组件
app.use(router)
app.use(store)

app.mount('#app')
