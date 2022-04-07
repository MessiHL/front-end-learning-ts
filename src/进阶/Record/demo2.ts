/**
 * 定义一个对象的 key 和 value 的类型
 * 參考: https://www.jianshu.com/p/ff5ee22b2053
 */

interface PageInfo{
  title:string,
  url:string,
  isShow?:boolean
}

type Page = 'home' | 'about' | 'main';

// Record 后面的泛型就是对象键和值的类型。
// K可以是联合类型、对象、枚举…
// 为每一个key（Page中的 home、about、main）对应的value设置类型为PageInfo
const nav:Record<Page,PageInfo> = {
  home: {title:'home',url:""},
  about: {title:'about',url:""},
  main: {title:'main',url:""}
}

/**
 * 输出： {
    home: { title: 'home' },
    about: { title: 'about' },
    main: { title: 'main' }
  }
 */
console.log(nav);


// 比如我需要一个对象，有 ABC 三个属性，属性的值必须是数字
type keys = 'A' | 'B' | 'C'
const obj:Record<keys,number> = {
  A:1,
  B:2,
  C:3
}