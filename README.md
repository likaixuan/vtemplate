# vtemplate

> 基于vue-cli的移动端项目模板(配置、组件)

## install

``` bash
npm install
```
## dev

> 1.将config.js中的ISDEV重置为true <br/>

> 2.将host重置为接口服务器地址 <br/>

> 3.npm run dev （http://localhost:4444） 

## build

> 1.将config.js中的ISDEV重置为false <br/>

> 2.pc端：将host重置为""、移动端：将host重置为接口服务器地址 <br/>

> 3.npm run build <br/>


## 布局
> 1.采用rem  <br/>
> 2.引入 library.scss   <br/>
> 3.默认使用640w设计图（修改library.scss中的rem函数即可更改尺寸）  <br/>
> 4.案例  <br/>
```
@import "xxx/library.scss "
button {
    width:rem(80);//80为设计图上button像素值，调用library中的rem方法会自动转换为rem
}
```

## 引用静态资源

``` javascript
<img :src="host+图片相对地址"></img>

```
## 组件文档

> 建议注册时 在components.js 中去全局注册、统一管理

### header
``` javascript
/**
 * 
 * @param {Boolean} fixed - 是否固定在顶部
 *
 * @example
 *
 <zf-header fixed>
    <div slot="left">返回</div>
    <div>
        vtemplate
    </div>
    <div slot="right">前进</div>
 </zf-header>
 *
 */

```

### footer
``` javascript
/**
 *
 * @example 
 *
 <zf-footer>
    <router-link tag="div" to="/" replace>
        <i class="iconfont">&#xe604;</i>
        <div>list1</div>
    </router-link>
    <router-link tag="div" to="/common" replace>
        <i class="iconfont">&#xe669;</i>
        <div>list2</div>
    </router-link>
    <router-link tag="div" to="/personal" replace>
        <i class="iconfont">&#xe66e;</i>
        <div>list3</div>
    </router-link>
</zf-footer>
 *
 */

```
### cell
``` javascript
/**
 * @param {String} title 标题
 *
 * @param {String} label 次要文本
 *
 * @param {String} to 路由跳转
 * @param {slot} 默认分发到右侧 一般为图标
 * @example 
 *
  <zf-cell title="十三亿人都震惊了" label="北京欢迎你" to="/">
      <i class="iconfont"> &#xe642; </i>
  </zf-cell>
 *
 */

```

### container
``` javascript
/**
 *
 * @param {Bolean} scroll 是否开启内部滚动条
 *
 * @param {Bolean} top 是否距上方有一个header的top值
 *
 * @param {Bolean} bottom 是否距下方有一个footer的bottom值
 *
 * @param {Bolean} drop 是否开启下拉加载
 *
 * @param {Number} distance 下拉至底部的阀值
 *
 * @param {Object} styles 自定义样式
 *
 * @event drop 下拉到底时 触发此事件 
 *
 * @example
 *
  <zf-container top bottom scroll>
         <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
   </zf-container>
 *
 */

```
### swipe (非原创)
> 引用的 [vue-swipe](https://github.com/ElemeFE/vue-swipe)

### lodding
``` javascript
/**
 *
 * @param {Bolean} [mask=true] 是否显示遮罩
 *
 * @param {String} [text="加载中···"] 提示文字 不显示遮罩时默认隐藏显示文字
 *
 * @param {Number} [timer=100000] 无关闭lodding操作时 timer毫秒自动关闭
 *
 *
 * @event drop 下拉到底时 触发此事件 
 *
 * @example
 *
  import loading from "xxx/loading/"
  Vue.use(loading)
  //默认方式
  loading.open();
   //可传参
  loading.open({text:"加载呢"，timer:3000});
 *
 */

```
### toast
``` javascript
/**
 *
 * @param {String} location ["top","center","bottom"] 显示位置
 *
 * @param {String} text 提示文字 
 *
 * @param {Number} [timer=3000] timer 毫秒后关闭
 *
 *
 * @example
 *
  import toast from "xxx/toast/"
  Vue.use(toast)
  //组件自身调用
  toast.open({text:"你好啊"});
   //Vue实例调用
  this.toast({text:"你好啊",timer:4000});
 *
 */

```
