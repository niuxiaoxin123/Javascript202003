import React from "react";
import PropTypes from "prop-types";
class Title extends React.Component{
    constructor(){
        super();
    }
    static contextTypes={
        num:PropTypes.number
    }
    render(){
        return <div>
             {this.context.num}
        </div>
    }
}
export default Title;