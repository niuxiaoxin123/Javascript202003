// 当运行webpack,在当前项目需要这个webpack.config.js配置文件来配置webpack;
// webpack运行时基于node的；也就是这个js最后是在node环境下运行的；
// webpack的打包，压缩，编译这个规则都是通过这个webpack.config.js;
let  WebpackHtmlPlugin = require("html-webpack-plugin");
module.exports = {
    // production : 生产模式 压缩的代码
    mode:"development",// 开发模式 （不压缩）;
    // mode:"production",
    devtool:"eval-source-map",// 浏览器调试
    entry:__dirname+"/app/main.js",// 这个地方用绝对路径，webpack处理文件的入口
    output:{
        path:__dirname+"/public",//打包之后的文件存储的路径
        filename:"bundle.js"// 打包之后的js的文件名；
    },
    // 多入口和多出口配置方式
    // entry:{
    //     main:__dirname+"/app/main.js",
    //     greeter:__dirname+"/app/greeter.js"
    // },
    // output:{
    //     path:__dirname+"/public",
    //     filename:'[name].js'
    // }
    // contentBase:给该目录下的文件设置本地服务器；
    // port : 设置项目部署的服务器端口号
    // inline : 实时刷新;默认是true，如果是false，那么就不能自动刷新；
    // 当安装webpack-dev-server 有可能会把webpack和webpack-cli卸载掉；

    devServer:{
        contentBase:"./public",
        port:9090,
        inline:true,
        proxy:{// proxy 代理；用于跨域的配置；
            // "/api/user/list.json"
            "/api":{// 如果接口中含有api
                // 将要跨域请求的服务器地址
                target :"http://localhost:8080",
                secure :false//目标服务器是否是安全协议
            }
        }
    },
    // 当npm install安装时，默认安装的都是最新的；
    // loader: 是配置在module中
    module:{
        rules:[
            {
                test:/(\.js)$/,// 用正则匹配文件的后缀名，匹配到的文件需要用loader处理；
                // use:{
                //     loader:"babel-loader"
                // }
                use:["babel-loader"],//要使用的loader 
                exclude:"/node_modules/"// 这个文件夹下的js文件不需要loader来处理；
           },
            {
                test:/\.css$/,
                use:["style-loader","css-loader","postcss-loader"]
            },
            {
                test:/\.less$/,
                // 这个顺序不能调到，webpack从后往前依次进行解析，先用less-loader把less文件解析成css,css注入到js中，最后用style-loader创建style标签放入html中
                // 先用less-loader编译==> css-loader ==> style-loader
                use:["style-loader","css-loader","less-loader"]
            },
            {  
                // 优点：把图片通过webpack编译成base64格式的图片，减少了http请求；加快了页面的加载的时间；不会造成图片的缓存

                // url-loader 运行需要file-loader
                // 缺点： 数据量比较大；可读性不好；IE8不能用
                test:/(\.png|\.jpg|.gif)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        // limit: 限制意思
                        // 如果这张图片大于8192b,那么这张图片不再编译成base64；
                        // 1kb：1024b; 小于8Kb，要编译成base64
                        limit:8192
                        // 当代码要上线时，只需要把public这个文件夹下的文件部署到服务器；上线之前对文件进行处理 npm  run build
                        // 平常开发的时候，只需要npm  run server;
                    }
                }]
            }
        ]
    },
    // webpack都在这个属性里面；是一个数组；
    // HtmlWebpackPlugin : 根据提供html模板，自动生成一个打包后js会自动插入到index.html
    // webpack的插件
    // 在webpack配置文件中所有的属性名都不能更改
    // 
    plugins:[
        new WebpackHtmlPlugin({
            // template : 以哪个文件作为模板
            template:__dirname+"/index.html"
        })
    ]
}
// vue@cli   create-react-app