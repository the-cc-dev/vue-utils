# vue-utils

A simple utils library for Vue.js

The idea behind this library is just to provide the ability to auto include some utils for common tasks in vue like fading between pages or scrolling to top between routes.

We want to tuck away all this functionality and just have it ready to go in our apps.


## Install

With default options just set an array.

```
Vue.use(require('vue-utils'), ['pageTop', 'pageFade']);
```

Or

```
Vue.use(require('vue-utils'), {
    pageTop:  {key: 'someKey'},
    pageFade: {duration: 1000}
});
```


## Utils


### `pageFade`

A programmatic fade transition for pages. This was originally designed with the idea of tabs within a page in mind. So that the tabs are separate routes/components but behave more like they are on the same page.

**NOTE:** There is one caveat here, once you set a transition for a certain `route` level you will need to then set a transition for ALL routes at that level.

Setting a transition is just like setting any transition in Vue.

```
<div transition="page-fade-both"></div>
```

There are four available fade transitions. Just make sure they are set at the component templates root element.

```
<div transition="page-fade-both"></div>
<div transition="page-fade-in"></div>
<div transition="page-fade-out"></div>
<div transition="page-fade-none"></div>
```


### `pageTop`

One thing with Vue.js is that when components load in and out between routes the scroll bar doesn't change position. We most likely want to scroll to the top of the page for new (main) routes.

Once you add this it will automatically scroll to the top of the page based on a route group which can be set in your route mappings.

The default value in the routes file will be called `scrollTop` for setting groups.

```
...

'/tabs': {
    pageTop: {group: 'tabs-test'},
    component: require('./components/pages/tabs/Index.vue'),
    subRoutes: {
        '/': {
            component: require('./components/pages/tabs/One.vue'),
        },
        '/two': {
            component: require('./components/pages/tabs/Two.vue'),
        },
        '/three': {
            component: require('./components/pages/tabs/Three.vue'),
        }
    }
}
...
```

Any routes in the same `group` will NOT scroll to top. Only routes between DIFFERENT groups will scroll to the top.