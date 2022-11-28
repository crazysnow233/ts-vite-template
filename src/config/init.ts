import app from "./app";
import Tools from "@/utils/Tools";

// 给windows挂载全局对象。对挂载的key进行一定的限定
// 声明全局变量相关的类型
type IGlobalVarsKey = "app" | "lpk" | "Tools" | "Ajax"
type IGlobalVars = {
  [key in IGlobalVarsKey]?:any
}

const iGlobalVars : IGlobalVars = {
  app, // 全局应用对象，包含一些全局数据与操作的方法
  Tools, // 全局工具库对象，其中包含一些公用方法
}

Object.keys(iGlobalVars).forEach((stKey)=>{
  (window as any)[stKey as IGlobalVarsKey] = iGlobalVars[stKey as IGlobalVarsKey]
})

export const initApp = async ()=>{

}

