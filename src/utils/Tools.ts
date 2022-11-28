import  cookies from 'js-cookie';
const iTools = {
  Router:{ // 路由操作命名空间
  },
  Store:{ // 状态管理操作命名空间

  },
  LocalStorage:{ // 本地存储操作命名空间
    setItem(key:string,value:any){
      localStorage.setItem(key,JSON.stringify(value))
    },
    getItem(key:string){
      const strValue = localStorage.getItem(key)
      try{
        return JSON.parse(strValue as string)
      }catch(e){
        return strValue
      }
    },
    removeItem(key:string){
      localStorage.removeItem(key)
    }
  },
  Cookies:{ // cookies操作命名空间
    setItem(key:string,value:any){
      cookies.set(key,value,{expires:30})

    },
    getItem(key:string,defaultValue:any){
      const strValue = cookies.get(key) || defaultValue
      try{
        return JSON.parse(strValue)
      }catch(e){
        return strValue
      }
    },
    removeItem(key:string){
      cookies.remove(key)
    }
  },
  Time:{ // 日期时间操作命名空间

  },
  Dom:{// Dom元素操作命名空间

  }
}
export type ITools = typeof iTools

export default iTools