// 详细配置参考 postcss-pxtorem 仓库文档
module.exports = {
    "plugins": {
      "postcss-pxtorem": {
        rootValue: 37.5, // Vant 官方根字体大小是 37.5
        propList: ['*'],
        selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行 rem 转换（或者使用大写的 PX 作为单位也不会被转换）
      }
    }
  }
  