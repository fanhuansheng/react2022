import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Checkbox,Button,Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import List from './index.module.css'
export default class index extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeState: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    state = {
        mouseIndex: 0
    }
    changeState = (index)=>{
        return (e)=>{

            console.log(`checked = ${e.target.checked},-----${index}`);
            // const preList = this.state.listObj
            // preList[index].checkVal = e.target.checked
            // this.setState(
            //     {listObj: preList}
            // )
            this.props.changeState(index)
        }
    }
    delList = (index)=>{
        return ()=>{           
            this.props.deleteTodo(index)
        }
    }
    handleMouse=(flag,index)=>{
        return(
            ()=>{
                let mouseIndex = -1
                mouseIndex = flag ? index : -1
                this.setState({
                    mouseIndex
                })
            }
        )
    }
    render() {
        const {todos} = this.props
        // console.log(todos);
        const {mouseIndex} = this.state
        return (
            todos.length>0? <div>
                {
                    todos.map((item,index)=>{
                        return (
                            <div className="flex a_center m10" key={item.id} 
                                onMouseEnter={this.handleMouse(true,index)}
                                onMouseLeave={this.handleMouse(false,index)}
                                style={{backgroundColor: mouseIndex === index ? '#ddd' : '#fff'}}
                            >
                                <Checkbox checked={item.checkVal} onChange={this.changeState(index)}></Checkbox>
                                <div className={List.list_txt}>{item.txt}</div>
                                
                                <Popconfirm 
                                    title="确认删除吗？"
                                    icon={<DeleteOutlined style={{ color: 'red' }} />}
                                    onConfirm={this.delList(index)}
                                    okText="确认"
                                    cancelText="取消"
                                    style={{display : mouseIndex === index ? 'block' : 'none' }}
                                >
                                    <Button 
                                        type="primary"
                                        icon={<DeleteOutlined />} danger 
                                        style={{display:mouseIndex===index?'block':'none',height:'22px'}}></Button>
                                </Popconfirm>
                            </div>)
                    })
                }
                
            </div> : <div>暂无数据</div>

        )
    }
}
