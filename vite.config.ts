import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// 解决vite3+不能使用require问题引入的包
import autoprefixer from "autoprefixer";

import postCssPxToRem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
  // 创建新的插件再去配置这里
  plugins: [vue()],
  resolve:{
    // 配置别名
    alias:{
      '@':resolve(__dirname,'src'),

    },
    // 配置扩展名
    extensions:['.js','.ts','.jsx','.tsx','.json','.vue','.mjs']
  },
  // vite 中使用 less/scss/sass/stylus 等 css 预处理器, 直接进行安装，不用像 webpack 那样安装 loader 和配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/global-scss-var.scss" as *;`,
      },
    },
    // vite 中已集成了 postcss
    // https://vitejs.cn/config/#css-postcss
    postcss: {
      plugins: [autoprefixer({
        overrideBrowserslist: [
          'Android 4.1',
          'iOS 7.1',
          'Chrome > 31',
          'ff > 31',
          'ie >= 8',
          '> 1%',
        ],
        grid: true,
      }), {
        // 去除警告: [WARNING] "@charset" must be the first rule in the file
        postcssPlugin: 'internal:charset-removal',
        AtRule: {
          charset: (atRule) => {
            if (atRule.name === 'charset') {
              atRule.remove();
            }
          }
        }
      }, postCssPxToRem({ // 尺寸的适配
          rootValue: 100, // (设计稿/10）1rem的大小 (详见: global.scss中 html{font-size: 26.6666666vw;})
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
          exclude: /node_modules/i,
      })],
    },
  },
  server: {
    port: 9999
  }
})
