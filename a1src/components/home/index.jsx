import React,{Component} from "react";
import home from './index.module.css'

export default class Home extends Component{
    render(){
        return(
            <div className={home.title}>
                this is home component
            </div>
        )
    }
}