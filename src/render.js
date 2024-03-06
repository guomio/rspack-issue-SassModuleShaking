import styles from './render.module.css';

/**
 * 如果不打开下边这行注释, 添加类名一句会构建为 `e.classList.add(r.f)`, 导致 `r.f` 为空值
 * 如果打开这行注释, 构建结果是符合期望的 `e.classList.add(r.text)`
 */
// console.log(styles);

export function render() {
    const el = document.createElement('div')
    el.classList.add(styles.text)
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}