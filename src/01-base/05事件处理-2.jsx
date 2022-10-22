import React,{Component} from "react"

class EventMeth extends  Component {
    a = 888
    handle2(){
        console.log('handle2',this.a)
    }
    handle3 = ()=>{
        console.log('handle3',this.a)
    }
    handle4 = ()=>{
        console.log('handle4',this.a)
    }
    render() {
        return(
            <div>
                <input />
                <button onClick={
                    ()=>{
                        console.log('btn1',this.a)
                    }
                }>添加1（逻辑较少可以使用）</button>
                <button onClick={this.handle2.bind(this)}>添加2（不推荐）</button>
                <button onClick={this.handle3}>添加3（推荐，没有参数）</button>
                <button onClick={()=>{
                    this.handle4()
                }}>添加4(主要方法)</button>

            </div>
        )
    }
}
export default EventMeth