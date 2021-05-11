# Other

> <a href="https://github.com/CB279/vue-3-cb-validate">validate</a>

> <a href="https://github.com/CB279/vue-3-cb-alert">alert</a>

> <a href="https://github.com/CB279/vue-3-cb-modal">modal</a>

> <a href="https://github.com/CB279/vue-3-cb-datepicker">datepicker</a>

> <a href="https://github.com/CB279/vue-3-cb-select">select</a>

> <a href="https://github.com/CB279/vue-3-cb-sidenav">sidenav</a>

> <a href="https://github.com/CB279/vue-3-cb-paginate">paginate</a>

## Development

npm install @vue-cb/grid

## Config

```js
import grid from "@vue-cb/grid";

createApp(app).use(grid);
```

## Usage

```html
<v-gird
    xs="1fr"
    sm="1fr 1fr"
    md="1fr 1fr 1fr"
    lg="1fr 1fr 1fr 1fr"
    xl="1fr 1fr 1fr 1fr 1fr"
    gap="15px"
>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>grid size : {{ __GIRD__.size }}</div>
</v-gird>
```

## Props

| name | value  | default |
| ---- | ------ | ------- |
| xs   | string | -       |
| sm   | string | -       |
| md   | string | -       |
| lg   | string | -       |
| xl   | string | -       |
| gap  | string | -       |

## 📑 License

[MIT License](./LICENSE)
