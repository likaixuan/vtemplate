# vtemplate

> 基于vue-cli的移动端项目模板(配置、组件)

## 安装运行打包

``` bash
# install dependencies
npm install

# http://localhost:4444
npm run dev

# build for production with minification
npm run build

```
## 组件用法

### header(已完成)
``` html
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
``` html
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
``` html
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
### lodding(已完成、文档待更)
### toast(已完成、文档待更)
