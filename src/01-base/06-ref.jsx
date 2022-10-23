import React, {Component} from "react"
class RefMeth extends Component{
    myRef = React.createRef()
    addList = (e)=>{
        const {value} = e.current
        console.log('click',e.current,value)
    }
    render() {
        return(
            <div>
                {/*<input ref="mytxt"/>*/}
                <input ref={this.myRef}/>
                <button onClick={
                    ()=>{
                        this.addList(this.myRef)
                    }
                }>添加数据</button>
            </div>
        )

    }
}
export default  RefMeth;