import React, {Component} from 'react';
import "../css/01-index.css"
class Styletest extends Component{
    render(){
        let styleDiv = {
            color: "yellow",
            fontSize: '30px',
            backgroundColor:'pink'
        }
        return (
            <div>
                style-components
                <br/>

                <div style={styleDiv}>
                    {10+20}
                </div>
                <div className='active'> 我是activeclass</div>
            </div>
        );
    }
}

export default Styletest;