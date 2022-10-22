import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="flex a_center m10" key={item.id} 
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
            >
                <Checkbox defaultChecked={item.checkVal} onChange={this.changeState(index)}></Checkbox>
                <div className={List.list_txt}>{item.txt}</div>
                <Button type="primary" icon={<DeleteOutlined />} danger onClick={this.delList(index)}></Button>
            </div>
        )
    }
}
