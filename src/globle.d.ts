import { Tools } from '@/utils/Tools';
// 以模块的形式进行管理
import { IApp } from "@/config/app";
import { ITools } from "@/utils/Tools";

declare global{
  declare namespace GlobalType{
    type Ikey = string | number;
    type IRecord = Record<Ikey,any>;
  }
  const app:IApp
  const Tools:ITools
  interface Window{
    app:IApp; // 全局app对象挂载一些全局数据与操作方法
    Tools:ITools // 全局工具库对象，其中包含一些公用方法
  }

}

// https://vuejs.org/api/utility-types.html#componentcustomproperties
// 为了让<template>中的lpk在typescript环境不会报错，还需要增加下面声明
// 注意：该声明必须放置在modules中，否则就会覆盖全局类型，而不是增强全局类型
declare module 'vue'{
  interface ComponentCustomProperties{
    app:IApp;
    Tools:ITools;
  }
}

export{

}