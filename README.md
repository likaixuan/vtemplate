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

## 引用静态资源

``` javascript
<img :src="host+图片相对地址"></img>

```
## 组件文档

### header(已完成)
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

### footer(已完成)
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
### container(已完成)
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
### swipe (已完成)
> 引用的 [vue-swipe](https://github.com/ElemeFE/vue-swipe)

### lodding(已完成)
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
### toast(已完成、文档待更)
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
 * @event drop 下拉到底时 触发此事件 
 *
 * @example
 *
  import toast from "xxx/toast/"
  Vue.use(toast)
  //组件自身调用
  toast.toast({text:"你好啊"});
   //Vue实例调用
  this.toast({text:"你好啊",timer:4000});
 *
 */

```
