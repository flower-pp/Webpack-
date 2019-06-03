//webpack配置文件
//依赖node中的path模块
const path = require('path')

//定义一个默认的模块对象
module.exports = {
    //指定入口文件的位置
    entry:'./src/index.js',
    //设置输出结果
    output:{
        path:path.resolve(__dirname,'dist'),
        //文件
        filename:"bundle.js"
    },
    mode:'development'
}
