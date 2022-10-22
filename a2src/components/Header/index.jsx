import React, { Component } from 'react'
import PropTypes from "prop-types"
import {nanoid} from 'nanoid'


export default class index extends Component {
    
    static propTypes = {
        addTodos: PropTypes.func.isRequired
    }

    setValue = (e)=>{
        const {keyCode,target} = e
        if(keyCode !== 13) return
        // console.log(target.value);
        if(target.value === '') return
        const obj = {
            id: nanoid(),
            checkVal: false,
            txt: target.value
        }
        this.props.addTodos(obj)
        target.value = ""

    }
    render() {
        return (
            <div className="to_do_list mgl10">
                <input type="text" placeholder="请输入" onKeyUp={this.setValue}/>
            </div>
        )
    }
}
