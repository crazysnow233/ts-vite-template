import sysCfg,{ISysCfg,ISysCfgBModItem} from "./sysfg";
const app = {
  // 获取系统配置信息
  getConfig<T>(key: keyof ISysCfg):T{
    return sysCfg[key] as unknown as T
  },

  // 判断是否启用了对应的业务模块
  checkBmodIsEnable(stModuleName:string){
    // 拿到业务模块的列表
    const bmodNames:ISysCfgBModItem[] = app.getConfig<ISysCfgBModItem[]>("bmodNames")
    // 去列表里遍历是否有这个名字，且开启的
    if (bmodNames.find(item=>item.name==stModuleName&&item.enable)) {
      return true
    }
    return false
  }
}
// 然后想把app这个对象绑定到windows上。去创建一个global.d.ts文件

// const result:boolean = app.checkBmodIsEnable("blog")

export type IApp = typeof app

export default app