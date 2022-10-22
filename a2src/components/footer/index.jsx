import React, { Component } from 'react'
import { Checkbox,Button,Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default class index extends Component {
    
    changeCheckbox = (e)=>{
        // console.log(e.target.checked);
        this.props.changeAllCheck(e.target.checked)
    }

    delAllList=()=>{
        console.log('delAllList');
        this.props.deleteAllList()
    }

    render() {
        const {todos} = this.props

        const doneNum = todos.reduce((pre,cur)=>{return pre+(cur.checkVal?1:0)},0)
        const allNum = todos.length
        return (
            allNum>0?<div className="m10">
                <Checkbox onChange={this.changeCheckbox} checked={(allNum>0&&doneNum===allNum)?true:false}>{(allNum>0&&doneNum===allNum)?'取消全选':'全选'}</Checkbox>
                <span>
                    <span>已完成{doneNum}</span>/全部{allNum}
                </span>
                <Popconfirm 
                    title="确认删除全部吗？"
                    icon={<DeleteOutlined style={{ color: 'red' }} />}
                    onConfirm={this.delAllList}
                    okText="确认"
                    cancelText="取消"
                >
                    <Button
                        className="mgl10"
                        type="primary"
                        icon={<DeleteOutlined />} danger 
                    >删除完成列表</Button>
                </Popconfirm>
                {/* <Button  type="primary" icon={<DeleteOutlined />} danger onClick={this.delAllList}>删除全部</Button> */}
            </div>: null
        )
    }
}
