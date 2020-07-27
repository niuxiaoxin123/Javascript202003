import React,{Component} from "react";
import ReactDOM from "react-dom";
// 先导入属性校验模块
// create-react-app 生成项目自动安装这个校验模块
import PropTypes from "prop-types";
class Student extends React.Component{
    static propTypes={
        // 校验属性的对象；
        // 属性名就是行间传递过来的属性，属性值是该数据可以使用的数据类型
        a:PropTypes.number,
        name:PropTypes.string
        // PropTypes.bool
        // PropTypes.func
        // PropTypes.object
        // PropTypes.array
    }
    // static defaultProps={
    //     // 初始化一个属性的默认值
    //     // 当没有这个age属性时，会执行这个默认值；如果有这个属性，那么默认值就会被覆盖
    //     age:100
    // }
    // 在执行construtor之前，defaultProps已经被解析过了；
    constructor(props){
        super()
        console.log(props);
    }
    render(){
        // 传递过来的属性，是只读的，不可以直接修改
        // this.props.a=88;
        // console.log(this.props);
        // this.props.o={};
        this.props.o.str="很有钱";// 这样是可以的；不可以直接更改最外层的空间地址
        return <div>
            {this.props.age}{this.props.a}{this.props.o.str}
        </div>
    }
}
let obj = {num:1,str:{ww:0}}

 ReactDOM.render(<Student a={10} name="202003" o={obj}></Student>,document.querySelector("#root"));