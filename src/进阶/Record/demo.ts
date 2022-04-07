
/*
  参考：
  https://blog.csdn.net/weixin_38080573/article/details/92838045

  源码：
  // Construct a type with a set of properties K of type T
  // 将K中的每个属性([P in K]),都转为T类型
  // 常用格式： type proxyKType = Record<K,T>
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
*/

// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
// http://ts.xcatliu.com/advanced/string-literal-types.html
type petsGroup = 'dog' | 'cat' | 'fish'; 
interface IPetInfo {
  name:string,
  age:number
}

// 将petsGroup中的每个值(‘dog’ | ‘cat’ | ‘fish’)都转为 IPetInfo 类型。
type IPets = Record<petsGroup,IPetInfo>;

const animalsInfo:IPets = {
  dog:{
    name:'dog',
    age:10
  },
  cat:{
    name:'cat',
    age:2
  },
  fish:{
    name:'fish',
    age:1
  }
}


// 在第一个参数后追加额外的值
type IPetsPlus = Record<petsGroup | 'duck',IPetInfo>
const aminals:IPetsPlus={
  dog:{
    name:'dog',
    age:10
  },
  cat:{
    name:'cat',
    age:2
  },
  fish:{
    name:'fish',
    age:1
  },
  duck:{
    name:'duck',
    age:4
  }
}